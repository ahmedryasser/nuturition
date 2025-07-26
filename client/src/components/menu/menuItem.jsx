import React from 'react'
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material'
import './menu.css'
import { useNavigate } from "react-router-dom";

const MenuItem = ({ menuItems }) => {
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/nutrition/${id}`);
    }
    return (
        <>
            {menuItems.map(({ id, img, name, price, description }) => (
                <Card onClick={() => handleClick(id)} className="menu-card" key={id}>
                    <Box className="menu-img-container">
                        <CardMedia
                            component="img"
                            image={img}
                            alt={name}
                            className="menu-img"
                        />
                        <Box className="menu-price">
                           $ {price} 
                        </Box>
                    </Box>
                    <CardContent>
                        <Typography variant="h6" component="div" className="menu-item-name">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="menu-item-desc">
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </>
    )
}

export default MenuItem