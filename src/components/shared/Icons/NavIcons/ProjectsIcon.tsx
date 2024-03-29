import { memo } from "react";

const ProjectsIcon = memo(() => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_39_7)">
        <path
          d="M10.9524 1.42859H6.19046H3.33332C2.28135 1.42859 1.42856 2.28138 1.42856 3.33335V17.1429C1.42856 18.1949 2.28135 19.0476 3.33332 19.0476H17.1428C18.1948 19.0476 19.0476 18.1949 19.0476 17.1429V9.04764M5.53723 9.04764L9.6478 13.0109C10.0778 13.4254 10.779 13.3464 11.1059 12.8464L18.5714 1.42859"
          stroke="#ABABAB"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_39_7">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});

ProjectsIcon.displayName = "ProjectsIcon";

export default ProjectsIcon;
