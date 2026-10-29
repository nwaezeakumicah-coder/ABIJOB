
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  BriefcaseBusiness,
  Building2,
  Clock3,
  MapPin,
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova Solutions",
    location: "Aba, Abia State",
    type: "Full-time",
    category: "Technology",
    salary: "₦180k – ₦300k / month",
    posted: "2 hours ago",
    description:
      "Build responsive web experiences and collaborate with a growing product team.",
    featured: true,
  },
  {
    id: 2,
    title: "Graphic Designer",
    company: "Creative House NG",
    location: "Umuahia, Abia State",
    type: "Full-time",
    category: "Design",
    salary: "₦100k – ₦180k / month",
    posted: "5 hours ago",
    description:
      "Create brand identities, marketing materials and digital content for clients.",
    featured: false,
  },
  {
    id: 3,
    title: "Sales Representative",
    company: "Abia Retail Hub",
    location: "Aba, Abia State",
    type: "Part-time",
    category: "Sales",
    salary: "₦70k – ₦120k / month",
    posted: "Yesterday",
    description:
      "Support customers, promote products and help the team meet sales targets.",
    featured: false,
  },
  {
    id: 4,
    title: "Customer Service Officer",
    company: "BrightPath Services",
    location: "Osisioma, Abia State",
    type: "Full-time",
    category: "Customer Service",
    salary: "₦90k – ₦150k / month",
    posted: "Yesterday",
    description:
      "Assist customers, answer enquiries and maintain excellent service standards.",
    featured: true,
  },
  {
    id: 5,
    title: "Social Media Manager",
    company: "Elevate Brands",
    location: "Remote",
    type: "Remote",
    category: "Marketing",
    salary: "₦120k – ₦220k / month",
    posted: "2 days ago",
    description:
      "Plan content, manage social platforms and grow online brand communities.",
    featured: false,
  },
  {
    id: 6,
    title: "Administrative Assistant",
    company: "Unity Business Centre",
    location: "Umuahia, Abia State",
    type: "Internship",
    category: "Administration",
    salary: "₦60k – ₦90k / month",
    posted: "3 days ago",
    description:
      "Support daily office operations, organise records and coordinate appointments.",
    featured: false,
  },
];

const employmentTypes = [
  "All types",
  "Full-time",
  "Part-time",
  "Remote",
  "Internship",
];

const categories = [
  "All categories",
  "Technology",
  "Design",
  "Sales",
  "Customer Service",
  "Marketing",
  "Administration",
];

