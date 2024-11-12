import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFromTo = () => {
  useGSAP(() => {
    gsap.fromTo(
      // bulak balik dari kiri ke kanan ke kiri lagi
      "#blue-box", // target element nya
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%", // border radius awal
      },
      {
        x: 250, // arah x berarti horizontal
        repeat: -1, // di repeat infinity karena -1
        yoyo: true, // efek yoyo berarti bouncing
        borderRadius: "50%", // border radius di titik akhir
        rotation: 360, // di rotasi 360 derajat
        duration: 2, // durasi 2 detik
        ease: "power2.inOut", // efek easing
      }
    );
  }, []);

  return (
    <main>
      <div className="">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFromTo;
