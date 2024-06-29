import React from 'react';

const outfit = {
  imageUrl: 'https://plus.unsplash.com/premium_photo-1664367340650-920512b12005',
  description: 'Being a little extra',
};

const OutfitOfTheDay = () => {
    return (
      <div className="bg-gray-100 min-h-screen p-6">
        {/*Card */}
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          {/* Body */}
          <div className="p-6">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-gray-800">Today's Outfit</h3>
              <p className="text-gray-600 mt-2">{outfit.description}</p>
            </div>
            <div className="mb-4">
              <img className="w-full object-contain" src={outfit.imageUrl} alt={outfit.description} style={{height: '550px'}} />
            </div>
            <div className='mb-2 bg-gray-100 px-3 flex'><span>Shop Now</span>
        <svg className="w-6 h-6 mr-1 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>

            </svg>

        </div>
          </div>
        </div>
      </div>
    );
  };

export default OutfitOfTheDay;
