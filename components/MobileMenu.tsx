"use client";

import { useEffect, useState } from "react";
import { DelegationsModal } from "@/components/staking/DelegationsModal";
import { useModal as useConnectKitModal } from "connectkit";

type MobileMenuLink = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  links?: MobileMenuLink[];
  variant?: "links" | "actions";
};

export default function MobileMenu({ isOpen, onClose, links = [], variant = "links" }: MobileMenuProps) {
  const [animateIn, setAnimateIn] = useState(false);
  const [showDelegations, setShowDelegations] = useState(false);
  const { setOpen: setConnectModalOpen } = useConnectKitModal();

  useEffect(() => {
    if (!isOpen) return;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    const id = requestAnimationFrame(() => setAnimateIn(true));
    return () => {
      cancelAnimationFrame(id);
      setAnimateIn(false);
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="mnav">
        <button aria-label="Close menu backdrop" className="mnav-backdrop" onClick={onClose} />
        <div className={`mnav-panel ${animateIn ? "mnav-enter-active" : "mnav-enter"}`}>
          {variant === "links" ? (
            <>
              <img src="/assets/cup_mobile.png" alt="Somnia Staking Cup" className="mnav-logo" />
              <nav className="mnav-links">
                {links.map((link) => (
                  <a key={link.href} className="mnav-link" href={link.href} onClick={onClose}>
                    {link.label}
                  </a>
                ))}
              </nav>
              <button aria-label="Close menu" className="mnav-close" onClick={onClose}>✕</button>
            </>
          ) : (
            <>
              {/* Trophy/logo */}
              <div className="flex items-center justify-center pt-6">
                <img src="/assets/OBJECTS.png" alt="Somnia Staking Cup" style={{ width: 96, height: "auto" }} />
              </div>
              {/* Action buttons (pixel-perfect images) */}
              <div className="mt-8 flex flex-col items-center gap-5">
                <button
                  type="button"
                  aria-label="My Delegations"
                  onClick={() => {
                    setShowDelegations(true);
                    onClose();
                  }}
                  className="inline-block"
                >
                  <img src="/assets/My_Delegeations.png" alt="My Delegations" style={{ width: 280, height: "auto" }} />
                </button>
                <button
                  type="button"
                  aria-label="Connect Wallet"
                  onClick={() => {
                    setConnectModalOpen(true);
                    onClose();
                  }}
                  className="inline-block"
                >
                  <img src="/assets/Button.png" alt="Connect Wallet" style={{ width: 280, height: "auto" }} />
                </button>
              </div>
              {/* Big round close button at bottom */}
              <button
                aria-label="Close menu"
                onClick={onClose}
                style={{ width: 84, height: 84 }}
                className="absolute left-1/2 bottom-8 -translate-x-1/2 rounded-full bg-[#0a6f00] text-white text-3xl leading-none shadow-[0_4px_0_#003b00] active:translate-y-[1px]"
              >
                ×
              </button>
            </>
          )}
        </div>
      </div>
      {/* Delegations modal mounted at root to open from menu */}
      <DelegationsModal isOpen={showDelegations} onOpenChange={setShowDelegations} />
    </>
  );
}


