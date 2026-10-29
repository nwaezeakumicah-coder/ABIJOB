
"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
} from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    alert(
      "The login form is ready. We will connect it to Supabase authentication in the backend stage."
    );
  }

  return (
    <main className="auth-page login-page">
      <header className="auth-header">
        <Link href="/" className="brand" aria-label="Abi Job home">
          <span className="brand-mark">a.</span>

          <span className="brand-copy">
            <span className="brand-name">
              abi<span>job</span>
            </span>

            <span className="brand-tagline">
              OPPORTUNITY STARTS HERE
            </span>
          </span>
        </Link>

        <Link href="/" className="auth-back-link">
          <ArrowLeft size={17} />
          Back to home
        </Link>
      </header>

      <div className="login-layout">
        <section className="login-promo">
          <span className="login-kicker">
            <span className="status-dot" />
            YOUR NEXT OPPORTUNITY AWAITS
          </span>

          <h1>
            Your future
            <br />
            doesn't wait.
            <br />
            <span>Neither should you.</span>
          </h1>

          <p>
            Sign in to discover opportunities, connect with employers,
            showcase your skills, and take the next step in your career
            across Abia State.
          </p>

          <div className="login-promo-stats">
            <div>
              <strong>01</strong>
              <span>Sign in</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Discover</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Get hired</span>
            </div>
          </div>
        </section>

        <section className="login-form-section">
          <div className="login-form-container">
            <span className="login-step">WELCOME BACK</span>

            <h2>Good to have you back.</h2>

            <p className="login-description">
              Enter your details to access your Abi Job account.
            </p>

            <form className="login-form" onSubmit={handleSubmit}>
              <label className="login-field">
                <span>Email address</span>

                <div className="login-input-wrap">
                  <Mail size={19} aria-hidden="true" />

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="email"
                    required
                  />
                </div>
              </label>

              <label className="login-field">
                <span>Password</span>

                <div className="login-input-wrap">
                  <LockKeyhole size={19} aria-hidden="true" />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    autoComplete="current-password"
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword((current) => !current)}
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
              </label>

              <div className="login-options">
                <label className="remember-option">
                  <input type="checkbox" name="remember" />
                  <span>Remember me</span>
                </label>

                <Link href="/forgot-password">
                  Forgot password?
                </Link>
              </div>

              <button type="submit" className="login-submit">
                Sign in to your account
                <ArrowRight size={19} />
              </button>
            </form>

            <div className="login-divider">
              <span>NEW TO ABI JOB?</span>
            </div>

            <Link href="/register" className="login-register-link">
              Create an account
              <ArrowRight size={18} />
            </Link>

            <p className="login-security">
              Your career journey. Your opportunities. One account.
            </p>
          </div>
        </section>
      </div>

      <footer className="login-footer">
        <span>© {new Date().getFullYear()} Abi Job</span>
        <span>
          Connecting talent with opportunity across Abia State.
        </span>
      </footer>
    </main>
  );
}
