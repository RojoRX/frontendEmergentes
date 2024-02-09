import { Box, Grid, Typography, Link } from '@mui/material';

const FooterComponent = () => {
  return (
    <Box
      sx={{
        mt: 4,
        bgcolor: '#333',
        color: '#fff',
        py: 4,
        px: { xs: 2, sm: 4 },
        padding: '1em',
        textAlign:'center'
      }}
    >
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom>
            Información de Contacto
          </Typography>
          <Typography variant="body1">Dirección: 123 Calle Principal, Ciudad</Typography>
          <Typography variant="body1">Teléfono: +123 456 789</Typography>
          <Typography variant="body1">Correo Electrónico: info@example.com</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom>
            Enlaces Útiles
          </Typography>
          <Link href="#" color="inherit" display="block">
            Acerca de Nosotros
          </Link>
          <Link href="#" color="inherit" display="block">
            Términos y Condiciones
          </Link>
          <Link href="#" color="inherit" display="block">
            Política de Privacidad
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom>
            Síguenos
          </Typography>
          <Link href="#" color="inherit" display="block">
            Facebook
          </Link>
          <Link href="#" color="inherit" display="block">
            Twitter
          </Link>
          <Link href="#" color="inherit" display="block">
            Instagram
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FooterComponent;
