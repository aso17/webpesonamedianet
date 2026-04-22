import React from "react";
import { Activity, Lock, ExternalLink, BarChart3 } from "lucide-react";
import PageHeader from "../../component/sections/PageHeader";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export default function MRTGPage() {
  useDocumentTitle("MRTG - Monitoring Traffic Pesonanet");

  // Ganti URL ini dengan alamat portal login MRTG atau Mikrotik Mas
  const MRTG_LOGIN_URL = "https://mrtg.pesonanet.id/login";

  return (
    <main className="min-h-screen bg-[#000a1a]">
      <PageHeader
        variant="dark"
        badge="Network Monitoring"
        title="MRTG"
        titleAccent="Traffic"
        subtitle="Pantau penggunaan bandwidth Anda secara real-time melalui sistem grafik monitoring kami."
        icon={Activity}
      />

      <section className="py-24 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-10 md:p-16 text-center backdrop-blur-md">
            <div className="w-20 h-20 bg-[#00AEEF]/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Lock className="w-10 h-10 text-[#00AEEF]" />
            </div>
            <h2 className="text-white text-2xl md:text-3xl font-black mb-4">
              Akses Terbatas
            </h2>
            <p className="text-white/50 mb-10 max-w-md mx-auto text-sm">
              Halaman monitoring MRTG memerlukan kredensial khusus. Silakan
              masukkan detail login yang telah diberikan oleh tim NOC kami.
            </p>

            <div className="max-w-sm mx-auto space-y-4">
              {/* Tombol Redirect ke Portal Eksternal */}
              <a
                href={MRTG_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#00AEEF] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#00AEEF]/20"
              >
                Login ke Portal MRTG <ExternalLink className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-white/30 uppercase tracking-[2px] pt-4">
                Powered by Pesonanet NOC System
              </p>
            </div>
          </div>

          {/* Info Teknis Pelengkap */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4 transition-colors hover:bg-white/10">
              <BarChart3 className="w-8 h-8 text-[#00AEEF]/50" />
              <div className="text-left">
                <div className="text-white font-bold text-sm">
                  Real-time Data
                </div>
                <div className="text-white/40 text-[11px] font-medium uppercase tracking-wider">
                  Update setiap 5 menit
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4 transition-colors hover:bg-white/10">
              <Activity className="w-8 h-8 text-[#00AEEF]/50" />
              <div className="text-left">
                <div className="text-white font-bold text-sm">
                  Traffic Analysis
                </div>
                <div className="text-white/40 text-[11px] font-medium uppercase tracking-wider">
                  Daily, Weekly & Monthly Report
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
