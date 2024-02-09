import { Box, Card, CardContent, CardMedia, Typography, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';

const CardsComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: (theme) => theme.palette.primary.main, // Asume que este es el color de fondo que estás usando
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing(2),
        marginTop: theme.spacing(8),
        padding: theme.spacing(2),
      }}
    >
      <Grid container justifyContent="center" spacing={2}>
        {[1, 2, 3].map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item}>
            <Card
              sx={{
                maxWidth: 345,
                m: 2,
                borderRadius: 2,
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease',
                opacity: 0,
                animation: 'fadeIn 2s forwards',
                '@keyframes fadeIn': {
                  '0%': { opacity: 0 },
                  '100%': { opacity: 1 },
                },
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random/345x140"
                alt={`Card ${item}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {`Card ${item}`}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia congue odio.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardsComponent;