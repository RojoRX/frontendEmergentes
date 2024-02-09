import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Grid, Paper, Link } from '@mui/material';
import { useRouter } from 'next/router';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', { email, password });
      localStorage.setItem('token', response.data.access_token); // Cambia response.data.token a response.data.access_token
      console.log(localStorage.getItem('token'));
      router.push('/');
      setLoginSuccess(true);
      setLoginError('');
    } catch (error) {
      setLoginError('Error al iniciar sesión. Verifique sus credenciales.');
      setLoginSuccess(false);
    }
  };

  return (
    <Paper variant="outlined" sx={{ p: 4 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Iniciar Sesión
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
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
              Iniciar Sesión
            </Button>
          </Grid>
          <Grid item xs={12}>
            {loginError && <Typography variant="body2" color="error">{loginError}</Typography>}
            {loginSuccess && <Typography variant="body2" color="success">Inicio de sesión exitoso</Typography>}
          </Grid>
        </Grid>
      </form>
      <Typography variant="body2" align="center" mt={2}>
        ¿No tienes una cuenta?{' '}
        <Link href="/register" color="primary">
          Regístrate
        </Link>
      </Typography>
    </Paper>
  );
};

export default LoginForm;
