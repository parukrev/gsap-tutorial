import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTo = () => {
  // gsap to berarti ke kanan -> (titik awal menuju kemana)
  useGSAP(() => {
    gsap.to("#blue-box", {
      // target element nya
      x: 305, // arah x berarti horizontal
      repeat: -1, // di repeat infinity karena -1
      yoyo: true, // efek yoyo berarti bouncing
      rotation: 360, // di rotasi 360 derajat
      duration: 2, // durasi 2 detik
      ease: "power2.inOut", // efek easing
    });

    gsap.to("#scroll-icon", {
      y: 2,
      repeat: -1,
      duration: 0.5,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <main>
      <div className="">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>

      <div className="border-[1px] rounded-full w-max py-3 px-2 mt-10 mx-auto">
        <div id="scroll-icon" className="bg-slate-300 w-[2px] h-2" />
      </div>
      <p className="text-center mt-5">scroll down</p>
    </main>
  );
};

export default GsapTo;
