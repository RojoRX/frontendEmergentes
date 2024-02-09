import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Grid, Paper, Link } from '@mui/material';
import { useRouter } from 'next/router';
import Navbar from '@/components/navbar';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerError, setRegisterError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Realizar el registro
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users`, { username, email, password }); // Utiliza la URL de la API definida en la variable de entorno
      // Redirigir al usuario al componente de inicio de sesión con los datos en la URL
      router.push(`/auth?email=${email}&password=${password}`);
    } catch (error) {
      console.error('Error de registro:', error);
      setRegisterError('Error al registrarse. Por favor, verifique los datos e inténtelo de nuevo.');
    }
  };
  
  return (
    <>
      <Navbar></Navbar>
      <Paper variant="outlined" sx={{ p: 4 , m:8 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Registrarse
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Nombre de usuario"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                label="Correo electrónico"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                label="Contraseña"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Registrarse
              </Button>
            </Grid>
            {registerError && (
              <Grid item xs={12}>
                <Typography variant="body2" align="center" mt={2} color="error">
                  {registerError}
                </Typography>
              </Grid>
            )}
          </Grid>
        </form>
        <Typography variant="body2" align="center" mt={2}>
          ¿Ya tienes una cuenta?{' '}
          <Link href="/auth" color="primary">
            Iniciar Sesión
          </Link>
        </Typography>
      </Paper>
    </>
  );
};

export default RegisterForm;
