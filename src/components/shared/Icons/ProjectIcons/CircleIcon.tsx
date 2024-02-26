import { ProjectIconProps } from "./types";

const CircleIcon = (props: ProjectIconProps) => {
  const { color = "#777" } = props;

  return (
    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7Z"
        fill={color}
      />
      <path
        d="M11.8462 6.99996C11.8462 9.67642 9.67648 11.8461 7.00002 11.8461C4.32357 11.8461 2.15387 9.67642 2.15387 6.99996C2.15387 4.32351 4.32357 2.15381 7.00002 2.15381C9.67648 2.15381 11.8462 4.32351 11.8462 6.99996Z"
        fill="var(--bg-color)"
      />
    </svg>
  );
};

export default CircleIcon;
