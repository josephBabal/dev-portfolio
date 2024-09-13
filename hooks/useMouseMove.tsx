import { useEffect } from "react";

const useMouseMove = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor') as HTMLDivElement;

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
        cursor.style.opacity = '1'; 
      } else {
        cursor.style.opacity = '0';
      }
    };

    const handleMouseEnterNavLink = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.nav_link')) {
        cursor.classList.add('nav_link-hover');
      }
    };

    const handleMouseLeaveNavLink = (e: MouseEvent) => {
      cursor.classList.remove('nav_link-hover');
    };



    const handleVisibilityChange = () => {
      if (document.hidden) {
        cursor.style.opacity = '0'; // Hide cursor when the document is hidden
      } else {
        cursor.style.opacity = '1'; // Show cursor when the document is visible
      }
    };

    const handleWindowBlur = () => {
      cursor.style.opacity = '0'; // Hide cursor when the window loses focus
    };

    const handleWindowFocus = () => {
      cursor.style.opacity = '1'; // Show cursor when the window gains focus
    };



    document.addEventListener('mousemove', handleMouseMove);

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);

    document.querySelectorAll('.nav_link').forEach(link => {
      (link as HTMLElement).addEventListener('mouseenter', handleMouseEnterNavLink as EventListener);
      (link as HTMLElement).addEventListener('mouseleave', handleMouseLeaveNavLink as EventListener);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);

      document.removeEventListener('visibilitychange', handleVisibilityChange);

      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);

      document.querySelectorAll('.nav_link').forEach(link => {
        (link as HTMLElement).removeEventListener('mouseenter', handleMouseEnterNavLink as EventListener);
        (link as HTMLElement).removeEventListener('mouseleave', handleMouseLeaveNavLink as EventListener);
      });

    };
  }, []);


}

export default useMouseMove