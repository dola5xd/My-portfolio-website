import { HTMLMotionProps, Variants } from "motion/react";
import { li as MotionLi } from "motion/react-client";
import { IconType } from "react-icons";

interface PropsType extends HTMLMotionProps<"li"> {
  link: {
    name: string;
    href: string;
    icon?: IconType;
  };
}

const listVariants: Variants = {
  init: { opacity: 0 },
  reveal: { opacity: 1 },
};

function ListItem(props: PropsType) {
  const isHashLink = props.link.href.startsWith("#");
  const isExternal = /^https?:\/\//.test(props.link.href);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHashLink) {
      e.preventDefault();
      const targetEl = document.getElementById(props.link.href.substring(1));
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <MotionLi variants={listVariants} {...props}>
      <a
        href={props.link.href}
        {...(isExternal
          ? {
              target: "_blank",
              rel: "noopener noreferrer",
              title: props.link.name,
            }
          : {})}
        onClick={handleClick}
        className="flex items-center gap-2"
      >
        {props.link.icon ? <props.link.icon /> : <span>{props.link.name}</span>}
      </a>
    </MotionLi>
  );
}

export default ListItem;
