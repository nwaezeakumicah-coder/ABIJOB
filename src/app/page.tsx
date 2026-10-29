"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  GraduationCap,
  MapPin,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
  Wrench,
  X,
} from "lucide-react";

const categories = [
  {
    icon: BriefcaseBusiness,
    title: "Professional careers",
    description: "Find roles that match your experience.",
    color: "green",
    href: "/jobs",
  },
  {
    icon: Wrench,
    title: "Skilled professionals",
    description: "Put your craft in front of more people.",
    color: "lime",
    href: "/professionals",
  },
  {
    icon: Store,
    title: "Business & hiring",
    description: "Find talent and grow your business.",
    color: "orange",
    href: "/employers",
  },
  {
    icon: GraduationCap,
    title: "Learning & growth",
    description: "Explore training and new possibilities.",
    color: "green",
    href: "/opportunities",
  },
];

const sampleJobs = [
  {
    title: "Frontend Developer",
    company: "Digital Solutions",
    location: "Aba, Abia State",
    type: "Full-time",
    category: "Technology",
    salary: "Salary negotiable",
    symbol: "</>",
    color: "job-green",
  },
  {
    title: "Fashion Designer",
    company: "Made in Aba Studio",
    location: "Ariaria, Aba",
    type: "Contract",
    category: "Fashion & Design",
    salary: "Competitive pay",
    symbol: "✳",
    color: "job-lime",
  },
  {
    title: "Customer Service Officer",
    company: "Business Hub",
    location: "Umuahia, Abia State",
    type: "Full-time",
    category: "Administration",
    salary: "Salary negotiable",
    symbol: "↗",
    color: "job-cream",
  },
];

