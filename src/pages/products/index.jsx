import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Table, TableBody, TableContainer, TableHead, TableRow, Button, Paper, Typography, Dialog, 
  DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Navbar from '@/components/navbar';
import { NoSsr } from '@mui/material';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editProductId, setEditProductId] = useState(null);
  const [editProductName, setEditProductName] = useState('');
  const [editProductDescription, setEditProductDescription] = useState('');
  const [editProductPrice, setEditProductPrice] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          // No hay token, redirigir al usuario a la página de inicio de sesión
          // O mostrar un mensaje de error
          return;
        }

        const response = await axios.get('http://localhost:3000/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDialogOpen = (productId, productName, productDescription, productPrice) => {
    setOpenDialog(true);
    setEditProductId(productId);
    setEditProductName(productName || '');
    setEditProductDescription(productDescription || '');
    setEditProductPrice(productPrice || '');
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleEdit = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        // No hay token, redirigir al usuario a la página de inicio de sesión
        // O mostrar un mensaje de error
        return;
      }
  
      if (editProductId) {
        // Editar producto existente
        await axios.put(`http://localhost:3000/products/${editProductId}`, {
          name: editProductName,
          description: editProductDescription,
          price: editProductPrice,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        // Crear nuevo producto
        await axios.post(`http://localhost:3000/products`, {
          name: editProductName,
          description: editProductDescription,
          price: editProductPrice,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      // Actualizar la lista de productos
      const response = await axios.get('http://localhost:3000/products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data);
      setOpenDialog(false);
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };
  
  const handleDelete = async (productId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        // No hay token, redirigir al usuario a la página de inicio de sesión
        // O mostrar un mensaje de error
        return;
      }
      console.log(token)
      await axios.delete(`http://localhost:3000/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      // Actualizar la lista de productos después de eliminar
      const response = await axios.get('http://localhost:3000/products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <NoSsr>
    <div>
    <Navbar></Navbar>
    <Grid container spacing={2} sx={{marginRight:"2em"}}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom >
          Lista de Productos
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ margin: '0 auto', maxWidth: 800 }}>
        <Button onClick={() => handleDialogOpen()} variant="contained" color="primary" sx={{ marginBottom: 2 }}>
          Nuevo Producto
        </Button>
        <TableContainer component={Paper} sx={{ margin: '20px auto' }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell>Nombre</StyledTableCell>
                <StyledTableCell>Descripción</StyledTableCell>
                <StyledTableCell>Precio</StyledTableCell>
                <StyledTableCell>Eliminado</StyledTableCell>
                <StyledTableCell>Acciones</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.deleted ? 'Sí' : 'No'}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleDialogOpen(row.id, row.name, row.description, row.price)} variant="contained" color="primary" sx={{ marginRight: 1 }}>
                      Editar
                    </Button>
                    <Button onClick={() => handleDelete(row.id)} variant="contained" color="error">
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>{editProductId ? 'Editar Producto' : 'Nuevo Producto'}</DialogTitle>
        <DialogContent>
          <TextField
            margin="normal"
            label="Nombre"
            fullWidth
            value={editProductName}
            onChange={(e) => setEditProductName(e.target.value)}
          />
          <TextField
            margin="normal"
            label="Descripción"
            fullWidth
            value={editProductDescription}
            onChange={(e) => setEditProductDescription(e.target.value)}
          />
          <TextField
            margin="normal"
            label="Precio"
            fullWidth
            value={editProductPrice}
            onChange={(e) => setEditProductPrice(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleEdit} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </Grid></div></NoSsr>
  );
};

export default ProductsPage;
