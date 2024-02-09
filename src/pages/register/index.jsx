import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Grid, Paper, Link } from '@mui/material';
import { useRouter } from 'next/router';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // Realizar el registro
        await axios.post('http://localhost:3000/users', { username, email, password });
  
        // Redirigir al usuario al componente de inicio de sesión con los datos en la URL
        router.push(`/auth?email=${email}&password=${password}`);
      } catch (error) {
        console.error('Error de registro:', error);
      }
    };
  
  return (
    <Paper variant="outlined" sx={{ p: 4 }}>
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
        </Grid>
      </form>
      <Typography variant="body2" align="center" mt={2}>
        ¿Ya tienes una cuenta?{' '}
        <Link href="/auth" color="primary">
          Iniciar Sesion
        </Link>
      </Typography>
    </Paper>
  );
};

export default RegisterForm;