const steps = [
  {
    number: "01",
    title: "Create your profile",
    description:
      "Tell us about your skills, experience, interests or business.",
  },
  {
    number: "02",
    title: "Discover your opportunities",
    description:
      "Explore jobs, skilled professionals and opportunities relevant to you.",
  },
  {
    number: "03",
    title: "Take your next step",
    description:
      "Apply for work, connect with talent and turn possibilities into progress.",
  },
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

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Abia");
  const [activeCategory, setActiveCategory] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredJobs = useMemo(() => {
    const term = search.trim().toLowerCase();

    return sampleJobs.filter((job) => {
      const matchesSearch =
        !term ||
        `${job.title} ${job.company} ${job.category} ${job.location}`
          .toLowerCase()
          .includes(term);

      const matchesLocation =
        location === "All Abia" || job.location.includes(location);

      const matchesCategory =
        activeCategory === "All" || job.category === activeCategory;

      return matchesSearch && matchesLocation && matchesCategory;
    });
  }, [search, location, activeCategory]);

  return (
    <main className="page-shell">
      <div className="announcement">
        <div className="container announcement-inner">
          <div className="announcement-message">
            <span className="announcement-dot" />
            <span>Abia&apos;s people. Abia&apos;s possibilities.</span>
          </div>

          <Link href="/register" className="announcement-link">
            Your next chapter starts here <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-inner">
          <Brand />

          <nav className="main-nav" aria-label="Main navigation">
            <Link href="/jobs">Find jobs</Link>
            <Link href="/professionals">Find skilled workers</Link>
            <Link href="/hub">Abi Hub</Link>
            <Link href="/about">About us</Link>
          </nav>

          <div className="nav-actions">
            <Link href="/login" className="login-link">
              Log in
            </Link>
            <Link href="/register" className="btn btn-primary">
              Get started <ArrowUpRight size={16} />
            </Link>

            <button
              type="button"
              className="mobile-menu-button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <Link href="/jobs" onClick={() => setMobileMenuOpen(false)}>
              Find jobs
            </Link>
            <Link
              href="/professionals"
              onClick={() => setMobileMenuOpen(false)}
            >
              Find skilled workers
            </Link>
            <Link href="/employers" onClick={() => setMobileMenuOpen(false)}>
              For employers
            </Link>
            <Link href="/hub" onClick={() => setMobileMenuOpen(false)}>
              Abi Hub
            </Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
              About Abi Job
            </Link>
            <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
              Create an account <ArrowRight size={16} />
            </Link>
          </nav>
        )}
      </header>

      <section className="hero">
        <div className="container hero-layout">
          <div className="hero-copy animate-up">
            <div className="hero-badge">
              <Sparkles size={14} />
              BUILT AROUND THE PEOPLE OF ABIA
            </div>

            <h1>
              Your talent.
              <br />
              Your ambition.
              <br />
              <span>Your opportunity.</span>
            </h1>

            <p className="hero-description">
              Find work. Showcase your skills. Discover talent. Abi Job
              brings people, businesses and opportunities closer together
              across Abia State.
            </p>

            <div className="hero-actions">
              <Link href="/register" className="btn btn-lime">
                Find your opportunity <ArrowUpRight size={17} />
              </Link>

              <Link href="/employers" className="hero-secondary">
                I want to hire <ArrowRight size={17} />
              </Link>
            </div>

            <div className="hero-trust">
              <div className="trust-avatars" aria-hidden="true">
                <span>J</span>
                <span>S</span>
                <span>B</span>
                <span>+</span>
              </div>

              <div>
                <strong>More than a job board.</strong>
                <small>
                  A place for talent, work and business to connect.
                </small>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="dashboard-card">
              <div className="dashboard-top">
                <div>
                  <span className="dashboard-overline">
                    OPPORTUNITY STARTS HERE
                  </span>
                  <h2>Make your next move.</h2>
                </div>

                <span className="dashboard-mark">a.</span>
              </div>

              <div className="mini-search">
                <Search size={17} />
                <span>What would you like to discover?</span>
                <span className="mini-search-button">
                  <ArrowRight size={15} />
                </span>
              </div>

              <div className="dashboard-section-title">
                <strong>One platform. More possibilities.</strong>
                <span>Explore Abi Job</span>
              </div>

              <div className="opportunity-tile">
                <span className="tile-icon tile-icon-green">
                  <BriefcaseBusiness size={20} />
                </span>
                <span className="tile-copy">
                  <strong>Find meaningful work</strong>
                  <small>Discover jobs and career opportunities.</small>
                </span>
                <ArrowUpRight className="tile-arrow" size={18} />
              </div>

              <div className="opportunity-tile">
                <span className="tile-icon tile-icon-lime">
                  <Wrench size={20} />
                </span>
                <span className="tile-copy">
                  <strong>Showcase what you can do</strong>
                  <small>Let your skills open new doors.</small>
                </span>
                <ArrowUpRight className="tile-arrow" size={18} />
              </div>

              <div className="opportunity-tile">
                <span className="tile-icon tile-icon-orange">
                  <Users size={20} />
                </span>
                <span className="tile-copy">
                  <strong>Find the right people</strong>
                  <small>Build your team and grow your business.</small>
                </span>
                <ArrowUpRight className="tile-arrow" size={18} />
              </div>

              <div className="dashboard-footer">
                <span className="footer-check">
                  <Check size={14} />
                </span>
                Every skill deserves a chance to shine.
              </div>
            </div>

            <div className="floating-card floating-card-top">
              <span className="floating-symbol">
                <ShieldCheck size={19} />
              </span>
              <span>
                <strong>Opportunities with purpose.</strong>
                <small>Built for our communities.</small>
              </span>
            </div>

            <div className="floating-card floating-card-bottom">
              <span className="floating-symbol floating-symbol-lime">
                <ArrowUpRight size={19} />
              </span>
              <span>
                <strong>Your next step starts here.</strong>
                <small>Discover. Connect. Grow.</small>
              </span>
            </div>
          </div>
        </div>

        <div className="container hero-bottom">
          <span>ONE CONNECTED OPPORTUNITY NETWORK</span>
          <div>
            <span>JOB SEEKERS</span>
            <i />
            <span>SKILLED WORKERS</span>
            <i />
            <span>BUSINESSES</span>
            <i />
            <span>EMPLOYERS</span>
          </div>
        </div>
      </section>

      <section className="search-section" aria-label="Search opportunities">
        <div className="container">
          <div className="search-panel">
            <div className="search-intro">
              <span className="search-icon">
                <Search size={23} />
              </span>

              <div>
                <strong>What opportunity are you looking for?</strong>
                <small>
                  Start with a role, skill, company or location.
                </small>
              </div>
            </div>

            <form
              className="search-form"
              onSubmit={(event) => {
                event.preventDefault();

                const params = new URLSearchParams();

                if (search.trim()) {
                  params.set("q", search.trim());
                }

                if (location !== "All Abia") {
                  params.set("location", location);
                }

                window.location.href = `/jobs${
                  params.size ? `?${params.toString()}` : ""
                }`;
              }}
            >
              <label className="search-input-wrap">
                <Search size={18} />

                <input
                  type="search"
                  placeholder="Job title, skill or keyword"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  aria-label="Search by job title, skill or keyword"
                />
              </label>

              <label className="location-select-wrap">
                <MapPin size={18} />

                <select
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  aria-label="Choose location"
                >
                  <option value="All Abia">All Abia State</option>
                  <option value="Aba">Aba</option>
                  <option value="Umuahia">Umuahia</option>
                </select>

                <ChevronDown size={15} />
              </label>

              <button type="submit" className="btn btn-primary">
                Search opportunities <ArrowRight size={17} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section" id="discover">
        <div className="container">
          <div className="section-heading-row">
            <div className="section-heading">
              <span className="eyebrow">MORE THAN EMPLOYMENT</span>

              <h2>
                One place.
                <br />
                <span>Many ways forward.</span>
              </h2>

              <p>
                Whether you are building a career, growing a business or
                turning a skill into income, there should be a place for
                you to be discovered.
              </p>
            </div>

            <Link href="/register" className="text-link">
              Explore Abi Job <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="category-grid">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  href={category.href}
                  className={`category-card category-card-${category.color}`}
                  key={category.title}
                >
                  <span className="category-icon">
                    <Icon size={24} />
                  </span>

                  <span className="category-title">{category.title}</span>

                  <span className="category-description">
                    {category.description}
                  </span>

                  <ArrowUpRight className="category-arrow" size={20} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="opportunities">
        <div className="container">
          <div className="section-heading-row">
            <div className="section-heading">
              <span className="eyebrow">A PREVIEW OF WHAT IS POSSIBLE</span>

              <h2>
                Discover your
                <br />
                <span>next opportunity.</span>
              </h2>

              <p>
                Explore illustrative examples of the work and professional
                opportunities the platform is designed to support.
              </p>
            </div>

            <Link href="/jobs" className="btn btn-outline">
              Explore jobs <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="filter-row" aria-label="Filter example jobs">
            {[
              "All",
              "Technology",
              "Fashion & Design",
              "Administration",
            ].map((category) => (
              <button
                type="button"
                key={category}
                className={`filter-chip ${
                  activeCategory === category ? "filter-chip-active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="jobs-grid">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <article className="job-card" key={job.title}>
                  <div className="job-card-top">
                    <span className={`job-icon ${job.color}`}>
                      {job.symbol}
                    </span>

                    <span className="job-type">{job.type}</span>
                  </div>

                  <span className="job-category">{job.category}</span>

                  <h3>{job.title}</h3>

                  <p className="job-company">{job.company}</p>

                  <div className="job-meta">
                    <span>
                      <MapPin
                        size={14}
                        style={{
                          display: "inline",
                          verticalAlign: "middle",
                          marginRight: 5,
                        }}
                      />
                      {job.location}
                    </span>

                    <span>{job.salary}</span>
                  </div>

                  <div className="job-card-bottom">
                    <span className="demo-label">
                      Illustrative example
                    </span>

                    <Link href="/jobs">
                      Explore <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <div className="empty-results">
                <Search size={25} />
                <h3>No matching examples found</h3>
                <p>
                  Try a different category or change your search on the jobs
                  page.
                </p>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setSearch("");
                    setLocation("All Abia");
                    setActiveCategory("All");
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          <p className="demo-notice">
            These examples are not verified vacancies. Live listings will
            be displayed only after job publishing and database
            functionality have been implemented.
          </p>
        </div>
      </section>

      <section className="section" id="how-it-works">
        <div className="container how-layout">
          <div className="how-intro">
            <span className="eyebrow">YOUR JOURNEY STARTS HERE</span>

            <div className="section-heading">
              <h2>
                Make the next
                <br />
                <span>move count.</span>
              </h2>

              <p>
                Getting started should be straightforward. Create your
                profile, discover what fits and take the next step at your
                own pace.
              </p>
            </div>

            <Link href="/register" className="btn btn-primary">
              Join Abi Job <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="steps-list">
            {steps.map((step) => (
              <article className="step-item" key={step.number}>
                <span className="step-number">{step.number}</span>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>

                <ArrowUpRight className="step-arrow" size={19} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="hub">
        <div className="container">
          <div className="section-heading-row">
            <div className="section-heading">
              <span className="eyebrow">KNOW MORE. GROW MORE.</span>

              <h2>
                Opportunities beyond
                <br />
                <span>the job search.</span>
              </h2>

              <p>
                Keep moving forward with useful information, scholarships,
                training opportunities and resources for careers and
                businesses.
              </p>
            </div>

            <Link href="/hub" className="btn btn-outline">
              Explore Abi Hub <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="category-grid">
            <Link href="/hub" className="category-card">
              <span className="category-icon">
                <Sparkles size={24} />
              </span>
              <span className="category-title">News & insights</span>
              <span className="category-description">
                Stay informed about useful developments.
              </span>
              <ArrowUpRight className="category-arrow" size={20} />
            </Link>

            <Link href="/opportunities" className="category-card">
              <span className="category-icon">
                <GraduationCap size={24} />
              </span>
              <span className="category-title">Scholarships & training</span>
              <span className="category-description">
                Find ways to learn and develop your skills.
              </span>
              <ArrowUpRight className="category-arrow" size={20} />
            </Link>

            <Link href="/employers" className="category-card">
              <span className="category-icon">
                <Store size={24} />
              </span>
              <span className="category-title">Business resources</span>
              <span className="category-description">
                Connect with people who can help your business grow.
              </span>
              <ArrowUpRight className="category-arrow" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="community-card">
            <div className="community-copy">
              <span className="community-eyebrow">
                BUILT AROUND OUR PEOPLE
              </span>

              <h2>
                Abia has the talent.
                <br />
                Let&apos;s connect it to
                <br />
                <span>opportunity.</span>
              </h2>

              <p>
                Whether you are searching for work, showcasing a skill or
                building a business, Abi Job is being built to help bring
                the right people and possibilities together.
              </p>

              <Link href="/register" className="btn btn-lime">
                Become part of it <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="community-art" aria-hidden="true">
              <div className="community-ring ring-one" />
              <div className="community-ring ring-two" />

              <div className="community-logo">
                a<span>.</span>
              </div>

              <span className="art-star art-star-one">✳</span>
              <span className="art-star art-star-two">✦</span>
              <span className="art-dot art-dot-one" />
              <span className="art-dot art-dot-two" />
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand-block">
              <Brand />

              <p>
                Connecting Abia&apos;s people, skills, businesses and
                opportunities. A platform designed to help talent get
                discovered and possibilities move forward.
              </p>
            </div>

            <div className="footer-column">
              <h3>Discover</h3>
              <Link href="/jobs">Find jobs</Link>
              <Link href="/professionals">Find skilled workers</Link>
              <Link href="/opportunities">Scholarships & training</Link>
              <Link href="/hub">Abi News & Hub</Link>
            </div>

            <div className="footer-column">
              <h3>Get involved</h3>
              <Link href="/register">Create an account</Link>
              <Link href="/employers">Hire talent</Link>
              <Link href="/login">Log in</Link>
              <Link href="/about">About Abi Job</Link>
            </div>

            <div className="footer-column">
              <h3>Information</h3>
              <Link href="/contact">Contact us</Link>
              <Link href="/help">Help centre</Link>
              <Link href="/privacy">Privacy policy</Link>
              <Link href="/terms">Terms of service</Link>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Abi Job. All rights reserved.</span>
            <span>Designed to connect talent with opportunity.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}