import { ExperienceCard, HeaderCard, SkillCard } from "@/components/card";
import { DateText, ListText, SubtitleText, TitleText } from "@/components/text";
import HeaderText from "@/components/text/header-text";
import Image from "next/image";

export default function AboutMe() {
  return (
    <main className='flex flex-col items-center gap-16 mt-32 w-full'>
      <div className='flex items-center justify-between pr-8 w-full'>
        <div className="flex items-center p-8 pl-8 rounded-r-2xl bg-orange">
          <p className="text-4xl text-white font-extralight">
            Hi, I'm Muhammad Adha <span className="font-bold">Fajri</span> Jonison <span role="img" aria-label="wave">👋</span>
            <br />
            I'm an aspiring <span className="font-bold">iOS Developer!</span>
          </p>
        </div>

        <div className="flex flex-col -space-y-8">
          <Image src={"/picture.png"} alt={"Self Picture"} width={326} height={327} objectFit="contain" priority />
          <div className="inline-flex justify-center items-center p-4 rounded-2xl bg-white">
            <p className="text-2xl text-black font-medium">
              2+ years experience
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-start px-8 w-full">
        <div className="flex flex-col items-start gap-16 flex-[1_0_0%]">
          <div className="flex flex-col items-start gap-4 self-stretch">
            <HeaderCard text="Experience" />
            <ExperienceCard
              title="Mobile Developer"
              subtitle="MHC Asia Group"
              date="17-03-1999"
              experienceList={['test1', 'test2', 'test3']} />
          </div>
          <div className="flex flex-col items-start gap-4 self-stretch">
            <HeaderCard text="Education" />
            <ExperienceCard
              title="Mobile Developer"
              subtitle="MHC Asia Group"
              date="17-03-1999"
              experienceList={['test1', 'test2', 'test3']} />
          </div>
        </div>

        <div className="flex flex-col items-end gap-4 flex-[1_0_0%]">
          <HeaderCard text="Skills" />
          <div className="flex justify-end items-start content-start gap-4 self-stretch flex-wrap">
            <SkillCard text="Firebase" />
            <SkillCard text="Firebase" />
            <SkillCard text="Firebase" />
            <SkillCard text="Firebase" />
            <SkillCard text="Firebase" />
            <SkillCard text="Firebase" />
            <SkillCard text="Firebase" />
          </div>
        </div>
      </div>
    </main>
  )
}