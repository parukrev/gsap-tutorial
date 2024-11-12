import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTimeline = () => {
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1, // delay 2 detik per titik henti
    yoyo: true,
  });

  useGSAP(() => {
    timeline.to("#blue-box", {
      x: 350,
      rotation: 360,
      borderRadius: "50%",
      duration: 2,
      ease: "power2.inOut",
    });

    timeline.to('#blue-box', {
      x: 500,
      scale: 1,
      rotation: 360,
      borderRadius: '20px',
      duration: 2,
      ease: "back.inOut"
    })
  }, []);

  return (
    <main>
      <div className="">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
      <button id="btn" className="bg-red-800 px-3 py-2 w-max mt-10 rounded-md">
        Play/Pause
      </button>
    </main>
  );
};

export default GsapTimeline;
