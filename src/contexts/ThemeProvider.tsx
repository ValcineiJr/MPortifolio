import { useTheme } from '@/hooks/useTheme';
import React from 'react';
import { ThemeProvider } from 'styled-components';

function MyThemeProvider({ children }): JSX.Element {
  const { theme } = useTheme();

  const Provider: any = ThemeProvider;

  return (
    <Provider theme={theme}>
      <React.Fragment>{children} </React.Fragment>
    </Provider>
  );
}

export default MyThemeProvider;
