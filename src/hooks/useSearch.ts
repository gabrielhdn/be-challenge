import { useState } from 'react';

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return {
    searchTerm,
    handleSearchTermChange,
  };
};

export default useSearch;
