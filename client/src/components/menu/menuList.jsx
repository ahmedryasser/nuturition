import React, { useState } from 'react'
import { Tabs, Tab, Box } from '@mui/material'
import './menu.css'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const MenuList = ({ filterItems }) => {
    const {data: categories, isLoading, isError} = useQuery({
        // id,name
        queryKey: ['categories'],
        //categories + all
        queryFn: () => axios.get('http://localhost:3000/categories').then(res => [{id: 0, name: 'All'}, ...res.data])
    })

    const [active, setActive] = useState(0)
    const handleChange = (event, newValue) => {
        setActive(newValue)
        filterItems(categories[newValue].name)
    }
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error: {isError.message}</div>
    return (
        <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
            <Tabs
                value={active}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                className="menu-tabs"
                
            >
                {categories.map((category, id) => (
                    <Tab label={category.name} sx={{paddingTop: '1rem'}} key={id} className="menu-tab" />
                ))}
            </Tabs>
        </Box>
    )
}

export default MenuList