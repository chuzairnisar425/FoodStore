import React from "react";

function CategoryMenu() {
  return (
    <div className="ml-6">
      <h3 className="font-semibold">Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden md:overflow-x-hidden">
        <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500">
          All
        </button>
        <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500">
          Lunch
        </button>
        <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500">
          Breakfast
        </button>
        <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500">
          Dinner
        </button>
      </div>
    </div>
  );
}

export default CategoryMenu;
