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
  {
    label: "Home",
    href: "/",
    icon: <HomeIcon className="w-4 h-4 text-primary" />,
  },
  {
    label: "Perusahaan",
    href: "#",
    submenu: [
      {
        label: "Tentang Kami",
        href: "/company/about-us",
        icon: <UserIcon className="w-4 h-4 text-primary" />,
        desc: "Profil dan sejarah perusahaan",
      },
      {
        label: "Visi dan Misi",
        href: "/company/vision-mission",
        icon: <EyeIcon className="w-4 h-4 text-primary" />,
        desc: "Arah dan tujuan perusahaan",
      },
      {
        label: "Sejarah Perusahaan",
        href: "/company/history",
        icon: <BookOpenIcon className="w-4 h-4 text-primary" />,
        desc: "Perjalanan sejak berdiri",
      },
      {
        label: "Nilai Perusahaan",
        href: "/company/values",
        icon: <ShieldIcon className="w-4 h-4 text-primary" />,
        desc: "Integritas dan komitmen",
      },
      {
        label: "Legalitas",
        href: "/company/legal",
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
        href: "/services/dedicated-internet",
        icon: <WifiIcon className="w-4 h-4 text-primary" />,
        desc: "Koneksi eksklusif SLA guaranteed",
      },
      {
        label: "Manage Service",
        href: "/services/managed-services",
        icon: <ServerIcon className="w-4 h-4 text-primary" />,
        desc: "Pengelolaan jaringan terpadu",
      },
      {
        label: "Bisnis",
        href: "/services/business",
        icon: <BriefcaseIcon className="w-4 h-4 text-primary" />,
        desc: "Solusi internet untuk UMKM & Retail",
      },
      {
        label: "Perkantoran",
        href: "/services/corporate",
        icon: <Building2Icon className="w-4 h-4 text-primary" />,
        desc: "Koneksi stabil untuk korporasi besar",
      },
      {
        label: "Reseller",
        href: "/services/reseller",
        icon: <UsersIcon className="w-4 h-4 text-primary" />,
        desc: "Kemitraan strategis infrastruktur",
      },
      {
        label: "Broadband",
        href: "/services/broadband",
        icon: <ZapIcon className="w-4 h-4 text-primary" />,
        desc: "Internet rumah & bisnis cepat",
      },
    ],
  },
  { label: "Karir", href: "/careers" },
  {
    label: "Dukungan",
    href: "#",
    submenu: [
      {
        label: "Q&A",
        href: "/support/faq",
        icon: <HelpCircleIcon className="w-4 h-4 text-primary" />,
        desc: "Pertanyaan yang sering ditanya",
      },
      {
        label: "MRTG",
        href: "/support/mrtg",
        icon: <ActivityIcon className="w-4 h-4 text-primary" />,
        desc: "Monitoring traffic real-time",
      },
      {
        label: "Tes Bandwidth",
        href: "/support/speed-test",
        icon: <GaugeIcon className="w-4 h-4 text-primary" />,
        desc: "Uji kecepatan koneksi Anda",
      },
      // {
      //   label: "Looking Glass",
      //   href: "/support/looking-glass",
      //   icon: <SearchIcon className="w-4 h-4 text-primary" />,
      //   desc: "Diagnostik routing jaringan",
      // },
      // {
      //   label: "RPKI Validator",
      //   href: "/support/rpki-validator",
      //   icon: <ShieldIcon className="w-4 h-4 text-primary" />,
      //   desc: "Validasi keamanan routing",
      // },
    ],
  },
  {
    label: "Lokasi",
    href: "/locations",
  },
];
