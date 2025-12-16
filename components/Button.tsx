import React from "react";

const Button = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <button className="px-6 py-2 bg-[#FFA825] rounded-tr-[40px] rounded-bl-[40px] text-xl font-semibold text-white">
      {children}
    </button>
  );
};

export default Button;
