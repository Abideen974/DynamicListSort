import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = React.memo(({ searchTerm, onSearchChange }) => {
    const handleChange = (event) => {
        onSearchChange(event.target.value);
    };

    return (
        <TextField
            label="Search"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={handleChange}
            margin="normal"
            sx={{
                backgroundColor: 'white',
                borderRadius: '5px'
            }}
        />
    );
});

export default SearchBar;
