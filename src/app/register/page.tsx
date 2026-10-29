
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Eye,
  EyeOff,
  UserRound,
  UsersRound,
} from "lucide-react";

const accountTypes = [
  {
    id: "job-seeker",
    title: "Job seeker",
    description: "Find jobs and build your career.",
    icon: UserRound,
  },
  {
    id: "employer",
    title: "Employer",
    description: "Hire talent for your business.",
    icon: BriefcaseBusiness,
  },
  {
    id: "professional",
    title: "Skilled professional",
    description: "Showcase your skills and services.",
    icon: UsersRound,
  },
];

export default function RegisterPage() {
  const [accountType, setAccountType] = useState("job-seeker");
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!agreed) {
      alert("Please agree to the Terms of Service and Privacy Policy.");
      return;
    }

    alert(
      "Registration form completed. Account creation will be connected to Supabase in the authentication step."
    );
  }

  return (
    <main className="auth-page">
      <header className="auth-header">
        <Link href="/" className="brand">
          <span className="brand-mark">A</span>
          <span className="brand-name">
            abi<span>job</span>
            <small>OPPORTUNITY STARTS HERE</small>
          </span>
        </Link>

        <Link href="/" className="auth-back-link">
          <ArrowLeft size={17} />
          Back to home
        </Link>
      </header>

      <div className="auth-layout">
        <section className="auth-promo">
          <span className="eyebrow">
            <span className="status-dot" />
            YOUR NEXT CHAPTER STARTS HERE
          </span>

          <h1>
            Opportunity is
            <br />
            closer than
            <br />
            <span>you think.</span>
          </h1>

          <p className="auth-promo-text">
            Discover opportunities, connect with people who need your skills,
            and grow your future right here in Abia State.
          </p>

          <div className="auth-benefits">
            <div>
              <CheckCircle2 size={19} />
              <span>Discover opportunities that fit you</span>
            </div>
            <div>
              <CheckCircle2 size={19} />
              <span>Connect with employers and clients</span>
            </div>
            <div>
              <CheckCircle2 size={19} />
              <span>Build a profile that showcases your value</span>
            </div>
          </div>

          <div className="auth-promo-bottom">
            <div className="avatar-stack">
              <span>M</span>
              <span>C</span>
              <span>A</span>
              <span>+</span>
            </div>
            <p>
              Built for the people, talent and businesses
              <br />
              shaping Abia State.
            </p>
          </div>
        </section>

        <section className="auth-form-section">
          <div className="auth-form-container">
            <div className="auth-form-heading">
              <span className="form-step">CREATE YOUR ACCOUNT</span>
              <h2>Join Abi Job</h2>
              <p>
                Start with a free account. You can complete your profile
                afterwards.
              </p>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
              <fieldset className="account-type-fieldset">
                <legend>I want to join as a...</legend>

                <div className="account-type-grid">
                  {accountTypes.map((type) => {
                    const Icon = type.icon;
                    const selected = accountType === type.id;

                    return (
                      <button
                        key={type.id}
                        type="button"
                        className={`account-type-card ${
                          selected ? "selected" : ""
                        }`}
                        onClick={() => setAccountType(type.id)}
                        aria-pressed={selected}
                      >
                        <span className="account-type-icon">
                          <Icon size={21} />
                        </span>

                        <span className="account-type-copy">
                          <strong>{type.title}</strong>
                          <small>{type.description}</small>
                        </span>

                        <span className="account-radio">
                          {selected && <span />}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div className="form-field">
                <label htmlFor="fullName">Full name</label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="password">Create password</label>

                <div className="password-input-wrap">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="At least 8 characters"
                    autoComplete="new-password"
                    minLength={8}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>

              <label className="terms-check">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(event) => setAgreed(event.target.checked)}
                />
                <span>
                  I agree to the <Link href="/terms">Terms of Service</Link>{" "}
                  and <Link href="/privacy">Privacy Policy</Link>.
                </span>
              </label>

              <button type="submit" className="auth-submit">
                Create account
                <ArrowRight size={18} />
              </button>
            </form>

            <p className="auth-switch">
              Already have an account? <Link href="/login">Log in</Link>
            </p>

            <p className="auth-security-note">
              Your information should always be protected.
            </p>
          </div>
        </section>
      </div>

      <footer className="auth-footer">
        <span>© 2026 Abi Job</span>
        <span>Connecting talent with opportunity across Abia State.</span>
      </footer>
    </main>
  );
}
