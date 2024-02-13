import { ProjectIconProps } from "./types";

const SquareIcon = (props: ProjectIconProps) => {
  const { color = "#D9D9D9" } = props;

  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 2C0 0.89543 0.895431 0 2 0H12C13.1046 0 14 0.895431 14 2V12C14 13.1046 13.1046 14 12 14H2C0.89543 14 0 13.1046 0 12V2Z"
        fill={color}
      />
      <path
        d="M2.15387 4.15381C2.15387 3.04924 3.0493 2.15381 4.15387 2.15381H9.84618C10.9507 2.15381 11.8462 3.04924 11.8462 4.15381V9.84612C11.8462 10.9507 10.9507 11.8461 9.84618 11.8461H4.15387C3.0493 11.8461 2.15387 10.9507 2.15387 9.84612V4.15381Z"
        fill="#1E1E1E"
      />
    </svg>
  );
};

export default SquareIcon;
