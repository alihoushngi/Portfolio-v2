import React from "react";

const Menu = () => {
  return (
    <div className="bg-primary fixed left-0 right-0 top-0 overflow-x-hidden pt-24 pb-6 flex items-center p-0 m-0 justify-center w-full origin-[50%_50%_0] duration-[500ms]">
      <ul className="text-white flex flex-col gap-8 p-0 m-0 items-center text-center md:w-full md:flex-row">
        <li>Home</li>
        <li>About</li>
        <li>Works</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Menu;
