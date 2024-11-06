import React from 'react';
import { Paper, Box, Typography, List, ListItem } from '@mui/material';

const ItemList = React.memo(({ items }) => {
  return (
    <List>
      {items?.map((item) => (
        <ListItem key={item.id} disableGutters>
          <Paper elevation={2} sx={{ width: '100%', padding: 2 }}>
            <Box>
              <Typography variant="h6">{item?.title}</Typography>
              <Typography variant="body2" color="textSecondary">{item?.date}</Typography>
              <Typography variant="body1">{item?.content}</Typography>
            </Box>
          </Paper>
        </ListItem>
      ))}
    </List>
  );
});

export default ItemList;
