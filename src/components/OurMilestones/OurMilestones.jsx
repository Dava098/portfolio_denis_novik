import CountUp from "react-countup";
import s from "./OurMilestones.module.css";

const OurMilestones = () => {
  const ourMilestonesData = [
    {
      id: 1,
      subject: 8300,
      symbol: "+",
      text: "Figma ipsum component variant main layer. Hand.",
    },
    {
      id: 2,
      subject: 100,
      symbol: "%",
      text: "Figma ipsum component variant main layer. Union.",
    },
    {
      id: 3,
      subject: 3.5,
      symbol: "K",
      text: "Figma ipsum component variant main layer.",
    },
    {
      id: 4,
      subject: 240,
      symbol: "+",
      text: "Figma ipsum component variant main layer.",
    },
  ];

  return (
    <section className={s.OurMilestones}>
      <div className={s.container}>
        <h3 className={s.subtitle}>Our Milestones</h3>
        <h2 className={s.title}>
          What sets our studio apart for your projects?
        </h2>

        <div className={s.cards}>
          {ourMilestonesData.map((ourMilestone) => (
            <div className={s.card} key={ourMilestone.id}>
              <h2 className={s.subject}>
                <CountUp
                  end={ourMilestone.subject}
                  duration={3}
                  enableScrollSpy={true}
                  scrollSpyDelay={100}
                />
                {ourMilestone.symbol}
              </h2>
              <p className={s.text}>{ourMilestone.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMilestones;
