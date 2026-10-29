
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowDownUp,
  ArrowRight,
  Bell,
  Bookmark,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Compass,
  FileText,
  MapPin,
  Menu,
  Search,
  Settings,
  Sparkles,
  UserRound,
  Users,
  Wallet,
  X,
} from "lucide-react";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  category: string;
  salary: string;
  posted: string;
  initials: string;
  color: string;
  featured?: boolean;
};

const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "BrightWave Technologies",
    location: "Aba, Abia State",
    type: "Full-time",
    category: "Technology",
    salary: "₦180k – ₦300k / month",
    posted: "2 hours ago",
    initials: "BW",
    color: "green",
    featured: true,
  },
  {
    id: 2,
    title: "Customer Service Representative",
    company: "Prestige Stores",
    location: "Umuahia, Abia State",
    type: "Full-time",
    category: "Customer Service",
    salary: "₦80k – ₦120k / month",
    posted: "5 hours ago",
    initials: "PS",
    color: "orange",
  },
  {
    id: 3,
    title: "Graphic Designer",
    company: "PixelCraft Studio",
    location: "Aba, Abia State",
    type: "Hybrid",
    category: "Design",
    salary: "₦100k – ₦200k / month",
    posted: "Yesterday",
    initials: "PC",
    color: "purple",
  },
  {
    id: 4,
    title: "Accountant",
    company: "Eastern Trade Group",
    location: "Osisioma, Abia State",
    type: "Full-time",
    category: "Finance",
    salary: "₦150k – ₦220k / month",
    posted: "Yesterday",
    initials: "ET",
    color: "blue",
  },
  {
    id: 5,
    title: "Social Media Manager",
    company: "The Everyday Brand",
    location: "Remote · Abia State",
    type: "Remote",
    category: "Marketing",
    salary: "₦120k – ₦180k / month",
    posted: "2 days ago",
    initials: "EB",
    color: "pink",
  },
];

const categories = [
  "All opportunities",
  "Technology",
  "Design",
  "Finance",
  "Marketing",
  "Customer Service",
];

function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Abi Job home">
      <span className="brand-mark">a.</span>
      <span className="brand-copy">
        <span className="brand-name">
          abi<span>job</span>
        </span>
        <span className="brand-tagline">OPPORTUNITY STARTS HERE</span>
      </span>
    </Link>
  );
}

