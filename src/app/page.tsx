
import { ExperienceCard, HeaderCard, SkillCard } from "@/components/card";
import { HeaderText } from "@/components/text";
import { db } from "@/config";
import { getAwardList, getEducationList, getSkillList, getVolunteerList, getWorkExperienceList } from "@/service/firebase";
import { formatDate, formatExperienceDate } from "@/utils";
import Image from "next/image";

export default async function AboutMe() {
  const workExperiences = await getWorkExperienceList(db);
  console.log('[experiences]', workExperiences);

  const educations = await getEducationList(db);
  console.log('[educations]', educations);

  const skills = await getSkillList(db);
  console.log('[skills]', skills);

  const volunteers = await getVolunteerList(db);
  console.log('[volunteers]', volunteers);

  const awards = await getAwardList(db);
  console.log('[awards]', awards);

  return (
    <main className='flex flex-col items-center gap-16 mt-32 w-full'>
      <div className='flex items-center justify-between pr-8 mb-24 w-full'>
        <div className="flex items-center p-8">
          <p className="text-4xl text-white font-extralight">
            Hi, I&apos;m Muhammad Adha <span className="font-bold">Fajri</span> Jonison <span role="img" aria-label="wave">👋</span>
            <br />
            I&apos;m an aspiring <span className="font-bold">iOS Developer!</span>
          </p>
        </div>

        <div className="flex flex-col -space-y-8">
          <Image src={"/picture.png"} alt={"Self Picture"} width={327} height={327} />
          <div className="inline-flex justify-center items-center p-4 rounded-2xl bg-white">
            <p className="text-2xl text-black font-medium">
              2+ years experience
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-start px-8 gap-8 w-full">
        <div className="flex flex-col items-start gap-8 flex-[1_0_0%]">
          <div className="flex flex-col items-start gap-4 self-stretch">
            <HeaderText text="Work Experience" />
            {workExperiences.length > 0 && workExperiences.map((experience) => {
              const date = formatExperienceDate(experience?.startDate, experience?.endDate);
              return (
                <ExperienceCard
                  key={experience?.id}
                  title={experience?.position || ''}
                  subtitle={experience?.company || ''}
                  date={date}
                  experienceList={experience?.description || []}
                />
              )
            })}
          </div>
          <div className="flex flex-col items-start gap-4 self-stretch">
            <HeaderText text="Education" />
            {educations.length > 0 && educations.map((education) => {
              const date = formatExperienceDate(education?.startDate, education?.endDate);
              return (
                <ExperienceCard
                  key={education?.id}
                  title={education?.school || ''}
                  subtitle={`${education?.degree || ''}, ${education?.fieldOfStudy}`}
                  date={date}
                  experienceList={education?.description || []}
                />
              )
            })}
          </div>
        </div>

        <div className="flex flex-col items-end gap-8 flex-[1_0_0%]">
          <div className="flex flex-col items-end gap-4 self-stretch">
            <HeaderText text="Volunteer" />
            {volunteers.length > 0 && volunteers.map((volunteer) => {
              const date = formatExperienceDate(volunteer?.startDate, volunteer?.endDate);
              return (
                <ExperienceCard
                  key={volunteer?.id}
                  title={volunteer?.position || ''}
                  subtitle={volunteer?.organisation || ''}
                  date={date}
                  experienceList={volunteer?.description || []}
                />
              )
            })}
          </div>

          <div className="flex flex-col items-end gap-4 self-stretch">
            <HeaderText text="Honors & Awards" />
            {awards.length > 0 && awards.map((award) => {
              const date = formatDate(award?.date.toDate());
              return (
                <ExperienceCard
                  key={award?.id}
                  title={award?.title || ''}
                  subtitle={award?.issuer || ''}
                  date={date}
                  experienceList={award?.description || []}
                />
              )
            })}
          </div>

          <div className="flex flex-col items-end gap-4 self-stretch">
            <HeaderText text="Skills" />
            <div className="flex justify-end items-start content-start gap-4 self-stretch flex-wrap">
              {skills.length > 0 && skills.map((skill) => (
                <SkillCard text={skill?.skill || ''} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}