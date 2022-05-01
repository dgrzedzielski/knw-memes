import { Global } from '@emotion/react';

import { baseStyles } from './base';
import { propertiesStyles } from './properties';
import { stylesReset } from './reset';

export const GlobalStyles = () => (
  <>
    <Global styles={stylesReset} />
    <Global styles={propertiesStyles} />
    <Global styles={baseStyles} />
  </>
);
