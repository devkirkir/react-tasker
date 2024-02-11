import Triangle from "../../../../assets/icons/ProjectsIcons/Triangle.svg";
import Circle from "../../../../assets/icons/ProjectsIcons/Circle.svg";
import Star from "../../../../assets/icons/ProjectsIcons/Star.svg";
import Square from "../../../../assets/icons/ProjectsIcons/Square.svg";

export type TColors = "green" | "orange" | "blue" | "pink" | "purple";

export enum EIcons {
  TRIANGLE = "triangle",
  CIRCLE = "circle",
  STAR = "star",
  SQUARE = "square",
}

// export const ShapedIconsColors: TColors[] = ["green", "orange", "blue", "pink", "purple"];

export const ShapedIconsColors: Record<TColors, string> = {
  green: "#2a7de1",
  orange: "#bc822b",
  blue: "#2a7de1",
  pink: "#de4fa5",
  purple: "#7864f1",
};

export type TIcons = "triangle" | "circle" | "star" | "square";

export const ShapedIcons: Record<TIcons, JSX.Element> = {
  triangle: <Triangle />,
  circle: <Circle />,
  star: <Star />,
  square: <Square />,
};
