import { Section } from "@/components/shared";

const EMPHASIS = "font-semibold text-foreground";
const LINK = "text-brand hover:underline";

export function About() {
  return (
    <Section id="about" className="pt-8 sm:pt-10 pb-8 sm:pb-10">
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
        <p>
          I am a recent{" "}
          <a
            href="https://encse.sbu.ac.ir/"
            target="_blank"
            rel="noopener noreferrer"
            className={LINK}
          >
            Computer Engineering
          </a>{" "}
          graduate from{" "}
          <a
            href="https://en.sbu.ac.ir/"
            target="_blank"
            rel="noopener noreferrer"
            className={LINK}
          >
            Shahid Beheshti University
          </a>
          , with broad interests across computer science. I work at the
          intersection of{" "}
          <strong className={EMPHASIS}>machine learning research</strong> and
          production AI systems, with a focus on{" "}
          <strong className={EMPHASIS}>
            computer vision and AI for healthcare
          </strong>{" "}
          - most recently domain-adaptive MRI reconstruction with Vision Mamba
          for my bachelor’s thesis - and{" "}
          <strong className={EMPHASIS}>reinforcement learning</strong>, from
          RoboCup simulation to applied decision-making systems.
        </p>
        <p>
          I am currently a Research Assistant at the{" "}
          <a
            href="https://sharif.edu/~rohban/"
            target="_blank"
            rel="noopener noreferrer"
            className={LINK}
          >
            RIML Lab
          </a>{" "}
          at{" "}
          <a
            href="https://ce.sharif.ir/"
            target="_blank"
            rel="noopener noreferrer"
            className={LINK}
          >
            Sharif University of Technology
          </a>
          , investigating training and evaluation methods for evidence-sensitive
          reasoning in{" "}
          <strong className={EMPHASIS}>vision-language models</strong>.
          Alongside research, I have served as a teaching assistant for machine
          learning, deep learning, and computer vision courses at SUT and SBU,
          and mentored several ML and MLOps bootcamps.
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
