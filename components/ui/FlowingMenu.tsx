"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { useDeviceTier } from "../../hooks/useDeviceTier";

export interface MenuItemData {
  link: string;
  text: string;
  image: string;
}

export interface FlowingMenuProps {
  items?: MenuItemData[];
  speed?: number;
  textColor?: string;
  bgColor?: string;
  marqueeBgColor?: string;
  marqueeTextColor?: string;
  borderColor?: string;
}

interface MenuItemProps extends MenuItemData {
  speed: number;
  textColor: string;
  marqueeBgColor: string;
  marqueeTextColor: string;
  borderColor: string;
  isFirst: boolean;
  isActive: boolean;
  onToggleActive: () => void;
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({
  items = [],
  speed = 15,
  textColor = "#fff",
  bgColor = "#120F17",
  marqueeBgColor = "#fff",
  marqueeTextColor = "#120F17",
  borderColor = "#fff",
}) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <div
      className="w-full overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <nav className="flex flex-col w-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            {...item}
            speed={speed}
            textColor={textColor}
            marqueeBgColor={marqueeBgColor}
            marqueeTextColor={marqueeTextColor}
            borderColor={borderColor}
            isFirst={idx === 0}
            isActive={activeIdx === idx}
            onToggleActive={() =>
              setActiveIdx((prev) => (prev === idx ? null : idx))
            }
          />
        ))}
      </nav>
    </div>
  );
};

const ANIMATION_DEFAULTS = { duration: 0.6, ease: "expo" };

const MenuItem: React.FC<MenuItemProps> = ({
  link,
  text,
  image,
  speed,
  textColor,
  marqueeBgColor,
  marqueeTextColor,
  borderColor,
  isFirst,
  isActive,
  onToggleActive,
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const [repetitions, setRepetitions] = useState(4);
  const lastTapRef = useRef<number>(0);

  const findClosestEdge = (
    mouseX: number,
    mouseY: number,
    width: number,
    height: number,
  ): "top" | "bottom" => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist =
      Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const showMarquee = useCallback((from: "top" | "bottom" = "bottom") => {
    if (!marqueeRef.current || !marqueeInnerRef.current) return;
    gsap
      .timeline({ defaults: ANIMATION_DEFAULTS })
      .set(marqueeRef.current, { y: from === "top" ? "-101%" : "101%" }, 0)
      .set(marqueeInnerRef.current, { y: from === "top" ? "101%" : "-101%" }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" }, 0);
  }, []);

  const hideMarquee = useCallback((to: "top" | "bottom" = "bottom") => {
    if (!marqueeRef.current || !marqueeInnerRef.current) return;
    gsap
      .timeline({ defaults: ANIMATION_DEFAULTS })
      .to(marqueeRef.current, { y: to === "top" ? "-101%" : "101%" }, 0)
      .to(marqueeInnerRef.current, { y: to === "top" ? "101%" : "-101%" }, 0);
  }, []);

  useEffect(() => {
    if (isActive) {
      showMarquee("bottom");
    } else {
      hideMarquee("bottom");
    }
  }, [isActive, showMarquee, hideMarquee]);

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!marqueeInnerRef.current) return;
      const marqueeContent = marqueeInnerRef.current.querySelector(
        ".marquee-part",
      ) as HTMLElement;
      if (!marqueeContent) return;
      const contentWidth = marqueeContent.offsetWidth;
      const viewportWidth = window.innerWidth;
      const needed = Math.ceil(viewportWidth / contentWidth) + 2;
      setRepetitions(Math.max(4, needed));
    };

    calculateRepetitions();
    window.addEventListener("resize", calculateRepetitions);
    return () => window.removeEventListener("resize", calculateRepetitions);
  }, [text, image]);

  useEffect(() => {
    const setupMarquee = () => {
      if (!marqueeInnerRef.current) return;
      const marqueeContent = marqueeInnerRef.current.querySelector(
        ".marquee-part",
      ) as HTMLElement;
      if (!marqueeContent) return;
      const contentWidth = marqueeContent.offsetWidth;
      if (contentWidth === 0) return;

      if (animationRef.current) {
        animationRef.current.kill();
      }

      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -contentWidth,
        duration: speed,
        ease: "none",
        repeat: -1,
      });
    };

    const timer = setTimeout(setupMarquee, 50);
    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [text, image, repetitions, speed]);

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (isActive) return;
    if (!itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height,
    );
    showMarquee(edge);
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (isActive) return;
    if (!itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height,
    );
    hideMarquee(edge);
  };

  const { canHover } = useDeviceTier();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const now = Date.now();
    const DOUBLE_CLICK_DELAY = 350;

    // Both desktop and mobile: Double-click / double-tap opens the project demo!
    if (now - lastTapRef.current < DOUBLE_CLICK_DELAY || (!canHover && isActive)) {
      lastTapRef.current = 0;
      if (link && link !== "#") {
        window.open(link, "_blank", "noopener,noreferrer");
      }
      return;
    }

    lastTapRef.current = now;

    // On touch devices without hover, tap toggles preview marquee
    if (!canHover) {
      onToggleActive();
    }
  };

  const handleDoubleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (link && link !== "#") {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className="w-full h-18 sm:h-20 md:h-24 relative overflow-hidden text-center group flex items-center justify-center shrink-0"
      ref={itemRef}
      style={{ borderTop: isFirst ? "none" : `1px solid ${borderColor}` }}
    >
      <a
        className="flex items-center justify-center w-full h-full relative cursor-pointer uppercase no-underline font-extrabold text-base sm:text-2xl md:text-3xl lg:text-4xl tracking-tight transition-colors duration-200 px-3 sm:px-4 select-none"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color: textColor }}
      >
        {text}
      </a>
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none translate-y-[101%]"
        ref={marqueeRef}
        style={{ backgroundColor: marqueeBgColor }}
      >
        <div className="h-full w-fit flex items-center" ref={marqueeInnerRef}>
          {[...Array(repetitions)].map((_, idx) => (
            <div
              className="marquee-part flex items-center shrink-0"
              key={idx}
              style={{ color: marqueeTextColor }}
            >
              <span className="whitespace-nowrap uppercase font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight leading-none px-4 md:px-6">
                {text}
              </span>
              <div
                className="w-36 h-13 sm:w-44 sm:h-15 md:w-56 md:h-18 my-2 mx-3 md:mx-5 rounded bg-cover bg-top shadow-2xl border border-white/30 shrink-0"
                style={{ backgroundImage: `url(${image})` }}
              />
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono tracking-normal uppercase bg-white/20 text-white/95 shrink-0 mx-2 border border-white/25">
                <span>Double-click to open ↗</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;
