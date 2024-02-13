import { memo } from "react";

const PlusIcon = memo(() => {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 0.5C6.77614 0.5 7 0.723858 7 1L7 12C7 12.2761 6.77614 12.5 6.5 12.5C6.22386 12.5 6 12.2761 6 12L6 1C6 0.723858 6.22386 0.5 6.5 0.5Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.5 6.5C0.5 6.22386 0.723858 6 1 6H12C12.2761 6 12.5 6.22386 12.5 6.5C12.5 6.77614 12.2761 7 12 7H1C0.723858 7 0.5 6.77614 0.5 6.5Z"
        fill="black"
      />
    </svg>
  );
});

PlusIcon.displayName = "PlusIcon";

export default PlusIcon;
