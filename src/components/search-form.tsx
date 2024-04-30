"use client";

import { useSearchContext } from "@/lib/hooks";

const SearchForm = () => {

  const { searchQuery, handleChangeSearchQuery } = useSearchContext();

  return (
    <form className="w-full h-full">
      <input
        className="w-full h-full bg-white/20 rounded-md px-5 outline-none transition focus:bg-white/50 hover:bg-white/30 placeholder:text-white/50"
        placeholder="Search pets"
        value={searchQuery}
        onChange={(e) => handleChangeSearchQuery(e.target.value)}
        type="search"
      />
    </form>
  );
};

export default SearchForm;
