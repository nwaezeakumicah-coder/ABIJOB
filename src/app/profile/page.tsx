
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  CheckCircle2,
  FileText,
  MapPin,
  Pencil,
  Plus,
  Save,
  UserRound,
  BriefcaseBusiness,
  GraduationCap,
  Globe,
} from "lucide-react";

export default function ProfilePage() {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("Micah Nwaezeaku");
  const [headline, setHeadline] = useState("Aspiring professional | Open to opportunities");
  const [location, setLocation] = useState("Aba, Abia State");
  const [about, setAbout] = useState(
    "I am eager to learn, contribute my skills, and grow through meaningful work opportunities."
  );
  const [skills, setSkills] = useState([
    "Communication",
    "Problem solving",
    "Graphic Design",
    "Web Development",
  ]);
  const [newSkill, setNewSkill] = useState("");
  const [notice, setNotice] = useState("");

  function addSkill() {
    const skill = newSkill.trim();

    if (skill && !skills.some((item) => item.toLowerCase() === skill.toLowerCase())) {
      setSkills((current) => [...current, skill]);
      setNewSkill("");
    }
  }

  function saveProfile() {
    setEditing(false);
    setNotice("Your changes are visible in this preview. Database saving will be added with the backend.");
  }

  return (
    <main className="profile-page">
      <header className="profile-topbar">
        <Link href="/dashboard" className="profile-back-link">
          <ArrowLeft size={18} />
          Back to dashboard
        </Link>

        <Link href="/" className="profile-brand">
          <span className="profile-brand-mark">a.</span>
          <span>abi<span className="profile-brand-green">job</span></span>
        </Link>

        <span className="profile-topbar-label">JOB SEEKER PROFILE</span>
      </header>

      <div className="profile-content">
        <div className="profile-heading">
          <div>
            <span className="profile-eyebrow">YOUR PROFESSIONAL IDENTITY</span>
            <h1>My profile<span>.</span></h1>
            <p>Show employers what you can do and what makes you stand out.</p>
          </div>

          <button
            type="button"
            className="profile-edit-button"
            onClick={() => {
              if (editing) {
                saveProfile();
              } else {
                setEditing(true);
                setNotice("");
              }
            }}
          >
            {editing ? <Save size={17} /> : <Pencil size={17} />}
            {editing ? "Save changes" : "Edit profile"}
          </button>
        </div>

        {notice && (
          <div className="profile-notice" role="status">
            <CheckCircle2 size={18} />
            <span>{notice}</span>
          </div>
        )}

        <section className="profile-hero">
          <div className="profile-hero-main">
            <div className="profile-photo">
              <span>{name.trim().charAt(0).toUpperCase() || "M"}</span>
              <button type="button" aria-label="Change profile photo" title="Photo upload will be enabled later">
                <Camera size={16} />
              </button>
            </div>

            <div className="profile-hero-copy">
              {editing ? (
                <>
                  <label className="profile-field-label" htmlFor="profile-name">Full name</label>
                  <input
                    id="profile-name"
                    className="profile-input profile-name-input"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                  <label className="profile-field-label" htmlFor="profile-headline">Professional headline</label>
                  <input
                    id="profile-headline"
                    className="profile-input"
                    value={headline}
                    onChange={(event) => setHeadline(event.target.value)}
                  />
                </>
              ) : (
                <>
                  <h2>{name || "Your name"}</h2>
                  <p>{headline || "Add your professional headline"}</p>
                </>
              )}

              <div className="profile-location">
                <MapPin size={15} />
                {editing ? (
                  <input
                    aria-label="Location"
                    className="profile-inline-input"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                  />
                ) : (
                  <span>{location || "Add your location"}</span>
                )}
              </div>

              <div className="profile-status">
                <span />
                Open to opportunities
              </div>
            </div>
          </div>

          <div className="profile-completion">
            <div className="profile-completion-top">
              <span>PROFILE STRENGTH</span>
              <strong>Getting started</strong>
            </div>
            <div className="profile-progress">
              <span />
            </div>
            <p>Add your experience and education to strengthen your profile.</p>
          </div>
        </section>

        <div className="profile-grid">
          <div className="profile-main-column">
            <section className="profile-section">
              <div className="profile-section-heading">
                <div className="profile-section-icon"><UserRound size={19} /></div>
                <div>
                  <h3>About me</h3>
                  <p>Introduce yourself to potential employers.</p>
                </div>
              </div>

              {editing ? (
                <textarea
                  className="profile-textarea"
                  value={about}
                  onChange={(event) => setAbout(event.target.value)}
                  rows={5}
                  placeholder="Tell employers about yourself..."
                />
              ) : (
                <p className="profile-about-text">{about || "Add a short introduction about yourself."}</p>
              )}
            </section>

            <section className="profile-section">
              <div className="profile-section-heading">
                <div className="profile-section-icon"><BriefcaseBusiness size={19} /></div>
                <div>
                  <h3>Skills</h3>
                  <p>Highlight the skills you can bring to a role.</p>
                </div>
                <span className="profile-section-count">{skills.length}</span>
              </div>

              <div className="profile-skills">
                {skills.map((skill) => (
                  <span className="profile-skill" key={skill}>
                    {skill}
                    {editing && (
                      <button
                        type="button"
                        aria-label={`Remove ${skill}`}
                        onClick={() => setSkills((current) => current.filter((item) => item !== skill))}
                      >
                        ×
                      </button>
                    )}
                  </span>
                ))}
              </div>

              {editing && (
                <form
                  className="profile-add-skill"
                  onSubmit={(event) => {
                    event.preventDefault();
                    addSkill();
                  }}
                >
                  <input
                    className="profile-input"
                    value={newSkill}
                    onChange={(event) => setNewSkill(event.target.value)}
                    placeholder="Add a skill"
                  />
                  <button type="submit"><Plus size={17} /> Add skill</button>
                </form>
              )}
            </section>

            <section className="profile-section">
              <div className="profile-section-heading">
                <div className="profile-section-icon"><BriefcaseBusiness size={19} /></div>
                <div>
                  <h3>Work experience</h3>
                  <p>Showcase your previous roles and achievements.</p>
                </div>
              </div>

              <div className="profile-empty-section">
                <div className="profile-empty-icon"><BriefcaseBusiness size={22} /></div>
                <strong>No experience added yet</strong>
                <p>Include previous employment, internships, freelance work, or projects.</p>
                <button type="button" onClick={() => setNotice("Work experience editing will be added in the next profile update.")}>
                  <Plus size={16} /> Add experience
                </button>
              </div>
            </section>

            <section className="profile-section">
              <div className="profile-section-heading">
                <div className="profile-section-icon"><GraduationCap size={19} /></div>
                <div>
                  <h3>Education</h3>
                  <p>Add your academic background and qualifications.</p>
                </div>
              </div>

              <div className="profile-empty-section">
                <div className="profile-empty-icon"><GraduationCap size={22} /></div>
                <strong>No education added yet</strong>
                <p>Include your institution, qualification, and graduation year.</p>
                <button type="button" onClick={() => setNotice("Education editing will be added in the next profile update.")}>
                  <Plus size={16} /> Add education
                </button>
              </div>
            </section>
          </div>

          <aside className="profile-side-column">
            <section className="profile-section profile-cv-card">
              <div className="profile-section-heading">
                <div className="profile-section-icon"><FileText size={19} /></div>
                <div>
                  <h3>My CV</h3>
                  <p>Your professional document.</p>
                </div>
              </div>

              <div className="profile-cv-preview">
                <div className="profile-cv-document">
                  <div className="cv-document-head" />
                  <div className="cv-document-line cv-document-line-long" />
                  <div className="cv-document-line" />
                  <div className="cv-document-gap" />
                  <div className="cv-document-line cv-document-line-long" />
                  <div className="cv-document-line" />
                  <div className="cv-document-line cv-document-line-short" />
                </div>
                <div>
                  <strong>Build your CV</strong>
                  <p>Create a CV that presents your skills and experience professionally.</p>
                </div>
              </div>

              <button
                type="button"
                className="profile-primary-button"
                onClick={() => setNotice("The CV builder will be connected in a future update.")}
              >
                Create my CV <ArrowRight size={17} />
              </button>
            </section>

            <section className="profile-section profile-preferences">
              <div className="profile-section-heading">
                <div className="profile-section-icon"><Globe size={19} /></div>
                <div>
                  <h3>Job preferences</h3>
                  <p>Help us understand your goals.</p>
                </div>
              </div>

              <div className="profile-preference-item">
                <span>Preferred location</span>
                <strong>{location || "Not specified"}</strong>
              </div>
              <div className="profile-preference-item">
                <span>Work arrangement</span>
                <strong>Open to options</strong>
              </div>
              <div className="profile-preference-item">
                <span>Profile visibility</span>
                <strong className="profile-visible"><CheckCircle2 size={14} /> Visible preview</strong>
              </div>

              <button
                type="button"
                className="profile-secondary-button"
                onClick={() => {
                  setEditing(true);
                  setNotice("Edit your details above, then save your changes.");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Update preferences <ArrowRight size={16} />
              </button>
            </section>

            <div className="profile-tip">
              <div className="profile-tip-icon"><CheckCircle2 size={19} /></div>
              <strong>Make a great first impression</strong>
              <p>A complete profile helps employers understand your experience, interests, and strengths.</p>
            </div>
          </aside>
        </div>

        <footer className="profile-footer">
          <span>© 2026 Abi Job</span>
          <span>Connecting Abia talent to opportunity.</span>
          <Link href="/dashboard">Return to dashboard <ArrowRight size={14} /></Link>
        </footer>
      </div>
    </main>
  );
}
