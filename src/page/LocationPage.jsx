import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  ExternalLink,
} from "lucide-react";
import PageHeader from "../component/sections/PageHeader";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function LocationPage() {
  useDocumentTitle("Lokasi & Kontak - Pesonanet Tangerang");

  const address =
    "KP. PEUSAR RT.005/001, Desa/Kelurahan Binong, Kec. Curug, Kab. Tangerang, Provinsi Banten";
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(address);

  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        variant="location"
        badge="Connect with Us"
        title="Lokasi Kami"
        titleAccent="Tangerang"
        subtitle="Kunjungi kantor pusat kami atau hubungi tim dukungan kami untuk layanan internet terbaik di wilayah Anda."
        stats={[
          { num: "24/7", suffix: "", label: "NOC Support" },
          { num: "Curug", suffix: "", label: "Base Office" },
          { num: "Banten", suffix: "", label: "Region" },
        ]}
      />

      <section className="py-24 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Info Kontak & Alamat */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-10">
                <h2 className="text-[32px] md:text-[40px] font-black text-[#001f4d] leading-tight mb-6">
                  Kantor Pusat <span className="text-[#00AEEF]">Pesonanet</span>
                </h2>
                <div className="flex gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#00AEEF]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#001f4d] mb-1">
                      Alamat Resmi
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {address}
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-6 rounded-3xl border border-slate-100 flex flex-col gap-3">
                    <Phone className="w-5 h-5 text-[#00AEEF]" />
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Telepon
                    </div>
                    <div className="text-[#001f4d] font-bold text-sm">
                      (021) 397-183-19
                    </div>
                  </div>
                  <div className="p-6 rounded-3xl border border-slate-100 flex flex-col gap-3">
                    <Mail className="w-5 h-5 text-[#00AEEF]" />
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Email
                    </div>
                    <div className="text-[#001f4d] font-bold text-sm">
                      admin@pesonamedia.net
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-500">
                  <Clock className="w-5 h-5 text-[#00AEEF]" />
                  <span className="text-sm">
                    Jam Operasional: <strong>08:30 - 17:30 WIB</strong>
                  </span>
                </div>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#001f4d] text-white rounded-full font-bold hover:bg-[#003d8f] transition-all"
                >
                  <Navigation className="w-4 h-4" /> Buka di Google Maps
                </a>
              </div>
            </motion.div>

            {/* Map Preview Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square lg:aspect-video rounded-[40px] bg-slate-100 border-8 border-slate-50 overflow-hidden relative shadow-2xl">
                {/* Ganti 'src' dengan embed link dari Google Maps jika sudah ada titik koordinat pastinya.
                 */}
                <iframe
                  title="Pesonanet Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    address
                  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  style={{ filter: "grayscale(0.2) contrast(1.1)" }}
                ></iframe>

                <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-full shadow-lg border border-slate-100 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#001f4d]">
                    Live Status: Active
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
