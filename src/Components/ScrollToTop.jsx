import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 px-3 py-1 rounded-full bg-[hsl(142,52%,32%)] text-[hsl(0,0%,100%)] shadow-xl hover:scale-110 hover:bg-[hsl(142,52%,32%)]/90 transition-all duration-300"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollToTop;