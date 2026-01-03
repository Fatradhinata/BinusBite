import React from "react";
import { Search } from "lucide-react";

const SearchComp = () => {
  return (
    <div className="w-1/4 h-14 px-4 flex justify-between bg-[#FFF7F1] rounded-full overflow-hidden border border-[#FFA825]">
      <input type="text" className="w-full text-xl outline-none border-none" />
      <div className="flex items-center">
        <div className="p-2 rounded-full bg-[#FFA825]">
          <Search color="#fafafa" />
        </div>
      </div>
    </div>
  );
};

export default SearchComp;
