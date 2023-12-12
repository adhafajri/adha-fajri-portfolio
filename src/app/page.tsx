import { ExperienceCard, HeaderCard, SkillCard } from "@/components/card";
import { NavLinkImage } from "@/components/nav";
import { HeaderText } from "@/components/text";
import { db } from "@/config";
import { getAwardList, getEducationList, getSkillList, getVolunteerList, getWorkExperienceList, getProfile } from "@/service/firebase";
import { formatDate, formatExperienceDate } from "@/utils";
import Image from "next/image";

export default async function AboutMe() {
  const [
    workExperiences,
    educations,
    skills,
    volunteers,
    awards,
    profile,
  ] = await Promise.all([
    getWorkExperienceList(db),
    getEducationList(db),
    getSkillList(db),
    getVolunteerList(db),
    getAwardList(db),
    getProfile(db),
  ]);

  return (
    <main className='flex flex-col items-center gap-8 sm:gap-16 mt-8 w-full'>

      <div className='flex flex-col sm:flex-row items-center justify-between pr-8 w-full'>

        <div className="order-2 sm:order-1 flex flex-col items-start gap-8 p-8 w-full sm:w-2/3">
          <p className="text-2xl sm:text-4xl text-white font-extralight">
            Hi, I&apos;m Muhammad Adha <span className="font-bold">Fajri</span> Jonison <span role="img" aria-label="wave" className="inline-block transform transition-transform duration-300 hover:rotate-45">👋</span>
            <br />
            I&apos;m an aspiring <span className="font-bold">iOS Developer!</span>
          </p>

          <p className="text-base text-white font-extralight">
            {profile?.description || ''}
          </p>

          <div className='flex flex-col md:flex-row gap-8'>
            <NavLinkImage
              href={profile?.resume || ''}
              imgSrc='/icons/document-text.svg'
              label='Check Out My Resume'
              height={32}
              width={32}
              isShowLabel={true}
              isExternalLink={true}
            />

            <NavLinkImage
              href={'/projects'}
              imgSrc='/icons/chevron-right.svg'
              label='See Projects' height={16}
              width={16}
              isShowLabel={true}
            />
          </div>
        </div>

        <div className="order-1 sm:order-2 flex flex-col -space-y-4">
          <div className="relative w-55" style={{ paddingTop: "100%" }}>
            <div className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-white overflow-hidden">
              <Image
                src={profile?.picture || ''}
                alt="Self Picture"
                layout="fill"
                objectFit="cover"
                objectPosition="center top" // Adjusts the crop to focus more towards the top
                className="rounded-full"
              />
            </div>
          </div>
          <div className="inline-flex justify-center items-center p-4 rounded-2xl bg-white">
            <p className="text-xl sm:text-2xl text-black font-medium">
              2+ years experience
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 px-4 sm:px-8 items-start w-full">
        <div className="grid gap-4 sm:gap-8">
          <div className="flex flex-col items-start gap-8 h-auto">
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

          <div className="flex flex-col items-start gap-8">
            <HeaderText text="Skills" />
            <div className="flex items-start content-start gap-4 self-stretch flex-wrap">
              {skills.length > 0 && skills.map((skill, index) => (
                <SkillCard key={index} text={skill?.skill || ''} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-8">
          <div className="flex flex-col items-start gap-8 h-auto">
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

          <div className="flex flex-col items-start gap-8 h-auto">
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

          <div className="flex flex-col items-start gap-8 h-auto">
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
        </div>
      </div>
    </main>
  )
}