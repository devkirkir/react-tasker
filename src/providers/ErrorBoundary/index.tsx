import React, { ErrorInfo, PropsWithChildren } from "react";

import Logo from "components/shared/Logo";

import { ThemeVariants } from "hooks/useTheme";

import "./ErrorBoundary.css";

interface ErrorBoundaryState {
  hasError: boolean;
  theme: ThemeVariants;
}

class ErrorBoundary extends React.Component<PropsWithChildren, ErrorBoundaryState> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = {
      hasError: false,
      theme: localStorage.getItem("theme")
        ? (localStorage.getItem("theme") as ThemeVariants)
        : ThemeVariants.DARK,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { hasError, theme } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className={`App ${theme} error-boundary`}>
          <div className="content">
            <Logo />

            <span className="message">Something went wrong. An error message has been sent.</span>
            <span>Reload the page, please.</span>
          </div>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
