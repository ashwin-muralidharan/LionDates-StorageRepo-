import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Card, CardActionArea, CardContent, CardMedia, Typography, Container } from '@mui/material';
import Header from '../components/Header';

// Import images from assets
import jamImage from '../assets/products/jam.jpg';
import datesImage from '../assets/products/dates.jpg';
import almondsImage from '../assets/products/almonds.jpg';
import nutsImage from '../assets/products/nuts.jpg';
import honeyImage from '../assets/products/honey.jpg';
import medjoolImage from '../assets/products/medjool-dates.jpg';
import datebarsImage from '../assets/products/date-bars.jpg';
import nutImage from '../assets/products/nut.jpg';

const products = [
  { id: 1, name: 'Dates Jam', image: jamImage },
  { id: 2, name: 'Premium Dates', image: datesImage },
  { id: 3, name: 'Almonds in Honey', image: almondsImage },
  { id: 4, name: 'Date Syrup Cashew', image: nutsImage },
  { id: 5, name: 'Amla in Honey', image: honeyImage },
  { id: 6, name: 'Medjool Dates', image: medjoolImage },
  { id: 7, name: 'Date Nut Bars', image: datebarsImage },
  { id: 8, name: 'Honey Cashew', image: nutImage },
];

const DashboardWarehouse = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: '#f8fafc',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: 4
    }}>
      <Header title="Warehouse Dashboard" />
      <Container maxWidth="xl" sx={{ 
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Typography variant="h4" component="h2" sx={{ 
          mb: 4, 
          fontWeight: 600, 
          textAlign: 'center',
          color: '#1e40af'
        }}>
          Product Inventory
        </Typography>
        
        {/* First Row - 4 Products */}
        <Grid container spacing={4} justifyContent="center" sx={{ mb: 4, width: '100%' }}>
          {products.slice(0, 4).map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card sx={{ 
                width: '100%',
                maxWidth: 300,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)'
                }
              }}>
                <CardActionArea 
                  onClick={() => navigate(`/product/${product.id}`)}
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                    sx={{ 
                      objectFit: 'cover',
                      width: '100%',
                      borderTopLeftRadius: '12px',
                      borderTopRightRadius: '12px'
                    }}
                  />
                  <CardContent sx={{ 
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}>
                    <Typography 
                      gutterBottom 
                      variant="h5" 
                      component="div" 
                      sx={{ 
                        fontWeight: 600,
                        color: '#1e40af'
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                    >
                      View inventory details
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Second Row - 4 Products */}
        <Grid container spacing={4} justifyContent="center" sx={{ width: '100%' }}>
          {products.slice(4, 8).map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card sx={{ 
                width: '100%',
                maxWidth: 300,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)'
                }
              }}>
                <CardActionArea 
                  onClick={() => navigate(`/product/${product.id}`)}
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                    sx={{ 
                      objectFit: 'cover',
                      width: '100%',
                      borderTopLeftRadius: '12px',
                      borderTopRightRadius: '12px'
                    }}
                  />
                  <CardContent sx={{ 
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}>
                    <Typography 
                      gutterBottom 
                      variant="h5" 
                      component="div" 
                      sx={{ 
                        fontWeight: 600,
                        color: '#1e40af'
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                    >
                      View inventory details
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DashboardWarehouse;