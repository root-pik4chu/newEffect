import { useState } from "react";

import "./App.css";
import CircularGallery from "./CircularGallery";
import ImageTrail from "./ImageTrail";
import ShinyText from "./ShinyText";
import SmallSizeText from "./SmallSizeText";
import StarBorder from "./StarBorder";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full h-[110vh] bg-zinc-950 relative">
        <div className="absolute w-full top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 mt-[10vh]">
          <div className="flex flex-col w-full h-full items-center justify-center">
            <ShinyText
              text="Building Smarter Digital Future"
              disabled={false}
              speed={4}
              className="custom-class"
            />
            <div className=" mt-[5vh] ">
              <SmallSizeText
                text="Infrawave Solutions empowers businesses with cutting-edge digital services, offering web and mobile app development, AI/ML solutions, blockchain integration, and innovative technology for seamless digital transformation."
                disabled={false}
                speed={4}
                className="custom-class"
              />
            </div>
          </div>

          <div className="w-full h-[5vh]  mt-[5vh] flex itexms-center justify-center">
            <div className="w-1/2 h-full flex itexms-center justify-center gap-[1vw]">
              <div className=" ">
                <StarBorder
                  as="button"
                  className="custom-class"
                  color="cyan"
                  speed="5s"
                >
                  Get in touch
                </StarBorder>
              </div>
              <div className=" ">
                <StarBorder
                  as="button"
                  className="custom-class"
                  color="cyan"
                  speed="5s"
                >
                  Our Services
                </StarBorder>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ height: "600px", position: "relative", overflow: "hidden" }}
        >
          <ImageTrail
            items={[
              "https://picsum.photos/id/287/300/300",
              "https://picsum.photos/id/1001/300/300",
              "https://picsum.photos/id/1025/300/300",
              "https://picsum.photos/id/1026/300/300",
              "https://picsum.photos/id/1027/300/300",
              "https://picsum.photos/id/1028/300/300",
              "https://picsum.photos/id/1029/300/300",
              "https://picsum.photos/id/1030/300/300",
              // ...
            ]}
            variant={2}
          />
        </div>

        <div
          className="w-full"
          style={{ height: "600px", position: "relative" }}
        >
          <CircularGallery bend={5} textColor="#ffffff" borderRadius={0.02} />
        </div>
      </div>
      <div className="w-full h-screen bg-zinc-950"></div>
    </>
  );
}

export default App;
