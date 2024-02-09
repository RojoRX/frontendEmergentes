import { Grid, Typography, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';
import { useEffect, useState } from 'react';

const OtherDetailsComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Esta función se ejecutará cuando el componente se monte en la pantalla
    // Cambia shouldAnimate a true después de un breve retraso para permitir que la página se cargue primero
    const timeout = setTimeout(() => {
      setShouldAnimate(true);
    }, 1000); // Cambia este valor al tiempo que prefieras

    // Limpia el timeout cuando el componente se desmonta
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        padding:'1.2em',
        margin: '1em',
        alignItems: 'start',
        justifyContent: 'center',
        gap: theme.spacing(2),
        marginTop: theme.spacing(8),
        opacity: shouldAnimate ? 0 : 1, // Configura la opacidad inicial basada en shouldAnimate
        animation: shouldAnimate ? 'slideIn 1s forwards' : 'none', // Aplica la animación solo si shouldAnimate es true
        '@keyframes slideIn': {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      }}
    >
      <Grid item xs={isMobile ? 12 : 8}>
        <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/07/aisle.jpg?quality=82&strip=1" alt="Mi Imagen" style={{ width: '100%' }} />
      </Grid>
      <Grid item xs={isMobile ? 12 : 4}>
        <Typography variant="h4">Mi Título</Typography>
        <Typography variant="body1">
          Este es mi texto. Ocupa el 40% del ancho de la pantalla en dispositivos de escritorio y el 100% en dispositivos móviles.
        </Typography>
      </Grid>
    </Box>
  );
};

export default OtherDetailsComponent;
