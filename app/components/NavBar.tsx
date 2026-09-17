"use client";

import { useState, useEffect, useRef } from "react";
import Logo from "./Logo";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className="nav" id="top" ref={drawerRef}>
      <div className="wrap nav-in">
        {/* Logo */}
        <a className="mark" href="#top" onClick={close}>
          <Logo height={28} />
          <span className="mark-wordmark">Ravelyn</span>
        </a>

        {/* Desktop links */}
        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#guards">Guards</a>
          <a href="#pricing">Pricing</a>
          <a href="#ownership">What stays yours</a>
          <a href="#profile" className="btn btn-lg" onClick={close}>
            Get a profile
          </a>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="nav-hamburger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`ham-bar${open ? " open" : ""}`}></span>
          <span className={`ham-bar${open ? " open" : ""}`}></span>
          <span className={`ham-bar${open ? " open" : ""}`}></span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        className={`mobile-drawer${open ? " mobile-drawer--open" : ""}`}
        aria-hidden={!open}
      >
        <div className="mobile-drawer-inner">
          <a href="#how" className="mobile-link" onClick={close}>
            How it works
          </a>
          <a href="#guards" className="mobile-link" onClick={close}>
            Guards
          </a>
          <a href="#pricing" className="mobile-link" onClick={close}>
            Pricing
          </a>
          <a href="#ownership" className="mobile-link" onClick={close}>
            What stays yours
          </a>
          <a href="#fit" className="mobile-link" onClick={close}>
            Who it&apos;s for
          </a>
          <a href="#faq" className="mobile-link" onClick={close}>
            FAQ
          </a>
          <div className="mobile-drawer-cta">
            <a href="#profile" className="btn btn-lg" onClick={close}>
              Get a profile
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
