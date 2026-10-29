
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Bell,
  ChevronRight,
  CircleHelp,
  Eye,
  Globe,
  LockKeyhole,
  LogOut,
  ShieldCheck,
  SlidersHorizontal,
  UserRound,
  BriefcaseBusiness,
} from "lucide-react";

export default function SettingsPage() {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [jobAlerts, setJobAlerts] = useState(true);
  const [weeklyUpdates, setWeeklyUpdates] = useState(false);
  const [profileVisibility, setProfileVisibility] = useState(true);

  const settingsGroups = [
    {
      title: "Account",
      items: [
        {
          icon: UserRound,
          label: "Personal information",
          description: "Manage your name and contact details",
          href: "/profile",
        },
        {
          icon: LockKeyhole,
          label: "Password and security",
          description: "Keep your account protected",
          href: "/forgot-password",
        },
        {
          icon: ShieldCheck,
          label: "Privacy",
          description: "Control how your profile appears",
          href: "#privacy",
        },
      ],
    },
    {
      title: "Preferences",
      items: [
        {
          icon: Bell,
          label: "Notifications",
          description: "Manage your notification preferences",
          href: "/notifications",
        },
        {
          icon: BriefcaseBusiness,
          label: "Job preferences",
          description: "Choose the opportunities you want to see",
          href: "/jobs",
        },
        {
          icon: Globe,
          label: "Language and region",
          description: "English · Nigeria",
          href: "#region",
        },
      ],
    },
  ];

  return (
    <main className="settings-page">
      <header className="settings-header">
        <Link href="/dashboard" className="settings-back">
          <ArrowLeft size={19} />
          <span>Dashboard</span>
        </Link>

        <Link href="/dashboard" className="settings-brand">
          <span className="settings-brand-mark">A</span>
          <span>abi<span>job</span></span>
        </Link>

        <Link href="/profile" className="settings-profile-link">
          <UserRound size={18} />
          <span>My profile</span>
        </Link>
      </header>

      <section className="settings-main">
        <div className="settings-heading">
          <div>
            <p className="settings-eyebrow">YOUR ACCOUNT</p>
            <h1>Settings<span>.</span></h1>
            <p className="settings-intro">
              Make Abi Job work better for you. Manage your account,
              privacy and preferences in one place.
            </p>
          </div>

          <div className="settings-heading-icon">
            <SlidersHorizontal size={31} />
          </div>
        </div>

        <div className="settings-layout">
          <div className="settings-primary">
            {settingsGroups.map((group) => (
              <section className="settings-group" key={group.title}>
                <h2>{group.title}</h2>

                <div className="settings-card">
                  {group.items.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        href={item.href}
                        className="settings-row"
                        key={item.label}
                      >
                        <span className="settings-row-icon">
                          <Icon size={20} />
                        </span>

                        <span className="settings-row-copy">
                          <strong>{item.label}</strong>
                          <small>{item.description}</small>
                        </span>

                        <ChevronRight
                          className="settings-chevron"
                          size={19}
                        />
                      </Link>
                    );
                  })}
                </div>
              </section>
            ))}

            <section className="settings-group" id="privacy">
              <h2>Privacy and visibility</h2>

              <div className="settings-card">
                <div className="settings-toggle-row">
                  <div className="settings-row-icon">
                    <Eye size={20} />
                  </div>

                  <div className="settings-row-copy">
                    <strong>Profile visibility</strong>
                    <small>
                      Allow employers to discover your profile.
                    </small>
                  </div>

                  <button
                    type="button"
                    className={`settings-switch ${
                      profileVisibility ? "is-on" : ""
                    }`}
                    role="switch"
                    aria-checked={profileVisibility}
                    aria-label="Profile visibility"
                    onClick={() =>
                      setProfileVisibility(!profileVisibility)
                    }
                  >
                    <span />
                  </button>
                </div>
              </div>
            </section>

            <section className="settings-group">
              <h2>Notification preferences</h2>

              <div className="settings-card">
                <div className="settings-toggle-row">
                  <div className="settings-row-icon">
                    <Bell size={20} />
                  </div>

                  <div className="settings-row-copy">
                    <strong>Email notifications</strong>
                    <small>
                      Receive important updates by email.
                    </small>
                  </div>

                  <button
                    type="button"
                    className={`settings-switch ${
                      emailAlerts ? "is-on" : ""
                    }`}
                    role="switch"
                    aria-checked={emailAlerts}
                    aria-label="Email notifications"
                    onClick={() => setEmailAlerts(!emailAlerts)}
                  >
                    <span />
                  </button>
                </div>

                <div className="settings-toggle-row">
                  <div className="settings-row-icon">
                    <BriefcaseBusiness size={20} />
                  </div>

                  <div className="settings-row-copy">
                    <strong>Job recommendations</strong>
                    <small>
                      Get notified about matching opportunities.
                    </small>
                  </div>

                  <button
                    type="button"
                    className={`settings-switch ${
                      jobAlerts ? "is-on" : ""
                    }`}
                    role="switch"
                    aria-checked={jobAlerts}
                    aria-label="Job recommendations"
                    onClick={() => setJobAlerts(!jobAlerts)}
                  >
                    <span />
                  </button>
                </div>

                <div className="settings-toggle-row">
                  <div className="settings-row-icon">
                    <Globe size={20} />
                  </div>

                  <div className="settings-row-copy">
                    <strong>Weekly Abi Job updates</strong>
                    <small>
                      Get a weekly roundup of jobs and opportunities.
                    </small>
                  </div>

                  <button
                    type="button"
                    className={`settings-switch ${
                      weeklyUpdates ? "is-on" : ""
                    }`}
                    role="switch"
                    aria-checked={weeklyUpdates}
                    aria-label="Weekly Abi Job updates"
                    onClick={() => setWeeklyUpdates(!weeklyUpdates)}
                  >
                    <span />
                  </button>
                </div>
              </div>
            </section>
          </div>

          <aside className="settings-sidebar">
            <div className="settings-help-card">
              <div className="settings-help-icon">
                <CircleHelp size={25} />
              </div>

              <p className="settings-sidebar-label">NEED A HAND?</p>
              <h3>We’re here to help.</h3>
              <p>
                Have a question about your account or need help using
                Abi Job? Our support team is here for you.
              </p>

              <a href="mailto:support@abijob.ng">
                Contact support <ChevronRight size={17} />
              </a>
            </div>

            <div className="settings-account-card">
              <p className="settings-sidebar-label">YOUR ACCOUNT</p>
              <h3>Build your next opportunity.</h3>
              <p>
                Keep your profile updated to help employers discover
                your skills and experience.
              </p>

              <Link href="/profile">
                Update my profile <ChevronRight size={17} />
              </Link>
            </div>

            <Link href="/login" className="settings-logout">
              <LogOut size={18} />
              Sign out
            </Link>
          </aside>
        </div>

        <footer className="settings-footer">
          <span>© 2026 Abi Job</span>
          <span>Opportunity starts here.</span>
        </footer>
      </section>
    </main>
  );
}
