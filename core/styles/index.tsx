import { Global } from '@emotion/react';

import { darkTheme } from 'core/styles/themes';
import { lightTheme } from 'core/styles/themes/light';

import { baseStyles } from './base';
import { propertiesStyles } from './properties';
import { stylesReset } from './reset';

export const GlobalStyles = () => (
  <>
    <Global styles={stylesReset} />
    <Global styles={propertiesStyles} />
    <Global styles={baseStyles} />
    <Global styles={darkTheme} />
    <Global styles={lightTheme} />
  </>
);
