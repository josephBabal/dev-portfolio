import { useEffect } from "react";

const useMouseMove = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor") as HTMLDivElement;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const margin = 10; // Margin from viewport edges to hide cursor

      // Check if cursor is within margin from viewport edges
      const isWithinMargin =
        clientX >= margin &&
        clientX <= innerWidth - margin &&
        clientY >= margin &&
        clientY <= innerHeight - margin;

      if (isWithinMargin) {
        cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
        cursor.style.opacity = "1";
      } else {
        cursor.style.opacity = "0";
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cursor.style.opacity = "0"; // Hide cursor when the document is hidden
      } else {
        cursor.style.opacity = "1"; // Show cursor when the document is visible
      }
    };

    const handleWindowBlur = () => {
      cursor.style.opacity = "0"; // Hide cursor when the window loses focus
    };

    const handleWindowFocus = () => {
      cursor.style.opacity = "1"; // Show cursor when the window gains focus
    };

    const handleMouseEnterNavLink = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".nav-link")) {
        cursor.classList.add("nav-link-hover");
      }
    };

    const handleMouseLeaveNavLink = (e: MouseEvent) => {
      cursor.classList.remove("nav-link-hover");
    };

    const handleMouseEnterSocialIcon = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".social-icon-link")) {
        cursor.style.display = "none"; // Hide cursor when hovering over social icons
      }
    };

    const handleMouseLeaveSocialIcon = () => {
      cursor.style.display = "block"; // Show cursor when leaving social icons
    };

    const handleMouseEnterFooter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".footer-container")) {
        cursor.style.display = "none";
      }
    };

    const handleMouseLeaveFooter = () => {
      cursor.style.display = "block";
    };



    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("focus", handleWindowFocus);

    document.querySelectorAll(".nav-link").forEach((link) => {
      (link as HTMLElement).addEventListener(
        "mouseenter",
        handleMouseEnterNavLink as EventListener
      );
      (link as HTMLElement).addEventListener(
        "mouseleave",
        handleMouseLeaveNavLink as EventListener
      );
    });

    document.querySelectorAll(".social-icon-link").forEach((link) => {
      (link as HTMLElement).addEventListener(
        "mouseenter",
        handleMouseEnterSocialIcon
      );
      (link as HTMLElement).addEventListener(
        "mouseleave",
        handleMouseLeaveSocialIcon
      );
    });

    document.querySelectorAll(".footer-container").forEach((link) => {
      (link as HTMLElement).addEventListener(
        "mouseenter",
        handleMouseEnterFooter
      );
      (link as HTMLElement).addEventListener(
        "mouseleave",
        handleMouseLeaveFooter
      );
    });


    return () => {
      document.removeEventListener("mousemove", handleMouseMove);

      document.removeEventListener("visibilitychange", handleVisibilityChange);

      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("focus", handleWindowFocus);

      document.querySelectorAll(".nav-link").forEach((link) => {
        (link as HTMLElement).removeEventListener(
          "mouseenter",
          handleMouseEnterNavLink as EventListener
        );
        (link as HTMLElement).removeEventListener(
          "mouseleave",
          handleMouseLeaveNavLink as EventListener
        );
      });

      document.querySelectorAll(".social-icon-link").forEach((link) => {
        (link as HTMLElement).removeEventListener(
          "mouseenter",
          handleMouseEnterSocialIcon
        );
        (link as HTMLElement).removeEventListener(
          "mouseleave",
          handleMouseLeaveSocialIcon
        );
      });

      document.querySelectorAll(".footer-container").forEach((link) => {
        (link as HTMLElement).removeEventListener(
          "mouseenter",
          handleMouseEnterFooter
        );
        (link as HTMLElement).removeEventListener(
          "mouseleave",
          handleMouseLeaveFooter
        );
      });
  
    };
  }, []);
};

export default useMouseMove;
