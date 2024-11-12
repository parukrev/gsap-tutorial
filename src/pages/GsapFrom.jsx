import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFrom = () => {
  useGSAP(() => {
    gsap.from("#blue-box", { // from berarti dari kiri <- (titik awal nya berasal darimana)
      // target element nya
      x: 250, // arah x berarti horizontal
      repeat: -1, // di repeat infinity karena -1
      yoyo: true, // efek yoyo berarti bouncing
      rotation: 360, // di rotasi 360 derajat
      duration: 2, // durasi 2 detik
      ease: "power2.inOut", // efek easing
    });
  }, []);

  return (
    <main>
      <div className="">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFrom;
