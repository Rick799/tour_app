/* eslint react/prop-types: 0 */

import Tour from "./tour-detail";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="mb-12">
        <h2 className="text-slate-900 text-3xl md:text-4xl font-serif font-bold text-center my-6 md:my-6 capitalize tracking-widest mb-0 italic">
          Incredible India
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-green-300 mx-auto"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
