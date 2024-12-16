import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';

// ----------------------------------------------------------------------

type Props = {
  title?: string;
  image?: string;
  children: React.ReactNode;
};

export default function AuthClassicLayout({ children, image, title }: Props) {
  const theme = useTheme();

  const renderContent = (
    <Stack
      sx={{
        bgcolor: 'background.paper',
        borderRadius: 2,
        width: '700px',
        height: "50%",
        mx: 'auto',
        maxWidth: '100%',
        px: { xs: 2, md: 8 },
        pt: 6,
        pb: 6,
      }}
    >
      {children}
    </Stack>
  );

  return (
    <Stack
      component="main"
      direction="row"
      sx={{
        minHeight: '100vh',
        backgroundImage: `url('/assets/images/auth/login-bg.jpg') `,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        boxShadow: 'inset 0 0 0 2000px rgba(0, 60, 72, 0.7)',
        display: 'flex',
        judstifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {renderContent}
    </Stack>
  );
}
