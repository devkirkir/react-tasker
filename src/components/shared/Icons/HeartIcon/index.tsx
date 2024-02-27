import classNames from "classnames";
import classes from "./HeartIcon.module.css";

interface HeartIconProps {
  width: string;
  height: string;
  active?: boolean;
}

const HeartIcon = (props: HeartIconProps) => {
  const { width, height, active } = props;

  const activeClassName = classNames(classes.HeartIcon, {
    [classes.HeartIconActive]: active,
  });

  return (
    <svg
      width={width}
      height={height}
      className={activeClassName}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.1156 21.064L29.1223 21.0575L29.129 21.0509C31.6149 18.565 33 15.9817 33 13.3125C33 10.8201 32.274 8.74488 30.7142 7.22199C29.1588 5.70329 27.0539 5 24.5312 5C23.7681 5 23.0025 5.13257 22.2385 5.38725C21.4862 5.63801 20.7825 5.97767 20.1302 6.40668C19.5333 6.79923 19.0095 7.17424 18.5628 7.53163C18.3711 7.68497 18.1835 7.84248 18 8.00416C17.8165 7.84248 17.6289 7.68497 17.4372 7.53163C16.9905 7.17424 16.4667 6.79923 15.8698 6.40668C15.2175 5.97767 14.5138 5.63801 13.7615 5.38725C12.9975 5.13257 12.2319 5 11.4688 5C8.94609 5 6.84121 5.70329 5.28577 7.22199C3.72603 8.74488 3 10.8201 3 13.3125C3 14.1288 3.14336 14.9537 3.41784 15.783C3.67964 16.5739 3.98635 17.2751 4.34563 17.8739C4.68214 18.4347 5.06214 18.9792 5.48476 19.5075C5.88047 20.0022 6.19628 20.3775 6.41582 20.6033C6.58902 20.7815 6.75294 20.9404 6.89776 21.0607L16.6127 30.4332C16.9911 30.8078 17.4737 31 18 31C18.5261 31 19.0085 30.808 19.3869 30.4336L29.1156 21.064Z"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
};

export default HeartIcon;
