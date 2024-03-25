import TriangleIcon from "components/shared/Icons/ProjectIcons/TriangleIcon";
import CircleIcon from "components/shared/Icons/ProjectIcons/CircleIcon";
import StarIcon from "components/shared/Icons/ProjectIcons/StarIcon";
import SquareIcon from "components/shared/Icons/ProjectIcons/SquareIcon";
import type { Colors } from "types";

export type ShapedIcons = "triangle" | "circle" | "star" | "square";

export const ShapedIconsComponents: Record<ShapedIcons, JSX.Element> = {
  triangle: <TriangleIcon />,
  circle: <CircleIcon />,
  star: <StarIcon />,
  square: <SquareIcon />,
};

export const ShapeColors: Colors[] = ["#bc822b", "#7864f1", "#de4fa5", "#55b03f", "#2a7de1"];
