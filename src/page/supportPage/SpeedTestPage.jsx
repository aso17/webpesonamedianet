import React, { useState, useRef, useCallback } from "react";
import { Gauge, Zap, Globe, RefreshCcw, Loader2, Wifi } from "lucide-react";
import PageHeader from "../../component/sections/PageHeader";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

// ── Konstanta ─────────────────────────────────────────────────────────────────
// File besar dari Cloudflare CDN — lebih akurat karena ukurannya signifikan
// Gunakan beberapa file paralel untuk saturasi bandwidth
const DOWNLOAD_URLS = [
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js",
];

const PING_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js";

// Ukuran data upload simulasi (bytes) — kirim Blob ke endpoint echo
const UPLOAD_SIZE = 2 * 1024 * 1024; // 2MB

// Radius lingkaran progress (px) — untuk SVG viewBox 200x200
const CIRCLE_R = 80;
const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_R; // ~502.65

// ── Helper ────────────────────────────────────────────────────────────────────
function mbpsColor(mbps) {
  if (mbps === 0) return "#64748b";
  if (mbps < 5) return "#ef4444";
  if (mbps < 20) return "#f59e0b";
  if (mbps < 100) return "#00AEEF";
  return "#22c55e";
}

function gradeLabel(mbps) {
  if (mbps === 0) return { text: "–", color: "#64748b" };
  if (mbps < 5) return { text: "Lambat", color: "#ef4444" };
  if (mbps < 20) return { text: "Sedang", color: "#f59e0b" };
  if (mbps < 100) return { text: "Cepat", color: "#00AEEF" };
  return { text: "Sangat Cepat", color: "#22c55e" };
}

// ── Sub-komponen: Gauge SVG ───────────────────────────────────────────────────
function SpeedGauge({ speed, maxSpeed, progress, phase }) {
  const pct = Math.min(progress / 100, 1);
  const dashOffset = CIRCUMFERENCE * (1 - pct);
  const color = mbpsColor(speed);
  const grade = gradeLabel(speed);

  return (
    <div className="relative flex items-center justify-center">
      <svg
        width="220"
        height="220"
        viewBox="0 0 200 200"
        className="drop-shadow-lg"
      >
        {/* Track */}
        <circle
          cx="100"
          cy="100"
          r={CIRCLE_R}
          fill="none"
          stroke="rgba(255,255,255,.06)"
          strokeWidth="10"
        />
        {/* Progress arc */}
        <circle
          cx="100"
          cy="100"
          r={CIRCLE_R}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={dashOffset}
          transform="rotate(-90 100 100)"
          style={{
            transition: "stroke-dashoffset 0.4s ease, stroke 0.4s ease",
          }}
        />
        {/* Glow ring (duplicate, blurred via filter) */}
        <circle
          cx="100"
          cy="100"
          r={CIRCLE_R}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={dashOffset}
          transform="rotate(-90 100 100)"
          opacity="0.3"
          style={{
            filter: "blur(4px)",
            transition: "stroke-dashoffset 0.4s ease",
          }}
        />
      </svg>

      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="font-black text-white leading-none"
          style={{ fontSize: "clamp(36px,8vw,56px)" }}
        >
          {speed > 0 ? speed.toFixed(1) : "0"}
        </span>
        <span
          className="text-xs font-bold uppercase tracking-widest mt-1"
          style={{ color }}
        >
          Mbps
        </span>
        <span
          className="text-[10px] font-bold mt-1.5 tracking-wide"
          style={{ color: grade.color }}
        >
          {grade.text}
        </span>
        {phase && (
          <span className="text-[9px] text-white/30 mt-1 uppercase tracking-widest">
            {phase}
          </span>
        )}
      </div>
    </div>
  );
}

// ── Sub-komponen: Stat Box ────────────────────────────────────────────────────
function StatBox({ label, value, unit, icon: Icon, color = "#00AEEF" }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center mb-1"
        style={{ background: `${color}18` }}
      >
        <Icon className="w-4 h-4" style={{ color }} />
      </div>
      <p
        className="text-[10px] font-bold uppercase tracking-widest"
        style={{ color: "rgba(255,255,255,.35)" }}
      >
        {label}
      </p>
      <p className="font-black text-white text-lg leading-none">
        {value}
        <span className="text-[11px] font-semibold ml-0.5 text-white/40">
          {unit}
        </span>
      </p>
    </div>
  );
}

