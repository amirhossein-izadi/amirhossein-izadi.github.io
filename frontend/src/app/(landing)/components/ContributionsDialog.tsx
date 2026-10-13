"use client";

import { Download, ExternalLink } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface MaterialAction {
  label: string;
  href: string;
  kind: "download" | "link";
}

interface Material {
  title: string;
  tag: "theory" | "practical" | "slide";
  term?: string;
  actions: MaterialAction[];
}

interface Course {
  id: string;
  name: string;
  code?: string;
  terms: string;
  instructor: string;
  instructorUrl: string;
  summary?: string;
  links?: { label: string; href: string }[];
  materials?: Material[];
}

const ML_REPO =
  "https://github.com/SharifiZarchi/Introduction_to_Machine_Learning";

const COURSES: Course[] = [
  {
    id: "machine-learning",
    name: "Machine Learning",
    code: "CE40477",
    terms: "Fall 2024",
    instructor: "Dr. Ali Sharifi Zarchi",
    instructorUrl: "https://scholar.google.com/citations?user=GbJMZLIAAAAJ&hl=en",
    summary:
      "Co-designed HW4 with full solutions, the practical notebooks, and two slide decks. Also contributed to the midterm exam and the final contest.",
    links: [
      { label: "Repository", href: ML_REPO },
      { label: "Website", href: "https://www.sharifml.ir/" },
    ],
    materials: [
      {
        title: "HW4 - Computer Vision",
        tag: "theory",
        actions: [
          {
            label: "English",
            href: "/files/ta-sut/hw4-theoretical-en.pdf",
            kind: "download",
          },
          {
            label: "Persian",
            href: "/files/ta-sut/hw4-theoretical-fa.pdf",
            kind: "download",
          },
        ],
      },
      {
        title: "MobileNet V1 & V2 Tutorial",
        tag: "practical",
        actions: [
          {
            label: "Download",
            href: "/files/ta-sut/p1-solution.ipynb",
            kind: "download",
          },
        ],
      },
      {
        title: "Image Colorization & Segmentation (VAE)",
        tag: "practical",
        actions: [
          {
            label: "Download",
            href: "/files/ta-sut/p2-solution.ipynb",
            kind: "download",
          },
        ],
      },
      {
        title: "Autoencoders",
        tag: "slide",
        actions: [
          {
            label: "Open",
            href: `${ML_REPO}/blob/main/Slides/Chapter_04_Computer_Vision/04-Autoencoder/04-Autoencoder.pdf`,
            kind: "link",
          },
        ],
      },
      {
        title: "Semantic Segmentation",
        tag: "slide",
        actions: [
          {
            label: "Open",
            href: `${ML_REPO}/blob/main/Slides/Chapter_04_Computer_Vision/05-Semantic%20Segmentation/Slide.pdf`,
            kind: "link",
          },
        ],
      },
    ],
  },
  {
    id: "deep-learning",
    name: "Deep Learning (Graduate)",
    code: "CE40719",
    terms: "Spring 2025, Spring 2026, Fall 2026",
    instructor: "Dr. Soleymani Baghshah",
    instructorUrl: "https://scholar.google.com/citations?user=S1U0KlgAAAAJ&hl=en",
    summary:
      "Contributed to theoretical and practical homework across two semesters, from efficient CNNs to generative models.",
    links: [
      { label: "Lectures", href: "https://ocw.sharif.ir/course/532" },
      {
        label: "Slides",
        href: "https://github.com/amirezzati/deep-learning/tree/main/slides",
      },
    ],
    materials: [
      {
        title: "HW2 - Computer Vision",
        tag: "theory",
        term: "Spring 2025",
        actions: [
          {
            label: "Full version",
            href: "/files/ta-sut/dl-hw2-2025-full-fa.pdf",
            kind: "download",
          },
        ],
      },
      {
        title: "License Plate Detection & Recognition (YOLO)",
        tag: "practical",
        term: "Spring 2025",
        actions: [
          {
            label: "Download",
            href: "/files/ta-sut/dl-hw2-2025-yolo-solution.ipynb",
            kind: "download",
          },
        ],
      },
      {
        title: "HW2 - Computer Vision",
        tag: "theory",
        term: "Spring 2026",
        actions: [
          {
            label: "Solution",
            href: "/files/ta-sut/dl-hw2-2026-solutions-fa.pdf",
            kind: "download",
          },
        ],
      },
      {
        title: "HW4 - Generative Models",
        tag: "theory",
        term: "Spring 2026",
        actions: [
          {
            label: "Solution",
            href: "/files/ta-sut/dl-hw4-2026-solutions-fa.pdf",
            kind: "download",
          },
        ],
      },
      {
        title: "Variational Autoencoder (VAE)",
        tag: "practical",
        term: "Spring 2026",
        actions: [
          {
            label: "Download",
            href: "/files/ta-sut/dl-hw4-2026-vae-solution.ipynb",
            kind: "download",
          },
        ],
      },
    ],
  },
  {
    id: "modern-ir",
    name: "Modern Information Retrieval",
    code: "CE-324",
    terms: "Spring 2026",
    instructor: "Dr. Soleymani Baghshah",
    instructorUrl: "https://scholar.google.com/citations?user=S1U0KlgAAAAJ&hl=en",
    summary:
      "Designed and delivered a full session on Multimodal Information Retrieval (MM-IR). Most slides adapted from Prof. Paul Liang (MIT Media Lab) - How to AI (Almost) Anything.",
    materials: [
      {
        title: "Multimodal Information Retrieval (MM-IR)",
        tag: "slide",
        actions: [
          {
            label: "Open",
            href: "https://docs.google.com/presentation/d/1JsGwAtz5BiSecrylL52WMzI6WPkhW2Zgmd_81vDiPJo/edit?usp=sharing",
            kind: "link",
          },
        ],
      },
    ],
  },
];

