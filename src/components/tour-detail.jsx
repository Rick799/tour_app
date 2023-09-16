/* eslint react/prop-types: 0 */

import { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="bg-slate-100 my-8 mx-0 rounded-md shadow-md shadow-slate-400 ease-in duration-300 hover:shadow-slate-800">
      <img
        className="w-full  object-cover h-80 rounded-tl-md rounded-tr-md hover:scale-105  duration-500 cursor-pointer"
        src={image}
        alt={name}
      />
      <footer className="py-6 px-8">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-sm md:text-lg text-slate-900 mb-0 font-bold tracking-widest">
            {name}
          </h4>
          <h4 className="text-sm md:text-base bg-teal-600 text-white rounded-md px-2 py-1 tracking-wide">
            ₹ {price}
          </h4>
        </div>
        <p className="italic text-sm md:text-base font-medium text-slate-800 leading-6 tracking-wide">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className="text-sm md:text-base text-teal-600 text-base pl-2 capitalize cursor-pointer"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
        <button
          className="text-sm md:text-base block w-48 mt-5 mb-0 mx-auto py-1 px-2 tracking-wider text-red-700 border-2 border-red-700 capitalize rounded-md ease-linear duration-300 hover:shadow-lg hover:bg-red-100"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
