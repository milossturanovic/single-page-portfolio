import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";

import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import { CardHeader } from "@/components/cardHeader";
import mapImage from "@/assets/images/map.png";
import smileEmoji from "@/assets/images/memoji-smile.png";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "Javascript",
    icon: JavascriptIcon,
  },
  {
    title: "Html",
    icon: HtmlIcon,
  },
  {
    title: "Css3",
    icon: CssIcon,
  },
  {
    title: "React",
    icon: ReactIcon,
  },
  {
    title: "Chrome",
    icon: ChromeIcon,
  },
  {
    title: "Github",
    icon: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "5%",
  },
  {
    title: "Traveling",
    emoji: "🌍",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gym",
    emoji: "🏋️‍♂️",
    left: "10%",
    top: "35%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "40%",
  },
  {
    title: "Grilling",
    emoji: "🍖",
    left: "70%",
    top: "45%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Little About Me"
          description="Learn more about who I am"
        />
        
        <div className="mt-20 flex flex-col gap-8">
          
          
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
            <Card className="h-[320px]  p-0  md:col-span-2 lg:col-span-1  ">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives"
              />

              <div className="w-40 mx-auto mt-8 ">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>

            <Card className="h-[320px]  p-0  md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My toolbox"
                description="Explore the technologies and tools I use to craft execption figital experiences"
              />

              <ToolboxItems items={toolboxItems} className="mt-6" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
           
           
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the code"
                description="Explore my interest and hobbies beyond the digital realm"
                className="px-6 pt-6"
              />

              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-500 to-sky-400 rounded-full py-1.5 absolute "
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 col-span-1 md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-500 to-sky-400 transition-all duration-300 hover:scale-110
            after:content-[''] after:absolute after:inset-0 after:rounded-full after:border-2 after:border-white after:opacity-1 after:transition-opacity after:duration-300 hover:after:opacity-100"
              >
                <Image src={smileEmoji} alt="Smile emoji" className="size-20" />
              </div>
            </Card>
        
        
          </div>
        </div>
      </div>
    </div>
  );
};
