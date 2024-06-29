import React from 'react';

const coverphoto = "https://images.unsplash.com/photo-1551489186-ccb95a1ea6a3";
const events = [
  {
    title: 'Go Ethnic',
    imageUrl: 'https://images.unsplash.com/photo-1659727640714-7e9a1d8b31cb',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit tellus id dui volutpat, vel hendrerit nulla vestibulum.',
  },
  {
    title: 'Fitness week',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit tellus id dui volutpat, vel hendrerit nulla vestibulum.',
  },
  {
    title: 'Holiday Wardrobe Showcase',
    imageUrl: 'https://images.unsplash.com/photo-1526857240824-92be52581d9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit tellus id dui volutpat, vel hendrerit nulla vestibulum.',
  },
];

const EventsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Profile Card */}
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header */}
        <div className="relative">
          <img className="w-full h-64 object-cover" src={coverphoto} alt="Events Cover" />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <h2 className="text-4xl font-semibold text-white">Events</h2>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          {events.map((event, index) => (
            <div key={index} className="mb-20">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-gray-800">{event.title}</h3>
              </div>
              <p className="text-gray-600 mt-2">{event.description}</p>
              <img className="w-full h-64 object-cover mt-2" src={event.imageUrl} alt={event.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
