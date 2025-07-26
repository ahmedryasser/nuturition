import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import MenuList from './menuList'
import MenuItem from './menuItem'
import { Container, Typography, Box, Divider, Grid, CircularProgress, Alert } from '@mui/material'
import './menu.css'
import axios from 'axios'


const Menu = () => {
    const [filtered, setFiltered] = useState([])
    const { data: menuItems, isLoading, isError } = useQuery({
        queryKey: ['menu'],
        queryFn: () => axios.get('http://localhost:3000/food').then(res => res.data.map(item => ({...item, category: 'All', category: item.category})))
    })

    useEffect(() => {
        if (menuItems) setFiltered(menuItems)
    }, [menuItems])

    const filterItems = (categoryName) => {
        if (categoryName === 'All') {
            setFiltered(menuItems)
        } else {
            setFiltered(menuItems.filter(item => item.category.name === categoryName))
           
        }
    }

    if (isLoading) return <CircularProgress />
    if (isError) return <Alert severity="error">Error: {isError.message}</Alert>

    return (
        <Box component="section" className='menu section' sx={{ py: 4 }}>
            <Container>
                <Box className='menu-header' sx={{ textAlign: 'center', mb: 3 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Our Menu
                    </Typography>
                    <Divider sx={{ width: 60, mx: 'auto', mb: 2 }} />
                </Box>
                <MenuList filterItems={filterItems} />
                <div className="menu-grid">
                    <MenuItem menuItems={filtered} />
                </div>
            </Container>
        </Box>
    )
}

export default Menu