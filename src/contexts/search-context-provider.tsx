"use client";

import React, { useState, createContext } from "react";

type SearchContextProviderProps = {
  children: React.ReactNode;
};

type TSeachContext = {
  searchQuery: string;
  handleChangeSearchQuery: (newValue: string) => void;
};

export const SearchContext = createContext<TSeachContext | null>(null);

const SearchContextProvider = ({ children }: SearchContextProviderProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChangeSearchQuery = (newValue: string) => {
    setSearchQuery(newValue);
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        handleChangeSearchQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
