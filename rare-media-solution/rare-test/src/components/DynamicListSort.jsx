import React, { useState, useCallback } from 'react';
import { Container, Typography, Box, Stack } from '@mui/material';  

import SearchBar from './SearchBar';
import SortControls from './SortControls';
import ItemList from './ItemList';
import useSortedFilteredList from '../hooks/useSortedFilteredList';
import { POST_DATA } from '../constant';

const DynamicListSort = () => {
  const [posts] = useState(POST_DATA);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState("title");

  const filteredAndSortedPosts = useSortedFilteredList(posts, searchTerm, sortCriteria);

  const handleSearchChange = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  const handleSortChange = useCallback((value) => {
    setSortCriteria(value);
  }, []);

  return (
    <Container maxWidth="md">
      <Box my={4} textAlign="center">
        <Typography variant="h4" component="h1" gutterBottom>
          Dynamic List Sorting App
        </Typography>
      </Box>

      <Stack spacing={3}>
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <SortControls sortCriteria={sortCriteria} onSortChange={handleSortChange} />
        <ItemList items={filteredAndSortedPosts} />
      </Stack>
    </Container>
  );
};

export default DynamicListSort;
