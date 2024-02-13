import TriangleIcon from "components/shared/Icons/ProjectIcons/TriangleIcon";
import CircleIcon from "components/shared/Icons/ProjectIcons/CircleIcon";
import StarIcon from "components/shared/Icons/ProjectIcons/StarIcon";
import SquareIcon from "components/shared/Icons/ProjectIcons/SquareIcon";

export type ShapedIcons = "triangle" | "circle" | "star" | "square";

export const ShapedIconsComponents: Record<ShapedIcons, JSX.Element> = {
  triangle: <TriangleIcon />,
  circle: <CircleIcon />,
  star: <StarIcon />,
  square: <SquareIcon />,
};
