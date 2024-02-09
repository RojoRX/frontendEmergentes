import { Grid, Typography, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';

const DetailsComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        padding:'1.2em',
        margin: '1em',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing(2),
        marginTop: theme.spacing(8),
        opacity: 0,
        animation: 'fadeIn 2s forwards',
        '@keyframes fadeIn': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }}
    >
      <Grid item xs={isMobile ? 12 : 4}>
        <Typography variant="h4">Mi Título</Typography>
        <Typography variant="body1">
          Este es mi texto. Ocupa el 40% del ancho de la pantalla en dispositivos de escritorio y el 100% en dispositivos móviles.
        </Typography>
      </Grid>
      <Grid item xs={isMobile ? 12 : 8}>
        <img src="https://www.realsimple.com/thmb/aJDUpqoFWZXJdFvU5XPkjjmAV7c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/impulse-buying-2000-d569eacebb0c48fa8766965d0352151c.jpg" alt="Mi Imagen" style={{ width: '100%' }} />
      </Grid>
    </Box>
  );
};

export default DetailsComponent;