const TAG_DOT: Record<Material["tag"], string> = {
  theory: "bg-sky-500",
  practical: "bg-emerald-500",
  slide: "bg-violet-500",
};

function MaterialRow({ material }: { material: Material }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 border-b border-border py-1.5 last:border-b-0">
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="inline-flex w-[74px] shrink-0 items-center justify-center gap-1.5 rounded-full border border-border px-2 py-0.5 text-[10px] font-medium capitalize text-muted-foreground">
          <span
            className={cn("h-1.5 w-1.5 rounded-full", TAG_DOT[material.tag])}
            aria-hidden
          />
          {material.tag}
        </span>
        <p className="min-w-0 text-[13px] font-medium leading-snug">
          {material.title}
          {material.term ? (
            <span className="ml-1.5 font-normal text-muted-foreground">
              ({material.term})
            </span>
          ) : null}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-1.5">
        {material.actions.map((action) => (
          <a
            key={action.label}
            href={action.href}
            {...(action.kind === "download"
              ? { download: "" }
              : { target: "_blank", rel: "noopener noreferrer" })}
            className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {action.label}
            {action.kind === "download" ? (
              <Download className="h-3 w-3" aria-hidden />
            ) : (
              <ExternalLink className="h-3 w-3" aria-hidden />
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

function CoursePanel({ course }: { course: Course }) {
  return (
    <div className="min-w-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 pr-8">
        <h3 className="text-sm font-medium leading-snug">
          {course.code ? `${course.code} - ` : ""}
          {course.name}
        </h3>
        <span className="text-xs text-muted-foreground">{course.terms}</span>
      </div>
      <p className="mt-0.5 text-xs text-muted-foreground">
        Instructor:{" "}
        <a
          href={course.instructorUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          {course.instructor}
        </a>
        {course.links?.map((link) => (
          <span key={link.href}>
            {" · "}
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              {link.label}
            </a>
          </span>
        ))}
      </p>

      {course.summary ? (
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          {course.summary}
        </p>
      ) : null}

      {course.materials?.length ? (
        <div className="mt-3 border-t border-border">
          {course.materials.map((material) => (
            <MaterialRow key={material.title} material={material} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

interface ContributionsDialogProps {
  courseId: string;
  children: React.ReactNode;
}

export function ContributionsDialog({
  courseId,
  children,
}: ContributionsDialogProps) {
  const course = COURSES.find((item) => item.id === courseId);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="rounded-sm text-left underline decoration-dotted decoration-muted-foreground/50 underline-offset-2 transition-colors hover:text-foreground hover:decoration-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {children}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[620px] p-5">
        <DialogHeader className="sr-only">
          <DialogTitle>{course?.name ?? "Course contributions"}</DialogTitle>
          <DialogDescription>
            Teaching Assistant - Sharif University of Technology
          </DialogDescription>
        </DialogHeader>
        {course ? <CoursePanel course={course} /> : null}
      </DialogContent>
    </Dialog>
  );
}
