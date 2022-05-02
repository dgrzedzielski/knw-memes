import * as React from 'react';
import { addDecorator } from '@storybook/react';
import { GlobalStyles } from '../core/styles';
import { addons } from '@storybook/addons';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';

const channel = addons.getChannel();

function ThemeWrapper(props) {
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
      {props.children}
    </>
  );
}


export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(story => <ThemeWrapper>
  <GlobalStyles />
  {story()}
</ThemeWrapper>);
