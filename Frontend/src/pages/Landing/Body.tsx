import React, { useEffect, useRef } from "react";
import { GoDownload } from "react-icons/go";
import { HomeBlockVideo } from "../../mocks/blockVideo.data";

const Body: React.FC = () => {
  const leafRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const leaf = leafRef.current;
    if (!leaf) return;
    const animate = () => {
      const time = Date.now() * 0.002;

      const skewAngle = Math.sin(time * 1.5) * 5;
      const rotateAngle = Math.sin(time * 1.2) * 5;
      const scaleValue = 1 + Math.sin(time) * 0.01;

      leaf.style.transform = `
        translate3d(0px, 0px, 0px) 
        scale3d(${scaleValue}, ${scaleValue}, 1) 
        rotate(16deg)  
        rotateZ(${rotateAngle}deg) 
        skew(0deg, ${skewAngle}deg)
      `;
      leaf.style.transformStyle = "preserve-3d";
      leaf.style.willChange = "transform";

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <main
      style={{
        backgroundImage: `url("./public/assets/texture_headline.webp")`,
      }}
      className="sectionContainer py-14 pb-0 md:px-10 px-6"
    >
      <section className="home-hero">
        <div className="text-white flex flex-col-reverse lg:grid grid-cols-5 lg:gap-4 gap-10 items-center">
          <div className="col-span-2">
            <h1 className="xl:text-6xl md:text-4xl text-2xl text-center lg:text-start font-extrabold pb-4 uppercase max-w-72 md:max-w-96 lg:max-w-full mx-auto">
              Group chat that’s all fun & games
            </h1>
            <p className="xl:text-xl md:text-lg text-base text-center lg:text-start">
              Discord is great for playing games and chilling with friends, or
              even building a worldwide community. Customize your own space to
              talk, play, and hang out.
            </p>
          </div>
          <div className="col-span-3">
            <div className="relative">
              <img src="./public/assets/charactoers_full.webp" alt="" />
              <img
                src="./public/assets/clyde.webp"
                alt=""
                className="absolute left-[12%] bottom-3 h-[10%] animate-float"
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[25%]">
                <img
                  src="./public/assets/wumpus.webp"
                  alt=""
                  className="object-cover h-full w-auto"
                />
                <div ref={leafRef} className="absolute bottom-full">
                  <img
                    src="./public/assets/wumpus-pl.webp"
                    alt=""
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-stretch justify-center gap-5 mt-10 md:text-lg text-base md:max-w-full max-w-80 mx-auto">
          <button className="bg-white text-black p-6 py-4 pt-3 rounded-xl  font-medium leading-none flex items-center justify-center gap-4">
            <GoDownload size={25} /> Download for Windows
          </button>
          <button className="bg-brand text-white p-6 py-4 pt-3 rounded-xl  font-medium leading-[25px]">
            Open PingTalk in your browser
          </button>
        </div>
      </section>

      {HomeBlockVideo.map((item) => (
        <section key={item.id} className="w-full md:mt-32 mt-20 relative">
          <img
            src={item.icon}
            alt=""
            className={`absolute bottom-full ${item.iconSize} ${item.iconPosition}`}
          />
          <div
            className={`w-full rounded-[30px] sm:rounded-[50px] lg:rounded-[88px] flex flex-col-reverse items-center lg:gap-10 gap-7 shadow-2xl backdrop-blur-lg p-5 bg-white/15 relative ${item.layout}`}
          >
            <div className="md:w-2/3 w-full lg:rounded-[80px] md:rounded-[40px] rounded-[25px] overflow-hidden">
              <video autoPlay loop muted playsInline src={item.video}></video>
            </div>
            <div className="md:w-1/3 text-white md:p-0 sm:px-11 px-5 pt-3">
              <h1 className="xl:text-4xl lg:text-3xl md:text-2xl text-3xl font-extrabold mb-3 uppercase">
                {item.title}
              </h1>
              <p>{item.description}</p>
            </div>
          </div>
        </section>
      ))}

      <section className="flex flex-col justify-center items-center gap-16">
        <h1 className="font-extrabold max-w-[70%] lg:max-w-80%  xl:text-6xl md:text-4xl text-2xl text-white text-center md:mt-32 mt-14">
          YOU CAN'T SCROLL ANYMORE. BETTER GO CHAT.
        </h1>

        <button className="bg-white w-fit text-black p-6 py-4 pt-3 rounded-xl text-lg font-medium leading-none flex items-center gap-4">
          <GoDownload size={25} /> Download for Windows
        </button>

        <div className="md:mt-10 relative w-full">
          <img
            src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/675005dc03927e9683fcaaee_Footer-p-1600.webp"
            alt=""
            className="relative h-auto w-full translate-y-[3.5%]"
          />

          <img
            src="
          https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6729dc6215aff5ed59997842_Wumpus%C2%A0%E2%80%94%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-p-500.webp"
            alt=""
            className="absolute bottom-0 translate-y-[37%] left-1/2 -translate-x-1/2 w-[50%]"
          />
        </div>
      </section>
    </main>
  );
};

export default Body;
