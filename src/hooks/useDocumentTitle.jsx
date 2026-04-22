import { useEffect } from "react";
// Import icon dari assets agar Vite memprosesnya dan memasukkannya ke folder assets
import siteIcon from "../assets/favicon.ico";

export const useDocumentTitle = (title) => {
  useEffect(() => {
    // 1. Update Judul Halaman
    const originalTitle = document.title;
    document.title = `${title} | Pesonanet`;

    // 2. Update Favicon Secara Dinamis
    // Cari elemen <link rel="icon"> di index.html
    let link = document.querySelector("link[rel~='icon']");

    // Jika tidak ada, kita buat baru
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }

    // Set href ke siteIcon yang sudah di-import (otomatis ditarik dari folder assets)
    link.href = siteIcon;

    // Cleanup: Balikin ke title awal pas pindah page
    return () => {
      document.title = originalTitle;
    };
  }, [title]);
};
