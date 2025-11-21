import React from "react";
import { Search } from "lucide-react";

const SearchBox = () => {
  return (
    <div className="w-full mt-5 px-3 py-2">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />

        <input
          type="text"
          placeholder="Search..."
          className="
            w-full rounded-xl bg-slate-800/50 text-slate-200
            pl-10 pr-4 py-2
            placeholder-slate-500 
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
        />
      </div>
    </div>
  );
};

export default SearchBox;
