
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Bookmark,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Share2,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";

const jobs = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechNova Solutions",
    location: "Aba, Abia State",
    type: "Full-time",
    salary: "₦180,000 – ₦300,000/month",
    category: "Technology",
    posted: "2 days ago",
    level: "Entry to Mid-level",
    applicants: "24 applicants",
    description:
      "We are looking for a creative frontend developer to help build fast, accessible, and user-friendly digital products.",
    responsibilities: [
      "Build responsive web interfaces for desktop and mobile.",
      "Work with designers to turn designs into working products.",
      "Write clean, maintainable, and reusable code.",
      "Test interfaces and fix bugs before release.",
    ],
    requirements: [
      "Knowledge of HTML, CSS, and JavaScript.",
      "Experience with React or Next.js is an advantage.",
      "Good communication and problem-solving skills.",
      "A portfolio or examples of previous work.",
    ],
  },
  {
    id: "2",
    title: "Customer Service Representative",
    company: "Abia Connect Ltd.",
    location: "Umuahia, Abia State",
    type: "Full-time",
    salary: "₦100,000 – ₦150,000/month",
    category: "Customer Service",
    posted: "1 day ago",
    level: "Entry-level",
    applicants: "18 applicants",
    description:
      "Support customers, answer enquiries, and help maintain a positive experience across our services.",
    responsibilities: [
      "Respond to customer questions and complaints.",
      "Keep accurate records of customer interactions.",
      "Escalate complex issues to the appropriate team.",
      "Help improve customer satisfaction.",
    ],
    requirements: [
      "Good written and verbal communication.",
      "Basic computer skills.",
      "Patience, organisation, and attention to detail.",
      "Previous customer service experience is an advantage.",
    ],
  },
  {
    id: "3",
    title: "Graphic Designer",
    company: "Sapphire Creative Studio",
    location: "Aba, Abia State",
    type: "Full-time",
    salary: "₦120,000 – ₦220,000/month",
    category: "Design & Creative",
    posted: "3 days ago",
    level: "Junior to Mid-level",
    applicants: "31 applicants",
    description:
      "Create compelling visual designs for brands, campaigns, social media, and print materials.",
    responsibilities: [
      "Design marketing and social media materials.",
      "Create brand identities and print-ready artwork.",
      "Collaborate with the marketing team and clients.",
      "Maintain consistent visual quality across projects.",
    ],
    requirements: [
      "Proficiency in CorelDRAW, Photoshop, or similar tools.",
      "A strong portfolio of design work.",
      "Understanding of typography, layout, and colour.",
      "Ability to meet deadlines and accept feedback.",
    ],
  },
];

export default function JobDetailsPage() {
  const params = useParams();
  const id = String(params.id ?? "");
  const job = jobs.find((item) => item.id === id) ?? jobs[0];

  const [saved, setSaved] = useState(false);
  const [applied, setApplied] = useState(false);

  return (
    <main className="job-detail-page">
      <header className="job-detail-header">
        <Link href="/jobs" className="job-detail-back">
          <ArrowLeft size={19} />
          <span>Back to jobs</span>
        </Link>

        <Link href="/dashboard" className="job-detail-brand">
          <span className="job-detail-brand-mark">A</span>
          <span>abi<span>job</span></span>
        </Link>

        <Link href="/profile" className="job-detail-profile">
          My profile <ArrowUpRight size={16} />
        </Link>
      </header>

      <div className="job-detail-layout">
        <section className="job-detail-main">
          <div className="job-detail-breadcrumb">
            Jobs <span>/</span> {job.category} <span>/</span> Details
          </div>

          <section className="job-detail-hero">
            <div className="job-detail-company-mark">
              <Building2 size={30} />
            </div>

            <div className="job-detail-heading">
              <div className="job-detail-tags">
                <span className="job-detail-tag">{job.type}</span>
                <span className="job-detail-tag job-detail-tag-green">
                  <CheckCircle2 size={14} /> Open position
                </span>
              </div>

              <h1>{job.title}</h1>
              <p className="job-detail-company">{job.company}</p>

              <div className="job-detail-meta">
                <span><MapPin size={16} /> {job.location}</span>
                <span><Clock3 size={16} /> Posted {job.posted}</span>
                <span><Users size={16} /> {job.applicants}</span>
              </div>
            </div>

            <button
              className={`job-detail-save ${saved ? "is-saved" : ""}`}
              onClick={() => setSaved(!saved)}
              aria-label={saved ? "Remove saved job" : "Save job"}
            >
              <Bookmark size={19} fill={saved ? "currentColor" : "none"} />
              <span>{saved ? "Saved" : "Save job"}</span>
            </button>
          </section>

          <section className="job-detail-section">
            <h2>About this role</h2>
            <p>{job.description}</p>
          </section>

          <section className="job-detail-section">
            <h2>What you’ll do</h2>
            <ul>
              {job.responsibilities.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="job-detail-section">
            <h2>What we’re looking for</h2>
            <ul>
              {job.requirements.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="job-detail-trust">
            <ShieldCheck size={24} />
            <div>
              <h3>Apply with confidence</h3>
              <p>
                Review the employer and verify any offer before sharing
                sensitive information or making payments.
              </p>
            </div>
          </section>
        </section>

        <aside className="job-detail-sidebar">
          <div className="job-detail-apply-card">
            <p className="job-detail-card-label">SALARY RANGE</p>
            <h2>{job.salary}</h2>
            <p className="job-detail-muted">
              Compensation details provided in this sample listing.
            </p>

            <div className="job-detail-divider" />

            <div className="job-detail-fact">
              <Wallet size={19} />
              <div>
                <span>Employment type</span>
                <strong>{job.type}</strong>
              </div>
            </div>

            <div className="job-detail-fact">
              <BriefcaseBusiness size={19} />
              <div>
                <span>Experience level</span>
                <strong>{job.level}</strong>
              </div>
            </div>

            <div className="job-detail-fact">
              <CalendarDays size={19} />
              <div>
                <span>Date posted</span>
                <strong>{job.posted}</strong>
              </div>
            </div>

            <button
              className="job-detail-apply-button"
              onClick={() => setApplied(true)}
              disabled={applied}
            >
              {applied ? "Application noted" : "Apply for this job"}
              {!applied && <ArrowUpRight size={18} />}
            </button>

            {applied && (
              <p className="job-detail-apply-note">
                This is a frontend demo. Your application has not been sent
                to an employer yet.
              </p>
            )}

            <button
              className="job-detail-share-button"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: job.title,
                    text: `Explore ${job.title} on Abi Job`,
                    url: window.location.href,
                  }).catch(() => {});
                } else {
                  navigator.clipboard?.writeText(window.location.href);
                  alert("Job link copied if clipboard access is available.");
                }
              }}
            >
              <Share2 size={17} /> Share this opportunity
            </button>
          </div>

          <div className="job-detail-tip">
            <span>QUICK TIP</span>
            <h3>Make your profile stand out.</h3>
            <p>
              Add your skills, experience, and certificates before applying
              for opportunities.
            </p>
            <Link href="/profile">
              Complete profile <ArrowUpRight size={16} />
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
