import type { ComponentProps } from "../../../types/index";
import type { ElementType } from "react";
import "./styles.scss";

interface ContainerProps extends ComponentProps {
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: "none" | "sm" | "md" | "lg";
  as?: ElementType;
}

export default function Container({
  children,
  className = "",
  maxWidth = "xl",
  padding = "md",
  as: Component = "div",
  ...props
}: ContainerProps) {
  const classes = [
    "container",
    `container--${maxWidth}`,
    `container--padding-${padding}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
