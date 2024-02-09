// src/components/SolidTemplate/index.jsx
import Head from 'next/head';
import { Container, Typography, Button, Box } from '@mui/material';
import Navbar from '@/components/navbar';

const SolidTemplate = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Navbar />
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.common.white,
          padding: (theme) => theme.spacing(8, 0, 6),
          marginTop: (theme) => theme.spacing(8),
        }}
      >
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" gutterBottom>
            Welcome to My App
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            Una Single-Page desarrollada para la clase magistral de Tecnologias Emergentes
          </Typography>
          <Box
            sx={{
              marginTop: (theme) => theme.spacing(4),
              display: 'flex',
              justifyContent: 'center',
              gap: (theme) => theme.spacing(2),
            }}
          >
            <Button variant="contained" color="secondary" href="/auth">
              Login
            </Button>
            <Button variant="contained" color="secondary" href="/products">
              Ver Productos
            </Button>
            <Button variant="outlined" color="secondary" href="/register">
              Register
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SolidTemplate;