export default function DashboardPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All opportunities");
  const [savedJobs, setSavedJobs] = useState<number[]>([]);
  const [activeNav, setActiveNav] = useState("Discover jobs");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notice, setNotice] = useState("");

  const filteredJobs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesSearch =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query) ||
        job.category.toLowerCase().includes(query);

      const matchesCategory =
        category === "All opportunities" || job.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  function toggleSaved(id: number) {
    setSavedJobs((current) =>
      current.includes(id)
        ? current.filter((jobId) => jobId !== id)
        : [...current, id]
    );
  }

  function handleNavigation(label: string) {
    setActiveNav(label);
    setMobileMenuOpen(false);

    if (label === "Discover jobs") {
      setNotice("");
      return;
    }

    if (label === "Saved jobs") {
      setNotice(
        savedJobs.length
          ? `You have saved ${savedJobs.length} job${savedJobs.length === 1 ? "" : "s"}.`
          : "You have not saved any jobs yet. Use the bookmark icon on a job to save it."
      );
      return;
    }

    setNotice(`${label} will be available when this feature is connected.`);
  }

  const displayedJobs =
    activeNav === "Saved jobs"
      ? filteredJobs.filter((job) => savedJobs.includes(job.id))
      : filteredJobs;

  return (
    <main className="dashboard-page">
      <aside className={`dashboard-sidebar ${mobileMenuOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-top">
          <Brand />
          <button
            type="button"
            className="mobile-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={21} />
          </button>
        </div>

        <div className="sidebar-profile">
          <div className="profile-avatar">M</div>
          <div className="profile-copy">
            <strong>Welcome, Micah</strong>
            <span>Job seeker account</span>
          </div>
          <ChevronDown size={16} />
        </div>

        <div className="sidebar-label">WORKSPACE</div>
        <nav className="dashboard-nav" aria-label="Main navigation">
          <button
            type="button"
            className={activeNav === "Discover jobs" ? "nav-item active" : "nav-item"}
            onClick={() => handleNavigation("Discover jobs")}
          >
            <Compass size={19} />
            <span>Discover jobs</span>
          </button>
          <button
            type="button"
            className={activeNav === "Saved jobs" ? "nav-item active" : "nav-item"}
            onClick={() => handleNavigation("Saved jobs")}
          >
            <Bookmark size={19} />
            <span>Saved jobs</span>
            {savedJobs.length > 0 && (
              <span className="nav-count">{savedJobs.length}</span>
            )}
          </button>
          <button
            type="button"
            className={activeNav === "My applications" ? "nav-item active" : "nav-item"}
            onClick={() => handleNavigation("My applications")}
          >
            <FileText size={19} />
            <span>My applications</span>
          </button>
          <button
            type="button"
            className={activeNav === "My profile" ? "nav-item active" : "nav-item"}
            onClick={() => handleNavigation("My profile")}
          >
            <UserRound size={19} />
            <span>My profile</span>
          </button>

          <div className="sidebar-label sidebar-label-spaced">GROW YOUR CAREER</div>

          <button
            type="button"
            className={activeNav === "Career tools" ? "nav-item active" : "nav-item"}
            onClick={() => handleNavigation("Career tools")}
          >
            <Sparkles size={19} />
            <span>Career tools</span>
            <span className="new-label">NEW</span>
          </button>
          <button
            type="button"
            className={activeNav === "Companies" ? "nav-item active" : "nav-item"}
            onClick={() => handleNavigation("Companies")}
          >
            <Building2 size={19} />
            <span>Companies</span>
          </button>
          <button
            type="button"
            className={activeNav === "Community" ? "nav-item active" : "nav-item"}
            onClick={() => handleNavigation("Community")}
          >
            <Users size={19} />
            <span>Community</span>
          </button>
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-help-card">
            <div className="help-icon"><Sparkles size={18} /></div>
            <strong>Your next opportunity starts here.</strong>
            <p>Build your profile and make it easier for employers to find you.</p>
            <button type="button" onClick={() => handleNavigation("My profile")}>
              Complete profile <ArrowRight size={15} />
            </button>
          </div>
          <button
            type="button"
            className={activeNav === "Settings" ? "nav-item active" : "nav-item"}
            onClick={() => handleNavigation("Settings")}
          >
            <Settings size={19} />
            <span>Settings</span>
          </button>
          <div className="sidebar-footer">Made for Abia. Built for opportunity.</div>
        </div>
      </aside>

      {mobileMenuOpen && (
        <button
          type="button"
          className="sidebar-overlay"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close navigation"
        />
      )}

      <section className="dashboard-main">
        <header className="dashboard-topbar">
          <div className="topbar-left">
            <button
              type="button"
              className="mobile-menu-button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation"
            >
              <Menu size={22} />
            </button>
            <div className="breadcrumb">
              <span>Workspace</span>
              <span className="breadcrumb-slash">/</span>
              <strong>{activeNav}</strong>
            </div>
          </div>
          <div className="topbar-actions">
            <span className="location-pill"><MapPin size={15} /> Abia State</span>
            <button
              type="button"
              className="notification-button"
              aria-label="Notifications"
              onClick={() => setNotice("You are all caught up on notifications.")}
            >
              <Bell size={19} />
              <span />
            </button>
            <div className="topbar-avatar">M</div>
          </div>
        </header>

        <div className="dashboard-content">
          <section className="dashboard-welcome">
            <div className="welcome-copy">
              <div className="eyebrow"><span /> YOUR CAREER, YOUR NEXT MOVE</div>
              <h1>Find work that <span>moves you forward.</span></h1>
              <p>
                Discover jobs, connect with employers, and unlock opportunities
                across Abia State.
              </p>
            </div>
            <div className="welcome-art" aria-hidden="true">
              <div className="art-circle art-circle-one" />
              <div className="art-circle art-circle-two" />
              <div className="art-card art-card-main">
                <div className="art-card-icon"><BriefcaseBusiness size={23} /></div>
                <div className="art-card-lines"><i /><i /></div>
                <span className="art-check"><CheckCircle2 size={21} /></span>
              </div>
              <div className="art-floating art-floating-top"><Sparkles size={18} /></div>
              <div className="art-floating art-floating-bottom"><ArrowRight size={18} /></div>
            </div>
          </section>

          <section className="dashboard-stats" aria-label="Dashboard overview">
            <article className="stat-card">
              <div className="stat-icon stat-icon-green"><BriefcaseBusiness size={20} /></div>
              <div className="stat-text">
                <span>Opportunities</span>
                <strong>Explore jobs</strong>
                <small>Find your next role</small>
              </div>
            </article>
            <article className="stat-card">
              <div className="stat-icon stat-icon-lime"><Bookmark size={20} /></div>
              <div className="stat-text">
                <span>Saved jobs</span>
                <strong>{savedJobs.length.toString().padStart(2, "0")}</strong>
                <small>Keep track of roles</small>
              </div>
            </article>
            <article className="stat-card">
              <div className="stat-icon stat-icon-peach"><FileText size={20} /></div>
              <div className="stat-text">
                <span>Applications</span>
                <strong>Get started</strong>
                <small>Track your progress</small>
              </div>
            </article>
            <article className="stat-card">
              <div className="stat-icon stat-icon-blue"><Wallet size={20} /></div>
              <div className="stat-text">
                <span>Career resources</span>
                <strong>Build skills</strong>
                <small>Prepare for success</small>
              </div>
            </article>
          </section>

          <section className="dashboard-search-panel">
            <div className="search-panel-heading">
              <div>
                <span className="section-kicker">YOUR NEXT OPPORTUNITY</span>
                <h2>Search open positions</h2>
              </div>
              <span className="search-panel-note"><MapPin size={15} /> Opportunities in Abia</span>
            </div>
            <div className="job-search-form">
              <label className="job-search-input">
                <Search size={20} />
                <input
                  type="search"
                  placeholder="Job title, skill, company..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </label>
              <label className="job-category-select">
                <ArrowDownUp size={17} />
                <select value={category} onChange={(event) => setCategory(event.target.value)}>
                  {categories.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </label>
              <button
                type="button"
                className="search-submit-button"
                onClick={() => {
                  setActiveNav("Discover jobs");
                  setNotice("");
                }}
              >
                Search jobs <ArrowRight size={17} />
              </button>
            </div>
          </section>

          {notice && (
            <div className="dashboard-notice" role="status">
              <span>{notice}</span>
              <button type="button" onClick={() => setNotice("")} aria-label="Dismiss message">
                <X size={17} />
              </button>
            </div>
          )}

          <section className="jobs-section">
            <div className="jobs-section-heading">
              <div>
                <span className="section-kicker">HANDPICKED FOR YOU</span>
                <h2>{activeNav === "Saved jobs" ? "Your saved jobs" : "Latest opportunities"}</h2>
                <p>
                  {activeNav === "Saved jobs"
                    ? "The roles you have bookmarked for later."
                    : "Explore openings from businesses and employers."}
                </p>
              </div>
              <div className="jobs-heading-right">
                <span className="jobs-count">{displayedJobs.length} positions</span>
                <button
                  type="button"
                  className="view-all-button"
                  onClick={() => {
                    setCategory("All opportunities");
                    setSearch("");
                    setActiveNav("Discover jobs");
                    setNotice("");
                  }}
                >
                  View all <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="job-list">
              {displayedJobs.map((job) => (
                <article className="job-card" key={job.id}>
                  <div className={`company-logo company-${job.color}`}>{job.initials}</div>
                  <div className="job-details">
                    <div className="job-title-line">
                      <h3>{job.title}</h3>
                      {job.featured && <span className="featured-tag">FEATURED</span>}
                    </div>
                    <p className="job-company">{job.company}</p>
                    <div className="job-meta">
                      <span><MapPin size={14} /> {job.location}</span>
                      <span><Clock3 size={14} /> {job.type}</span>
                      <span className="job-category-tag">{job.category}</span>
                    </div>
                  </div>
                  <div className="job-card-right">
                    <button
                      type="button"
                      className={`save-job-button ${savedJobs.includes(job.id) ? "is-saved" : ""}`}
                      onClick={() => toggleSaved(job.id)}
                      aria-label={savedJobs.includes(job.id) ? "Remove saved job" : "Save job"}
                      title={savedJobs.includes(job.id) ? "Remove saved job" : "Save job"}
                    >
                      <Bookmark size={19} fill={savedJobs.includes(job.id) ? "currentColor" : "none"} />
                    </button>
                    <strong className="job-salary">{job.salary}</strong>
                    <span className="job-posted">{job.posted}</span>
                    <button
                      type="button"
                      className="job-details-button"
                      onClick={() => setNotice(`${job.title} at ${job.company}: job details and applications will be enabled when the backend is connected.`)}
                    >
                      View details <ArrowRight size={15} />
                    </button>
                  </div>
                </article>
              ))}

              {displayedJobs.length === 0 && (
                <div className="empty-jobs">
                  <div><Search size={25} /></div>
                  <h3>No jobs found</h3>
                  <p>
                    {activeNav === "Saved jobs"
                      ? "Save a job using the bookmark icon and it will appear here."
                      : "Try a different keyword or choose another category."}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setCategory("All opportunities");
                      if (activeNav === "Saved jobs" && savedJobs.length === 0) {
                        setActiveNav("Discover jobs");
                      }
                    }}
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
            <p className="demo-data-note">
              <Sparkles size={14} /> Sample listings for the dashboard design. Real jobs will appear when Abi Job is connected to its backend.
            </p>
          </section>

          <footer className="dashboard-footer">
            <span>© 2026 Abi Job</span>
            <span>Connecting Abia talent to opportunity.</span>
            <Link href="/">Back to home <ArrowRight size={14} /></Link>
          </footer>
        </div>
      </section>
    </main>
  );
}
