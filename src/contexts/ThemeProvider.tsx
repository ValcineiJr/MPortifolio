import { useTheme } from '@/hooks/useTheme';
import { ThemeProvider } from 'styled-components';

function MyThemeProvider({ children }) {
  const { theme } = useTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default MyThemeProvider;
