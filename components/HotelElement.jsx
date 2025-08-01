import React from 'react';

const HotelView = ({ hotel }) => {
  if (!hotel) return <div>Loading...</div>;

  const {
    name,
    imageUrl,
    location,
    numRooms,
    description,
    rating,
    amenities
  } = hotel;

  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(location)}`;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{name}</h1>

      <img src={imageUrl} alt={name} className="w-full h-64 object-cover rounded-lg mb-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold">Description</h2>
          <p className="text-gray-700 mb-4">{description}</p>

          <p><strong>Number of Rooms:</strong> {numRooms}</p>
          <p><strong>Rating:</strong> {rating} / 5</p>

          <h3 className="text-lg font-semibold mt-4">Amenities:</h3>
          <ul className="list-disc ml-6">
            {amenities.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Location</h2>
          <iframe
            title="Hotel Location"
            className="w-full h-64 rounded-lg"
            loading="lazy"
            allowFullScreen
            src={mapSrc}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HotelView;
