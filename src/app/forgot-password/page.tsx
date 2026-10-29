
"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowLeft, ArrowRight, Mail, ShieldCheck } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
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

        <Link href="/login" className="auth-back-link">
          <ArrowLeft size={17} />
          Back to sign in
        </Link>
      </header>

      <div className="login-layout">
        <section className="login-promo">
          <span className="login-kicker">
            <span className="status-dot" />
            YOUR CAREER JOURNEY CONTINUES
          </span>

          <h1>
            A fresh start
            <br />
            is just a step
            <br />
            <span>away.</span>
          </h1>

          <p>
            Having trouble accessing your account? We will help you get
            back to discovering opportunities and building your future
            with Abi Job.
          </p>

          <div className="login-promo-stats">
            <div>
              <strong>01</strong>
              <span>Verify email</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Reset password</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Sign in</span>
            </div>
          </div>
        </section>

        <section className="login-form-section">
          <div className="login-form-container">
            <span className="login-step">ACCOUNT RECOVERY</span>

            {submitted ? (
              <>
                <div className="recovery-icon">
                  <ShieldCheck size={30} />
                </div>

                <h2>Check your inbox.</h2>

                <p className="login-description">
                  Your request has been recorded for{" "}
                  <strong>{email}</strong>. Password-reset emails will
                  work once authentication is connected to the backend.
                </p>

                <Link href="/login" className="login-submit recovery-link">
                  Return to sign in
                  <ArrowRight size={19} />
                </Link>
              </>
            ) : (
              <>
                <h2>Forgot your password?</h2>

                <p className="login-description">
                  Enter the email address associated with your account.
                  We will help you get back in.
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

                  <button type="submit" className="login-submit">
                    Continue
                    <ArrowRight size={19} />
                  </button>
                </form>

                <div className="login-divider">
                  <span>REMEMBERED YOUR PASSWORD?</span>
                </div>

                <Link href="/login" className="login-register-link">
                  Back to sign in
                  <ArrowRight size={18} />
                </Link>
              </>
            )}

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
