import ExperienceCard from '../components/ExperienceCard';
import Title from '../components/Title';
import westpacIcon from '../assets/westpac.svg';
import unswIcon from '../assets/unsw.svg';
import amexIcon from '../assets/amex.svg';

export default function Experience() {
  return (
    <section id="experience" className="flex flex-col gap-6">
      <Title
        title="Experience"
        highlightColour="bg-[#CBE7FF]"
        rotation="rotate-1"
        smWidth="w-[125px]"
        mdWidth="md:w-[155px]"
      />
      <div className=" before:hidden before:md:block space-y-10 relative before:absolute before:mt-7 before:ml-3 before:h-[calc(100%-28px)] before:w-[3px] before:bg-gradient-to-tl before:from-transparent before:bg-slate-300 before:to-transparent">
        <ExperienceCard
          date="Jul 2024 - Now"
          title="Westpac"
          role="UI Developer"
          description={[
            "Developing, testing and maintaining code for Westpac's mobile banking app",
            'Implementing features that improve the user experience',
          ]}
          icon={westpacIcon}
        />

        <ExperienceCard
          date="Jan 2020 - May 2024"
          title="UNSW"
          role="B. Computer Science & B. Actuarial Studies"
          description={[
            'Graduated with a Distinction in both Computer Science & Actuarial Studies.',
            'Recipient of the Dean’s Honor List 2021.',
          ]}
          icon={unswIcon}
        />

        <ExperienceCard
          date="Mar 2022 - Sep 2022"
          title="American Express"
          role="Global Merchant Services Risk Intern"
          description={[
            'Documented risk management strategies to onboard Fintech companies with AMEX.',
            'Prevented 8 cases of credit card fraud by analysing transaction databases using SQL.',
          ]}
          icon={amexIcon}
        />
      </div>
    </section>
  );
}
