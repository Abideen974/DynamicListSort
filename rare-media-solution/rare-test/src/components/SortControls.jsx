import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const SortControls = React.memo(({ sortCriteria, onSortChange }) => {
    const handleChange = (event) => {
        onSortChange(event.target.value);
    };
    return (
        <FormControl fullWidth variant="outlined" margin="normal" sx={{
            backgroundColor: 'white',
            borderRadius: '5px'
        }}>
            <InputLabel>Sort By</InputLabel>
            <Select
                value={sortCriteria}
                onChange={handleChange}
                label="Sort By"
            >
                <MenuItem value="title">Title (A-Z)</MenuItem>
                <MenuItem value="date">Date (Newest to Oldest)</MenuItem>
            </Select>
        </FormControl>
    );
});

export default SortControls;