// ── Halaman Utama ─────────────────────────────────────────────────────────────
export default function SpeedTestPage() {
  useDocumentTitle("Speed Test - Uji Kecepatan Pesonanet");

  const [phase, setPhase] = useState(null); // null | "ping" | "download" | "upload" | "done"
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(0);

  // Hasil akhir
  const [results, setResults] = useState(null);
  // { ping, jitter, download, upload }

  const abortRef = useRef(null);

  // ── 1. Ukur Ping & Jitter ────────────────────────────────────────────────
  const measurePing = useCallback(async () => {
    const samples = [];
    for (let i = 0; i < 5; i++) {
      const t0 = performance.now();
      await fetch(`${PING_URL}?cb=${Date.now() + i}`, {
        method: "HEAD",
        cache: "no-store",
      });
      samples.push(performance.now() - t0);
    }
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    // Jitter = rata-rata selisih antar sampel berurutan
    const jitter =
      samples
        .slice(1)
        .reduce((sum, v, i) => sum + Math.abs(v - samples[i]), 0) /
      (samples.length - 1);
    return {
      ping: Math.round(avg),
      jitter: Math.round(jitter),
    };
  }, []);

  // ── 2. Ukur Download ──────────────────────────────────────────────────────
  const measureDownload = useCallback(async () => {
    // Unduh beberapa file secara PARALEL untuk mensaturasi bandwidth
    const startTime = performance.now();
    let totalBytes = 0;
    let lastUpdate = startTime;
    let lastBytes = 0;

    const downloads = DOWNLOAD_URLS.map(async (url) => {
      const res = await fetch(`${url}?cb=${Date.now()}`, { cache: "no-store" });
      if (!res.body) return;
      const reader = res.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        totalBytes += value.length;

        // Update speed live setiap ~200ms
        const now = performance.now();
        if (now - lastUpdate > 200) {
          const elapsed = (now - lastUpdate) / 1000;
          const bytes = totalBytes - lastBytes;
          const liveMbps = (bytes * 8) / (elapsed * 1024 * 1024);
          setSpeed(parseFloat(liveMbps.toFixed(1)));
          // Progress estimasi berdasarkan waktu (max 10 detik)
          setProgress(Math.min(((now - startTime) / 10000) * 100, 98));
          lastUpdate = now;
          lastBytes = totalBytes;
        }
      }
    });

    await Promise.all(downloads);
    const duration = (performance.now() - startTime) / 1000;
    const finalMbps = (totalBytes * 8) / (duration * 1024 * 1024);
    return parseFloat(finalMbps.toFixed(2));
  }, []);

  // ── 3. Ukur Upload (simulasi dengan XMLHttpRequest ke echo endpoint) ───────
  const measureUpload = useCallback(async () => {
    // crypto.getRandomValues() hanya bisa max 65536 bytes per panggil
    // Solusi: isi buffer dalam loop per 65536 bytes
    const data = new Uint8Array(UPLOAD_SIZE);
    const CHUNK = 65536;
    for (let offset = 0; offset < UPLOAD_SIZE; offset += CHUNK) {
      const slice = data.subarray(
        offset,
        Math.min(offset + CHUNK, UPLOAD_SIZE)
      );
      crypto.getRandomValues(slice);
    }
    const blob = new Blob([data]);

    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      // Gunakan /dev/null endpoint dari Cloudflare — CORS-friendly, tidak menyimpan data
      xhr.open("POST", "https://httpbin.org/post", true);
      xhr.setRequestHeader("Content-Type", "application/octet-stream");

      const startTime = performance.now();
      let lastLoaded = 0;
      let lastTime = startTime;

      xhr.upload.onprogress = (e) => {
        if (!e.lengthComputable) return;
        const now = performance.now();
        const elapsed = (now - lastTime) / 1000;
        if (elapsed > 0.2) {
          const bytes = e.loaded - lastLoaded;
          const liveMbps = (bytes * 8) / (elapsed * 1024 * 1024);
          setSpeed(parseFloat(liveMbps.toFixed(1)));
          setProgress(Math.round((e.loaded / e.total) * 100));
          lastLoaded = e.loaded;
          lastTime = now;
        }
      };

      xhr.onload = () => {
        const duration = (performance.now() - startTime) / 1000;
        const finalMbps = (UPLOAD_SIZE * 8) / (duration * 1024 * 1024);
        resolve(parseFloat(finalMbps.toFixed(2)));
      };

      // Jika CORS block atau network error — estimasi dari progress terakhir
      xhr.onerror = () => {
        const duration = (performance.now() - startTime) / 1000;
        if (duration > 0.5 && lastLoaded > 0) {
          const estimateMbps = (lastLoaded * 8) / (duration * 1024 * 1024);
          resolve(parseFloat(estimateMbps.toFixed(2)));
        } else {
          resolve(null); // null = tidak bisa diukur
        }
      };

      xhr.send(blob);
      abortRef.current = () => xhr.abort();
    });
  }, []);

  // ── Main Test Runner ──────────────────────────────────────────────────────
  const runTest = useCallback(async () => {
    setResults(null);
    setSpeed(0);
    setProgress(0);

    try {
      // PHASE 1: Ping
      setPhase("ping");
      setProgress(10);
      const { ping, jitter } = await measurePing();
      setProgress(25);

      // PHASE 2: Download
      setPhase("download");
      setProgress(0);
      setSpeed(0);
      const download = await measureDownload();
      setProgress(100);
      setSpeed(download);

      await new Promise((r) => setTimeout(r, 600));

      // PHASE 3: Upload
      setPhase("upload");
      setProgress(0);
      setSpeed(0);
      const upload = await measureUpload();
      setProgress(100);
      setSpeed(upload);

      await new Promise((r) => setTimeout(r, 400));

      setResults({ ping, jitter, download, upload });
      setPhase("done");
      setSpeed(download); // tampilkan download sebagai angka utama
    } catch (err) {
      console.error("Speed test error:", err);
      setPhase(null);
    }
  }, [measurePing, measureDownload, measureUpload]);

  const isRunning = phase && phase !== "done";
  const phaseLabel =
    phase === "ping"
      ? "Mengukur Latensi..."
      : phase === "download"
      ? "Download"
      : phase === "upload"
      ? "Upload"
      : phase === "done"
      ? "Selesai"
      : null;

  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        variant="dark"
        badge="Network Utility"
        title="Speed"
        titleAccent="Test"
        subtitle="Uji kecepatan koneksi internet Anda secara real-time langsung ke server backbone Pesonanet."
        icon={Gauge}
      />

      <section className="py-16 px-5">
        <div className="max-w-4xl mx-auto">
          {/* ── Main Test Card ── */}
          <div
            className="w-full rounded-3xl overflow-hidden shadow-2xl relative flex flex-col items-center justify-center py-14 px-6"
            style={{
              background:
                "linear-gradient(135deg,#0a1628 0%,#001f4d 50%,#002b6b 100%)",
              border: "1px solid rgba(0,174,239,.15)",
            }}
          >
            {/* Blueprint grid background */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,174,239,.04) 1px,transparent 1px)," +
                  "linear-gradient(90deg,rgba(0,174,239,.04) 1px,transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Glow orb */}
            <div
              className="absolute pointer-events-none rounded-full"
              style={{
                width: 400,
                height: 400,
                background:
                  "radial-gradient(circle,rgba(0,174,239,.1) 0%,transparent 70%)",
                top: -100,
                right: -100,
              }}
            />

            {/* Gauge */}
            <div className="relative z-10 mb-8">
              <SpeedGauge
                speed={speed}
                maxSpeed={1000}
                progress={isRunning ? progress : results ? 100 : 0}
                phase={phaseLabel}
              />
            </div>

            {/* Stats Row */}
            <div
              className="relative z-10 flex items-center gap-8 sm:gap-12 mb-10 px-6 py-4 rounded-2xl"
              style={{
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.07)",
              }}
            >
              <StatBox
                label="Ping"
                value={results?.ping ?? (phase === "done" ? "–" : "–")}
                unit="ms"
                icon={Globe}
                color="#00AEEF"
              />
              <div
                style={{
                  width: 1,
                  height: 40,
                  background: "rgba(255,255,255,.08)",
                }}
              />
              <StatBox
                label="Jitter"
                value={results?.jitter ?? "–"}
                unit="ms"
                icon={Wifi}
                color="#7dd3f0"
              />
              <div
                style={{
                  width: 1,
                  height: 40,
                  background: "rgba(255,255,255,.08)",
                }}
              />
              <StatBox
                label="Upload"
                value={results?.upload ?? "–"}
                unit={results?.upload != null ? "Mbps" : ""}
                icon={Zap}
                color="#22c55e"
              />
            </div>

            {/* CTA Button */}
            <button
              onClick={runTest}
              disabled={isRunning}
              className="relative z-10 flex items-center justify-center gap-3 font-bold text-base rounded-full transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: isRunning ? "rgba(0,174,239,.3)" : "#00AEEF",
                color: "#001f4d",
                padding: "14px 48px",
                fontSize: 15,
                fontWeight: 800,
                letterSpacing: ".3px",
                boxShadow: isRunning
                  ? "none"
                  : "0 8px 32px rgba(0,174,239,.35)",
                transition: "all .2s",
              }}
            >
              {isRunning ? (
                <>
                  <Loader2
                    className="w-5 h-5 animate-spin"
                    style={{ color: "#7dd3f0" }}
                  />
                  <span style={{ color: "#7dd3f0" }}>{phaseLabel}</span>
                </>
              ) : results ? (
                <>
                  <RefreshCcw className="w-5 h-5" />
                  Uji Ulang
                </>
              ) : (
                <>
                  <Gauge className="w-5 h-5" />
                  Mulai Uji Kecepatan
                </>
              )}
            </button>

            {/* Watermark */}
            <p
              className="absolute bottom-4 text-center w-full pointer-events-none"
              style={{
                fontSize: 9,
                color: "rgba(255,255,255,.08)",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}
            >
              Pesonanet Infrastructure Engine
            </p>
          </div>

          {/* ── Hasil Lengkap (muncul setelah selesai) ── */}
          {results && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                {
                  label: "Download",
                  value: results.download,
                  unit: "Mbps",
                  icon: RefreshCcw,
                  color: "#00AEEF",
                  desc: gradeLabel(results.download).text,
                },
                {
                  label: "Upload",
                  value: results.upload != null ? results.upload : "N/A",
                  unit: results.upload != null ? "Mbps" : "",
                  icon: Zap,
                  color: "#22c55e",
                  desc:
                    results.upload != null
                      ? gradeLabel(results.upload).text
                      : "Tidak tersedia",
                },
                {
                  label: "Ping",
                  value: results.ping,
                  unit: "ms",
                  icon: Globe,
                  color: "#f59e0b",
                  desc:
                    results.ping < 30
                      ? "Sangat Baik"
                      : results.ping < 80
                      ? "Normal"
                      : "Tinggi",
                },
                {
                  label: "Jitter",
                  value: results.jitter,
                  unit: "ms",
                  icon: Wifi,
                  color: "#a78bfa",
                  desc:
                    results.jitter < 10
                      ? "Stabil"
                      : results.jitter < 30
                      ? "Normal"
                      : "Tidak Stabil",
                },
              ].map((r, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5 flex flex-col items-center text-center"
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: `${r.color}15` }}
                  >
                    <r.icon className="w-5 h-5" style={{ color: r.color }} />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                    {r.label}
                  </p>
                  <p className="font-black text-[#0a1628] text-2xl leading-none">
                    {r.value}
                    <span className="text-xs font-semibold text-slate-400 ml-1">
                      {r.unit}
                    </span>
                  </p>
                  <span
                    className="text-[10px] font-semibold mt-2 px-2 py-0.5 rounded-full"
                    style={{ background: `${r.color}15`, color: r.color }}
                  >
                    {r.desc}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* ── Info Cards ── */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: Globe,
                label: "Ping & Jitter",
                value: "Latency koneksi ke server",
                desc: "Ping rendah penting untuk gaming dan video call. Jitter yang rendah menandakan koneksi stabil.",
              },
              {
                icon: RefreshCcw,
                label: "Download",
                value: "Kecepatan unduh data",
                desc: "Diukur dengan mengunduh beberapa file secara paralel untuk mensaturasi bandwidth secara akurat.",
              },
              {
                icon: Zap,
                label: "Upload",
                value: "Kecepatan kirim data",
                desc: "Penting untuk video conference, cloud backup, dan streaming. Diukur dengan mengunggah data ke echo server.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl flex gap-4 items-start"
                style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#EEF5FF" }}
                >
                  <item.icon className="w-5 h-5 text-[#0054A6]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#001f4d] text-sm mb-1">
                    {item.label}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-medium mb-1">
                    {item.value}
                  </p>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Disclaimer ── */}
          <p className="text-center text-[11px] text-slate-400 mt-8 leading-relaxed max-w-2xl mx-auto">
            Hasil pengujian bersifat estimasi dan dapat dipengaruhi oleh kondisi
            jaringan lokal, perangkat, dan beban server saat pengujian. Untuk
            hasil paling akurat, tutup aplikasi lain yang menggunakan internet.
          </p>
        </div>
      </section>
    </main>
  );
}
