import React, { useState } from "react";
import { Gauge, Zap, Globe, RefreshCcw, X } from "lucide-react";
import PageHeader from "../../component/sections/PageHeader";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export default function SpeedTestPage() {
  useDocumentTitle("Speed Test - Uji Kecepatan Pesonanet");
  const [isTesting, setIsTesting] = useState(false);

  // Pakai URL full embed dari LibreSpeed agar terisolasi sempurna
  const speedtestUrl =
    "https://librespeed.org/backend/example-singleServer-full.html";

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

      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="aspect-[4/5] md:aspect-video w-full bg-slate-900 rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl relative border-2 md:border-4 border-[#00AEEF]/20 transition-all duration-500">
            {!isTesting ? (
              /* TAMPILAN AWAL - Bersih tanpa script-loading logic */
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-10 animate-in fade-in duration-500">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#00AEEF]/10 rounded-full flex items-center justify-center mb-4 md:mb-6 animate-pulse">
                  <Zap className="w-8 h-8 md:w-10 md:h-10 text-[#00AEEF]" />
                </div>

                <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  <h3 className="text-white text-lg md:text-xl font-bold">
                    Siap Melakukan Pengujian?
                  </h3>
                  <p className="text-white/40 text-xs md:text-sm max-w-[240px] md:max-w-xs mx-auto leading-relaxed">
                    Klik tombol di bawah untuk memulai pengujian ke server
                    terdekat.
                  </p>
                </div>

                <button
                  onClick={() => setIsTesting(true)}
                  className="w-full max-w-[200px] md:max-w-none px-8 md:px-10 py-3.5 md:py-4 bg-[#00AEEF] text-white rounded-full text-sm md:text-base font-bold hover:scale-105 active:scale-95 transition-all"
                >
                  Mulai Test
                </button>
              </div>
            ) : (
              /* TAMPILAN IFRAME - Terisolasi dari Console Error */
              <div className="w-full h-full bg-white relative animate-in zoom-in-95 duration-500">
                <iframe
                  src={speedtestUrl}
                  className="w-full h-full border-none"
                  title="LibreSpeed Test"
                  allow="geolocation"
                  loading="lazy"
                />
                <button
                  onClick={() => setIsTesting(false)}
                  className="absolute top-4 right-4 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:rotate-90 z-50"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                label: "Latency",
                value: "Ping rendah untuk gaming",
                icon: Globe,
              },
              {
                label: "Download",
                value: "Kecepatan unduh data",
                icon: RefreshCcw,
              },
              { label: "Upload", value: "Kecepatan unggah data", icon: Zap },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#0054A6]">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#001f4d] text-sm">
                    {item.label}
                  </h4>
                  <p className="text-xs text-slate-500">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
