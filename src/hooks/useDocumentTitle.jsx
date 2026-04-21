import { useEffect } from "react";

export const useDocumentTitle = (title) => {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = `${title} | Pesonanet`;

    // Cleanup: Balikin ke title awal pas pindah page
    return () => {
      document.title = originalTitle;
    };
  }, [title]);
};
