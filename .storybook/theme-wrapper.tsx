import { addons } from "@storybook/addons";
import * as React from "react";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";

const channel = addons.getChannel();

interface ThemeWrapperProps {
  children: React.ReactNode;
}

export const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const updateTheme = React.useCallback(
    (isDark) => {
      document.body.dataset.theme = isDark ? 'dark' : 'light';
    },
    [],
  );

  React.useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, updateTheme);
    return () => channel.off(DARK_MODE_EVENT_NAME, updateTheme);
  }, [channel, updateTheme]);


  return (
    <>
      {children}
    </>
  );
}
