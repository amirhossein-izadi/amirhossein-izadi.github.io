import { Section } from "@/components/shared";

const EMPHASIS = "font-semibold text-foreground";

export function About() {
  return (
    <Section id="about" className="pt-8 sm:pt-10 pb-8 sm:pb-10">
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
        <p>
          I am a Computer Engineering graduate from Shahid Beheshti University,
          working at the intersection of{" "}
          <strong className={EMPHASIS}>machine learning research</strong> and
          production AI systems. My research centers on{" "}
          <strong className={EMPHASIS}>
            computer vision and medical imaging
          </strong>{" "}
          - most recently domain-adaptive MRI reconstruction with Vision Mamba
          for my bachelor’s thesis - and on{" "}
          <strong className={EMPHASIS}>reinforcement learning</strong>, from
          RoboCup simulation to applied decision-making systems.
        </p>
        <p>
          I am currently a Research Assistant at the RIML Lab at Sharif
          University of Technology, developing architectural improvements for{" "}
          <strong className={EMPHASIS}>large vision-language models</strong> to
          close reasoning gaps. Alongside research, I have served as a teaching
          assistant for machine learning, deep learning, and computer vision
          courses at SUT and SBU, and mentored several ML and MLOps bootcamps.
        </p>
        <p>
          My broader interests span{" "}
          <strong className={EMPHASIS}>
            deep learning, generative AI, and agentic systems
          </strong>
          . My long-term goal is to build principled, reliable methods and
          translate them into real-world systems people can depend on.
        </p>
      </div>
    </Section>
  );
}
