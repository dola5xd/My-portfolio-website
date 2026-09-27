"use client";

import { useSyncExternalStore } from "react";

export type DeviceTier = "low" | "mid" | "high";

export interface DeviceTierInfo {
  tier: DeviceTier;
  isMobile: boolean;
  isTablet: boolean;
  isTouch: boolean;
  canHover: boolean;
  supportsGlass: boolean;
  cores?: number;
  memory?: number;
}

const DEFAULT_SERVER_TIER: DeviceTierInfo = {
  tier: "mid",
  isMobile: false,
  isTablet: false,
  isTouch: false,
  canHover: true,
  supportsGlass: true,
};

function getDeviceTierSnapshot(): DeviceTierInfo {
  if (typeof window === "undefined") {
    return DEFAULT_SERVER_TIER;
  }

  const isSmallScreen = window.matchMedia("(max-width: 639px)").matches;
  const isTabletScreen = window.matchMedia(
    "(min-width: 640px) and (max-width: 1023px)",
  ).matches;
  const canHover = window.matchMedia(
    "(hover: hover) and (pointer: fine)",
  ).matches;
  const isTouch = window.matchMedia("(pointer: coarse)").matches || !canHover;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  // Hardware capabilities (Navigator API)
  const nav =
    typeof navigator !== "undefined"
      ? (navigator as Navigator & {
          hardwareConcurrency?: number;
          deviceMemory?: number;
        })
      : null;
  const cores = nav?.hardwareConcurrency;
  const memory = nav?.deviceMemory;

  // Determine performance tier:
  // Low tier: only truly constrained hardware (<= 2GB RAM, <= 2 cores, or prefers-reduced-motion)
  if (
    prefersReducedMotion ||
    (memory !== undefined && memory <= 2) ||
    (cores !== undefined && cores <= 2)
  ) {
    return {
      tier: "low",
      isMobile: isSmallScreen,
      isTablet: isTabletScreen,
      isTouch,
      canHover,
      supportsGlass: false,
      cores,
      memory,
    };
  }

  // Mid tier: budget devices / mid-range hardware
  if (
    (cores !== undefined && cores <= 4 && isTouch && !canHover) ||
    (memory !== undefined && memory <= 4)
  ) {
    return {
      tier: "mid",
      isMobile: isSmallScreen,
      isTablet: isTabletScreen,
      isTouch,
      canHover,
      supportsGlass: true,
      cores,
      memory,
    };
  }

  // High tier: Flagship smartphones (iPhone 17, iPhone 16 Pro, Galaxy S), tablets, and modern PCs
  return {
    tier: "high",
    isMobile: isSmallScreen,
    isTablet: isTabletScreen,
    isTouch,
    canHover,
    supportsGlass: true,
    cores,
    memory,
  };
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  const mqls = [
    window.matchMedia("(max-width: 639px)"),
    window.matchMedia("(min-width: 640px) and (max-width: 1023px)"),
    window.matchMedia("(hover: hover) and (pointer: fine)"),
    window.matchMedia("(pointer: coarse)"),
    window.matchMedia("(prefers-reduced-motion: reduce)"),
  ];

  mqls.forEach((mql) => {
    if (typeof mql?.addEventListener === "function") {
      mql.addEventListener("change", callback);
    } else if (mql && "addListener" in mql && typeof (mql as unknown as { addListener: (cb: () => void) => void }).addListener === "function") {
      (mql as unknown as { addListener: (cb: () => void) => void }).addListener(callback);
    }
  });
  window.addEventListener("resize", callback, { passive: true });

  return () => {
    mqls.forEach((mql) => {
      if (typeof mql?.removeEventListener === "function") {
        mql.removeEventListener("change", callback);
      } else if (mql && "removeListener" in mql && typeof (mql as unknown as { removeListener: (cb: () => void) => void }).removeListener === "function") {
        (mql as unknown as { removeListener: (cb: () => void) => void }).removeListener(callback);
      }
    });
    window.removeEventListener("resize", callback);
  };
}

let cachedSnapshot: DeviceTierInfo | null = null;
let lastResultJson = "";

function getStableSnapshot(): DeviceTierInfo {
  const current = getDeviceTierSnapshot();
  const json = JSON.stringify(current);
  if (json !== lastResultJson) {
    lastResultJson = json;
    cachedSnapshot = current;
  }
  return cachedSnapshot || current;
}

export function useDeviceTier(): DeviceTierInfo {
  return useSyncExternalStore(
    subscribe,
    getStableSnapshot,
    () => DEFAULT_SERVER_TIER,
  );
}
