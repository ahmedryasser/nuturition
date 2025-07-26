import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Container,
  Grid,
  Paper,
  Chip,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import { useLocation } from 'react-router-dom';   
import './nutrition.css';

const Nutrition = () => {
  const { id } = useParams();
  // try to get the product from router state 
  const { state } = useLocation();
  const productFromState = state?.item;

  // fetch full product record if state wasn’t provided
  const {
    data: product,
    isLoading: productLoading,
    isError: productError,
  } = useQuery({
    queryKey: ['food', id],
    enabled: !productFromState,                  
    queryFn: () =>
      axios
        .get('http://localhost:3000/food')
        .then((res) => res.data.find((f) => f.id === Number(id))),
  });

  const chosenProduct = productFromState ?? product;

  const {
    data: nutrition,
    isLoading: nutritionLoading,
    isError: nutritionError,
  } = useQuery({
    queryKey: ['nutrition', id],
    enabled: !chosenProduct?.nutrition,         
    queryFn: () =>
      axios
        .get(`http://localhost:3000/food/${id}/nutrition`)
        .then((res) => res.data),
  });

  const nutritionData = chosenProduct?.nutrition ?? nutrition;

  if (productLoading || nutritionLoading) return <CircularProgress />;
  if (productError || nutritionError)
    return (
      <Alert severity="error">
        Error: {(productError || nutritionError).message}
      </Alert>
    );

  // helper component for each macro card
  const StatCard = ({ label, value, unit = '' }) => (
    <Paper elevation={3} className="stat-card">
      <Typography variant="subtitle2" className="stat-label">
        {label}
      </Typography>
      <Typography variant="h5" className="stat-value">
        {value}
        {unit}
      </Typography>
    </Paper>
  );

  return (
    <>
    <Box component="section" className="nutrition section">
      <Container maxWidth="sm">
        {/* ------------- PRODUCT HEADER ------------- */}
        {chosenProduct && (
          <Card className="nutrition-card">
            <CardMedia
              component="img"
              height="220"
              image={chosenProduct.img}
              alt={chosenProduct.name}
            />
            <CardContent>
              <Typography variant="h5" className="product-name" gutterBottom>
                {chosenProduct.name}
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 1 }}>
                ${chosenProduct.price}
              </Typography>
              <Typography variant="body2" className="ingredient-label">
                {chosenProduct.description}
              </Typography>

              {/* CATEGORY CHIP – now overlayed on the photo */}
              {chosenProduct.category?.name && (
                <Chip
                  label={chosenProduct.category.name}
                  className="category-chip"
                />
              )}

              {/* INGREDIENTS LIST */}
              <Box className="chip-container">
                <Typography variant="body2" className="ingredients-title">
                  Ingredients:
                </Typography>
                {chosenProduct.ingredients?.map((ing) => (
                  <Chip key={ing.name} label={ing.name} variant="outlined" />
                ))}
              </Box>
            </CardContent>
          </Card>
        )}

        {/* ------------- NUTRITION FACTS ------------- */}
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          className="nutrition-title"
        >
          Nutrition Facts
        </Typography>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <StatCard label="Calories" value={nutritionData?.calories} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StatCard label="Protein" value={nutritionData?.protein} unit=" g" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StatCard label="Carbs" value={nutritionData?.carbs} unit=" g" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StatCard label="Fat" value={nutritionData?.fat} unit=" g" />
          </Grid>
        </Grid>
      </Container>
    </Box>
    </>
  )
}

export default Nutrition