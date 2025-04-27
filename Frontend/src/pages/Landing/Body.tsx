import React, { useEffect, useRef } from "react";
import { GoDownload } from "react-icons/go";
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
        backgroundImage: `url("./src/assets/texture_headline.webp")`,
      }}
      className="sectionContainer py-14 pb-0 px-10"
    >
      <section className="home-hero">
        <div className="text-white grid grid-cols-5 gap-4 items-center">
          <div className="col-span-2">
            <h1 className="text-6xl font-extrabold pb-4 uppercase">
              Group chat that’s all fun & games
            </h1>
            <p className="text-xl">
              Discord is great for playing games and chilling with friends, or
              even building a worldwide community. Customize your own space to
              talk, play, and hang out.
            </p>
          </div>
          <div className="col-span-3">
            <div className="relative">
              <img src="./src/assets/charactoers_full.webp" alt="" />
              <img
                src="./src/assets/clyde.webp"
                alt=""
                className="absolute left-[12%] bottom-3 h-[10%] animate-float"
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[25%]">
                <img
                  src="./src/assets/wumpus.webp"
                  alt=""
                  className="object-cover h-full w-auto"
                />
                <div ref={leafRef} className="absolute bottom-full">
                  <img src="./src/assets/wumpus-pl.webp" alt="" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-stretch justify-center gap-5 mt-10">
          <button className="bg-white text-black p-6 py-4 pt-3 rounded-xl text-lg font-medium leading-none flex items-center gap-4">
            <GoDownload size={25} /> Download for Windows
          </button>
          <button className="bg-brand text-white p-6 py-4 pt-3 rounded-xl text-lg font-medium leading-none">
            Open PingTalk in your browser
          </button>
        </div>
      </section>

      <section className="w-full mt-32 relative">
        <img
          src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6620ec7544fa3849c3cb27fc_party_wumpus.gif"
          alt=""
          className="absolute bottom-full translate-y-5 right-[20%] w-[14%]"
        />
        <div className="w-full rounded-[88px] flex items-center gap-10 shadow-2xl backdrop-blur-lg p-5 pr-16 bg-white/15 relative">
          <div className="w-2/3 rounded-[80px] overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2%2F6787b62a9742f59453ba8919_Discord_Websote_Refresh_Emojis2_EN-transcode.mp4"
            ></video>
          </div>
          <div className="w-1/3 text-white">
            <h1 className="text-4xl font-extrabold mb-3">
              MAKE YOUR GROUP CHATS MORE FUN
            </h1>
            <p>
              Use custom emoji, stickers, soundboard effects and more to add
              your personality to your voice, video, or text chat. Set your
              avatar and a custom status, and write your own profile to show up
              in chat your way.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full mt-32 relative">
        <img
          src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6729d594f586de43b73bfdf9_Clyde%20Cube.webp"
          alt=""
          className="absolute top-full -translate-y-1/3 left-[10%] w-[14%]"
        />
        <div className="w-full rounded-[88px] flex items-center gap-10 shadow-2xl backdrop-blur-lg p-5 pl-16 bg-white/15 relative">
          <div className="w-1/3 text-white">
            <h1 className="text-4xl font-extrabold mb-3 uppercase">
              stream like you’re in the same room
            </h1>
            <p>
              High quality and low latency streaming makes it feel like you're
              hanging out on the couch with friends while playing a game,
              watching shows, looking at photos, or idk doing homework or
              something.
            </p>
          </div>

          <div className="w-2/3 rounded-[80px] overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2%2F6763b611120b46189e164b4a_Discord_Website_Refresh_EN-transcode.webm"
            ></video>
          </div>
        </div>
      </section>

      <section className="w-full mt-32 relative">
        <div className="w-full rounded-[88px] flex items-center gap-10 shadow-2xl backdrop-blur-lg p-5 pr-16 bg-white/15 relative">
          <img
            src="http://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6729d519a38959fc5dcc329a_Box.webp"
            alt=""
            className="absolute bottom-full translate-y-1/2 right-[0%] w-[14%]"
          />
          <div className="w-2/3 rounded-[80px] overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2%2F6763b97ce56d6870c55bae84_Discord_Refresh_Hop-In_Fix_EN-transcode.webm"
            ></video>
          </div>
          <div className="w-1/3 text-white">
            <h1 className="text-4xl font-extrabold mb-3 uppercase">
              Hop in when you're free, no need to call
            </h1>
            <p>
              Easily hop in and out of voice or text chats without having to
              call or invite anyone, so your party chat lasts before, during,
              and after your game session.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center gap-16">
        <h1 className="font-extrabold text-6xl text-white text-center mt-40">
          YOU CAN'T SCROLL ANYMORE. BETTER GO CHAT.
        </h1>

        <button className="bg-white w-fit text-black p-6 py-4 pt-3 rounded-xl text-lg font-medium leading-none flex items-center gap-4">
          <GoDownload size={25} /> Download for Windows
        </button>

        <div className="mt-10 relative w-full">
          <img
            src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/675005dc03927e9683fcaaee_Footer-p-1600.webp"
            alt=""
            className="relative h-auto w-full translate-y-[3.5%]"
          />

          <img
            src="
          https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6729dc6215aff5ed59997842_Wumpus%C2%A0%E2%80%94%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-p-500.webp"
            alt=""
            className="absolute bottom-0 translate-y-[37%] left-1/2 -translate-x-1/2"
          />
        </div>
      </section>
    </main>
  );
};

export default Body;
