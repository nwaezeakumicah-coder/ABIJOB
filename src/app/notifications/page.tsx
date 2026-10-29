
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Bell,
  BriefcaseBusiness,
  Check,
  CheckCheck,
  ChevronRight,
  Clock3,
  MessageCircle,
  Settings2,
  Sparkles,
  Trash2,
  UserRound,
} from "lucide-react";

type Notification = {
  id: number;
  type: "job" | "application" | "message" | "profile" | "system";
  title: string;
  message: string;
  time: string;
  unread: boolean;
  link: string;
};

const initialNotifications: Notification[] = [
  {
    id: 1,
    type: "job",
    title: "New jobs match your interests",
    message:
      "Fresh opportunities may be available based on your skills and preferred location.",
    time: "10 minutes ago",
    unread: true,
    link: "/jobs",
  },
  {
    id: 2,
    type: "application",
    title: "Application reminder",
    message:
      "Review your applications and check for updates from employers.",
    time: "2 hours ago",
    unread: true,
    link: "/jobs",
  },
  {
    id: 3,
    type: "profile",
    title: "Complete your profile",
    message:
      "Add your experience, skills, and certificates to help employers discover you.",
    time: "Yesterday",
    unread: true,
    link: "/profile",
  },
  {
    id: 4,
    type: "message",
    title: "Stay ready for employer messages",
    message:
      "Keep your contact information up to date so employers can reach you.",
    time: "Yesterday",
    unread: false,
    link: "/profile",
  },
  {
    id: 5,
    type: "system",
    title: "Welcome to Abi Job",
    message:
      "Your space to discover opportunities and connect with employers across Abia State.",
    time: "Earlier",
    unread: false,
    link: "/dashboard",
  },
];

const filters = ["All", "Unread", "Jobs", "Applications"] as const;
type Filter = (typeof filters)[number];

function NotificationIcon({ type }: { type: Notification["type"] }) {
  if (type === "job") return <BriefcaseBusiness size={21} />;
  if (type === "application") return <CheckCheck size={21} />;
  if (type === "message") return <MessageCircle size={21} />;
  if (type === "profile") return <UserRound size={21} />;
  return <Sparkles size={21} />;
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const unreadCount = notifications.filter((item) => item.unread).length;

  const visibleNotifications = notifications.filter((item) => {
    if (activeFilter === "Unread") return item.unread;
    if (activeFilter === "Jobs") return item.type === "job";
    if (activeFilter === "Applications") return item.type === "application";
    return true;
  });

  function markAllRead() {
    setNotifications((current) =>
      current.map((item) => ({ ...item, unread: false }))
    );
  }

  function markRead(id: number) {
    setNotifications((current) =>
      current.map((item) =>
        item.id === id ? { ...item, unread: false } : item
      )
    );
  }

  function removeNotification(id: number) {
    setNotifications((current) =>
      current.filter((item) => item.id !== id)
    );
  }

  return (
    <main className="notifications-page">
      <header className="notifications-header">
        <Link href="/dashboard" className="notifications-back">
          <ArrowLeft size={19} />
          <span>Dashboard</span>
        </Link>

        <Link href="/dashboard" className="notifications-brand">
          <span className="notifications-brand-mark">A</span>
          <span>abi<span>job</span></span>
        </Link>

        <Link href="/profile" className="notifications-profile-link">
          My profile <ChevronRight size={16} />
        </Link>
      </header>

      <section className="notifications-content">
        <div className="notifications-title-row">
          <div>
            <div className="notifications-eyebrow">
              <Bell size={15} /> YOUR ACTIVITY
            </div>
            <h1>Notifications</h1>
            <p>Stay updated on opportunities and activity on Abi Job.</p>
          </div>

          <div className="notifications-count">
            <strong>{unreadCount}</strong>
            <span>Unread</span>
          </div>
        </div>

        <div className="notifications-toolbar">
          <div className="notifications-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={
                  activeFilter === filter
                    ? "notifications-filter active"
                    : "notifications-filter"
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
                {filter === "Unread" && unreadCount > 0 && (
                  <span className="notifications-filter-count">
                    {unreadCount}
                  </span>
                )}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="notifications-mark-all"
            onClick={markAllRead}
            disabled={unreadCount === 0}
          >
            <Check size={16} /> Mark all as read
          </button>
        </div>

        <div className="notifications-layout">
          <section className="notifications-list-panel">
            <div className="notifications-list-heading">
              <div>
                <h2>Your updates</h2>
                <span>
                  {visibleNotifications.length} notification
                  {visibleNotifications.length === 1 ? "" : "s"}
                </span>
              </div>
              <Settings2 size={20} />
            </div>

            {visibleNotifications.length > 0 ? (
              <div className="notifications-list">
                {visibleNotifications.map((item) => (
                  <article
                    key={item.id}
                    className={`notification-item ${
                      item.unread ? "unread" : ""
                    }`}
                  >
                    <div className={`notification-icon ${item.type}`}>
                      <NotificationIcon type={item.type} />
                    </div>

                    <div className="notification-body">
                      <div className="notification-item-top">
                        <h3>{item.title}</h3>
                        {item.unread && (
                          <span className="notification-unread-dot" />
                        )}
                      </div>

                      <p>{item.message}</p>

                      <div className="notification-item-bottom">
                        <span className="notification-time">
                          <Clock3 size={13} /> {item.time}
                        </span>

                        <div className="notification-actions">
                          {item.unread && (
                            <button
                              type="button"
                              onClick={() => markRead(item.id)}
                              aria-label="Mark notification as read"
                              title="Mark as read"
                            >
                              <Check size={16} />
                            </button>
                          )}

                          <button
                            type="button"
                            onClick={() => removeNotification(item.id)}
                            aria-label="Delete notification"
                            title="Delete notification"
                          >
                            <Trash2 size={16} />
                          </button>

                          <Link href={item.link} aria-label="Open related page">
                            <ChevronRight size={17} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="notifications-empty">
                <div><Bell size={28} /></div>
                <h3>You&apos;re all caught up</h3>
                <p>There are no notifications in this category right now.</p>
                <button
                  type="button"
                  onClick={() => setActiveFilter("All")}
                >
                  View all notifications
                </button>
              </div>
            )}
          </section>

          <aside className="notifications-side">
            <div className="notifications-tip-card">
              <div className="notifications-tip-icon">
                <Sparkles size={23} />
              </div>
              <span className="notifications-side-label">MAKE THE MOST OF ABI JOB</span>
              <h2>Don&apos;t miss your next opportunity.</h2>
              <p>
                Keep your profile updated and check new vacancies regularly.
                The right opportunity could be closer than you think.
              </p>
              <Link href="/jobs">
                Explore jobs <ChevronRight size={17} />
              </Link>
            </div>

            <div className="notifications-preferences-card">
              <div className="notifications-preferences-icon">
                <Bell size={19} />
              </div>
              <div>
                <h3>Notification preferences</h3>
                <p>
                  Notification settings will be available when account
                  preferences are connected.
                </p>
              </div>
            </div>
          </aside>
        </div>

        <footer className="notifications-footer">
          <span>Abi Job</span>
          <span>Connecting Abia to opportunity.</span>
        </footer>
      </section>
    </main>
  );
}
