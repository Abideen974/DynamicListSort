import { useMemo } from 'react';

const useSortedFilteredList = (items, searchTerm, sortCriteria) => {
  const sortedFilteredItems = useMemo(() => {
    const filteredItems = items.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return filteredItems.sort((a, b) => {
      if (sortCriteria === "title") return a.title.localeCompare(b.title);
      if (sortCriteria === "date") return new Date(b.date) - new Date(a.date);
      return 0;
    });
  }, [items, searchTerm, sortCriteria]);

  return sortedFilteredItems;
};

export default useSortedFilteredList;