export default function JobsPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All locations");
  const [type, setType] = useState("All types");
  const [category, setCategory] = useState("All categories");
  const [saved, setSaved] = useState<number[]>([]);
  const [savedOnly, setSavedOnly] = useState(false);

  const filteredJobs = useMemo(() => {
    const query = search.toLowerCase().trim();

    return jobs.filter((job) => {
      const matchesSearch =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.category.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query);

      const matchesLocation =
        location === "All locations" ||
        job.location.toLowerCase().includes(location.toLowerCase());

      const matchesType = type === "All types" || job.type === type;

      const matchesCategory =
        category === "All categories" || job.category === category;

      const matchesSaved = !savedOnly || saved.includes(job.id);

      return (
        matchesSearch &&
        matchesLocation &&
        matchesType &&
        matchesCategory &&
        matchesSaved
      );
    });
  }, [search, location, type, category, savedOnly, saved]);

  function toggleSaved(id: number) {
    setSaved((current) =>
      current.includes(id)
        ? current.filter((jobId) => jobId !== id)
        : [...current, id]
    );
  }

  return (
    <main className="jobs-page">
      <aside className="jobs-sidebar">
        <Link href="/dashboard" className="jobs-brand">
          <span className="jobs-brand-icon">A</span>
          <span>
            <strong>abi job</strong>
            <small>Opportunity starts here</small>
          </span>
        </Link>

        <div className="jobs-sidebar-label">WORKSPACE</div>

        <nav className="jobs-nav">
          <Link href="/dashboard" className="jobs-nav-link">
            <BriefcaseBusiness size={19} />
            Dashboard
          </Link>
          <Link href="/jobs" className="jobs-nav-link active">
            <Search size={19} />
            Find jobs
          </Link>
          <Link href="/profile" className="jobs-nav-link">
            <Building2 size={19} />
            My profile
          </Link>
        </nav>

        <div className="jobs-sidebar-bottom">
          <div className="jobs-sidebar-promo">
            <Sparkles size={22} />
            <h3>Your next opportunity starts here.</h3>
            <p>Keep your profile updated to improve your chances.</p>
            <Link href="/profile">
              Improve profile <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </aside>

      <section className="jobs-main">
        <header className="jobs-topbar">
          <div>
            <span className="jobs-eyebrow">CAREER OPPORTUNITIES</span>
            <h1>Find your next job.</h1>
            <p>Discover opportunities from businesses across Abia State.</p>
          </div>

          <Link href="/profile" className="jobs-profile-link">
            <span className="jobs-avatar">M</span>
            <span>
              <strong>My profile</strong>
              <small>Manage your details</small>
            </span>
            <ArrowRight size={17} />
          </Link>
        </header>

        <section className="jobs-search-box">
          <div className="jobs-search-input">
            <Search size={21} />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Job title, skill, company or keyword"
              aria-label="Search jobs"
            />
            {search && (
              <button
                className="jobs-clear-search"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <X size={17} />
              </button>
            )}
          </div>

          <div className="jobs-search-divider" />

          <div className="jobs-location-input">
            <MapPin size={20} />
            <select
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              aria-label="Filter by location"
            >
              <option>All locations</option>
              <option>Aba</option>
              <option>Umuahia</option>
              <option>Osisioma</option>
              <option>Remote</option>
            </select>
          </div>

          <button
            className="jobs-search-button"
            onClick={() => setSavedOnly(false)}
          >
            Search jobs <ArrowRight size={17} />
          </button>
        </section>

        <div className="jobs-content">
          <div className="jobs-results-heading">
            <div>
              <h2>Explore opportunities</h2>
              <p>
                {filteredJobs.length}{" "}
                {filteredJobs.length === 1 ? "opportunity" : "opportunities"}{" "}
                matching your search
              </p>
            </div>

            <button
              className={`jobs-saved-toggle ${savedOnly ? "selected" : ""}`}
              onClick={() => setSavedOnly((current) => !current)}
            >
              <Bookmark size={17} />
              Saved jobs ({saved.length})
            </button>
          </div>

          <div className="jobs-filter-row">
            <span className="jobs-filter-label">
              <SlidersHorizontal size={17} /> Filters
            </span>

            <select
              value={type}
              onChange={(event) => setType(event.target.value)}
              aria-label="Employment type"
            >
              {employmentTypes.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              aria-label="Job category"
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <button
              className="jobs-reset"
              onClick={() => {
                setSearch("");
                setLocation("All locations");
                setType("All types");
                setCategory("All categories");
                setSavedOnly(false);
              }}
            >
              Reset filters
            </button>
          </div>

          <div className="jobs-list">
            {filteredJobs.map((job) => (
              <article className="jobs-card" key={job.id}>
                <div className="jobs-card-top">
                  <div className="jobs-company-icon">
                    {job.company.charAt(0)}
                  </div>

                  <div className="jobs-card-heading">
                    <div className="jobs-title-row">
                      <h3>{job.title}</h3>
                      {job.featured && (
                        <span className="jobs-featured">Featured</span>
                      )}
                    </div>
                    <p>{job.company}</p>
                  </div>

                  <button
                    className={`jobs-bookmark ${
                      saved.includes(job.id) ? "is-saved" : ""
                    }`}
                    onClick={() => toggleSaved(job.id)}
                    aria-label={
                      saved.includes(job.id) ? "Unsave job" : "Save job"
                    }
                    title={
                      saved.includes(job.id) ? "Unsave job" : "Save job"
                    }
                  >
                    <Bookmark
                      size={20}
                      fill={saved.includes(job.id) ? "currentColor" : "none"}
                    />
                  </button>
                </div>

                <p className="jobs-description">{job.description}</p>

                <div className="jobs-metadata">
                  <span>
                    <MapPin size={15} /> {job.location}
                  </span>
                  <span>
                    <BriefcaseBusiness size={15} /> {job.type}
                  </span>
                  <span>
                    <Clock3 size={15} /> {job.posted}
                  </span>
                </div>

                <div className="jobs-card-bottom">
                  <div>
                    <span className="jobs-salary-label">ESTIMATED SALARY</span>
                    <strong>{job.salary}</strong>
                  </div>
                  <button
                    className="jobs-view-button"
                    onClick={() =>
                      alert(
                        "Job details and applications will be connected when we build the job details page and backend."
                      )
                    }
                  >
                    View details <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}

            {filteredJobs.length === 0 && (
              <div className="jobs-empty">
                <Search size={32} />
                <h3>No matching jobs found</h3>
                <p>
                  Try another keyword or reset your filters to see more
                  opportunities.
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setLocation("All locations");
                    setType("All types");
                    setCategory("All categories");
                    setSavedOnly(false);
                  }}
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>

          <p className="jobs-demo-note">
            Demo listings for interface development. These are not verified
            live vacancies.
          </p>
        </div>
      </section>
    </main>
  );
}
