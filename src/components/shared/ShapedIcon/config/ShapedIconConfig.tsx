import Triangle from "../../../../assets/icons/ProjectsIcons/Triangle.svg";
import Circle from "../../../../assets/icons/ProjectsIcons/Circle.svg";
import Star from "../../../../assets/icons/ProjectsIcons/Star.svg";
import Square from "../../../../assets/icons/ProjectsIcons/Square.svg";

export enum EIcons {
  TRIANGLE = "triangle",
  CIRCLE = "circle",
  STAR = "star",
  SQUARE = "square",
}

export const ShapedIcons: Record<EIcons, JSX.Element> = {
  [EIcons.TRIANGLE]: <Triangle />,
  [EIcons.CIRCLE]: <Circle />,
  [EIcons.STAR]: <Star />,
  [EIcons.SQUARE]: <Square />,
};
