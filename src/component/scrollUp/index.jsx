import { useEffect, useRef } from "react";
import ScrollUpSvg from "../../assets/svgs/scrollUp.svg";

export default function ScrollUpButton() {
  const myRef = useRef();

  const windowScrolled = () => {
    if (window.scrollY !== 0) {
      myRef.current.classList.add("scroll-top-up");
    } else {
      myRef.current.classList.remove("scroll-top-up");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", windowScrolled);
  });

  const handleClick = (e) => {
    e.preventDefault();
    const headerElement = document.getElementById("header");
    if (headerElement) {
      headerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href="#header"
      onClick={(e) => handleClick(e)}
      ref={myRef}
      className="bg-primary w-[42px] cursor-pointer bottom-[-40px] right-10 opacity-0 rounded-lg h-[42px] fixed z-[99] p-4 center "
    >
      <img className="w-6" src={ScrollUpSvg} alt="..." />
    </a>
  );
}
