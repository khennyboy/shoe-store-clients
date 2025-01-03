import { useEffect } from "react";

export default function useNav({ openNav, setOpenNav, navRef }) {
  useEffect(() => {
    function closeMenu() {
      if (openNav) {
        setOpenNav(false);
      }
    }
    const handleKeydown = (e) => {
      if (openNav && e.key === "Escape") {
        setOpenNav(false);
      }
    };
    document.addEventListener("click", function (e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenNav(false);
      }
    });

    window.addEventListener("resize", closeMenu);
    document.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("resize", closeMenu);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [openNav, setOpenNav, navRef]);
}
