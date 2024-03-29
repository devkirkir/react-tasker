import { ProjectIconProps } from "./types";

const TriangleIcon = (props: ProjectIconProps) => {
  const { color = "#777" } = props;

  return (
    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.0701 0.570439C6.44928 -0.190146 7.55072 -0.190146 7.9299 0.570439L13.8928 12.5311C14.2305 13.2086 13.7295 14 12.9629 14H1.03715C0.270482 14 -0.230509 13.2086 0.10725 12.5311L6.0701 0.570439Z"
        fill={color}
      />
      <path
        d="M6.04943 4.94468C6.40984 4.12537 7.59013 4.12537 7.95053 4.94469L10.41 10.5358C10.7062 11.2091 10.2048 11.9607 9.45945 11.9607H4.54051C3.79519 11.9607 3.2938 11.2091 3.58996 10.5358L6.04943 4.94468Z"
        fill="var(--bg-color)"
      />
    </svg>
  );
};

export default TriangleIcon;
