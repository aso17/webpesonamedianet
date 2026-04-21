import {
  HomeIcon, // Tambahkan ikon Home
  UserIcon,
  EyeIcon,
  BookOpenIcon,
  ShieldIcon,
  FileIcon,
  WifiIcon,
  ServerIcon,
  ZapIcon,
  BriefcaseIcon,
  Building2Icon,
  UsersIcon,
  HelpCircleIcon,
  ActivityIcon,
  GaugeIcon,
  SearchIcon,
  PlusCircleIcon,
  CreditCardIcon,
} from "lucide-react";

export const NAV_ITEMS = [
  // --- MENU HOME BARU ---
  {
    label: "Home",
    href: "/",
    icon: <HomeIcon className="w-4 h-4 text-primary" />,
  },
  // ----------------------
  {
    label: "Perusahaan",
    href: "#",
    submenu: [
      {
        label: "Tentang Kami",
        href: "/perusahaan/tentang-kami",
        icon: <UserIcon className="w-4 h-4 text-primary" />,
        desc: "Profil dan sejarah perusahaan",
      },
      {
        label: "Visi dan Misi",
        href: "/perusahaan/visi-misi",
        icon: <EyeIcon className="w-4 h-4 text-primary" />,
        desc: "Arah dan tujuan perusahaan",
      },
      {
        label: "Sejarah Perusahaan",
        href: "/perusahaan/sejarah",
        icon: <BookOpenIcon className="w-4 h-4 text-primary" />,
        desc: "Perjalanan sejak berdiri",
      },
      {
        label: "Nilai Perusahaan",
        href: "/perusahaan/nilai",
        icon: <ShieldIcon className="w-4 h-4 text-primary" />,
        desc: "Integritas dan komitmen",
      },
      {
        label: "Legalitas",
        href: "/perusahaan/legalitas",
        icon: <FileIcon className="w-4 h-4 text-primary" />,
        desc: "Dokumen dan perizinan resmi",
      },
    ],
  },
  {
    label: "Layanan",
    href: "#",
    submenu: [
      {
        label: "Internet Dedicated",
        href: "/layanan/internet-dedicated",
        icon: <WifiIcon className="w-4 h-4 text-primary" />,
        desc: "Koneksi eksklusif SLA guaranteed",
      },
      {
        label: "Manage Service",
        href: "/layanan/manage-service",
        icon: <ServerIcon className="w-4 h-4 text-primary" />,
        desc: "Pengelolaan jaringan terpadu",
      },
      {
        label: "Bisnis",
        href: "/layanan/bisnis",
        icon: <BriefcaseIcon className="w-4 h-4 text-primary" />,
        desc: "Solusi internet untuk UMKM & Retail",
      },
      {
        label: "Perkantoran",
        href: "/layanan/perkantoran",
        icon: <Building2Icon className="w-4 h-4 text-primary" />,
        desc: "Koneksi stabil untuk korporasi besar",
      },
      {
        label: "Reseller",
        href: "/layanan/reseller",
        icon: <UsersIcon className="w-4 h-4 text-primary" />,
        desc: "Kemitraan strategis infrastruktur",
      },
      {
        label: "Broadband",
        href: "/layanan/broadband",
        icon: <ZapIcon className="w-4 h-4 text-primary" />,
        desc: "Internet rumah & bisnis cepat",
      },
    ],
  },
  // { label: "Berita Media", href: "/berita-media" },
  { label: "Karir", href: "/karir" },
  {
    label: "Dukungan",
    href: "#",
    submenu: [
      {
        label: "Q&A",
        href: "/dukungan/qa",
        icon: <HelpCircleIcon className="w-4 h-4 text-primary" />,
        desc: "Pertanyaan yang sering ditanya",
      },
      {
        label: "MRTG",
        href: "/dukungan/mrtg",
        icon: <ActivityIcon className="w-4 h-4 text-primary" />,
        desc: "Monitoring traffic real-time",
      },
      {
        label: "Tes Bandwidth",
        href: "/dukungan/tes-bandwidth",
        icon: <GaugeIcon className="w-4 h-4 text-primary" />,
        desc: "Uji kecepatan koneksi Anda",
      },
      {
        label: "Looking Glass",
        href: "/dukungan/looking-glass",
        icon: <SearchIcon className="w-4 h-4 text-primary" />,
        desc: "Diagnostik routing jaringan",
      },
      {
        label: "RPKI Validator",
        href: "/dukungan/rpki-validator",
        icon: <ShieldIcon className="w-4 h-4 text-primary" />,
        desc: "Validasi keamanan routing",
      },
    ],
  },
  {
    label: "Lokasi",
    href: "lokasi",
    // submenu: [
    //   {
    //     label: "Daftar",
    //     href: "/pelanggan/daftar",
    //     icon: <PlusCircleIcon className="w-4 h-4 text-primary" />,
    //     desc: "Buat akun baru",
    //   },
    //   {
    //     label: "Informasi Pembayaran",
    //     href: "/pelanggan/pembayaran",
    //     icon: <CreditCardIcon className="w-4 h-4 text-primary" />,
    //     desc: "Tagihan dan metode bayar",
    //   },
    // ],
  },
];
