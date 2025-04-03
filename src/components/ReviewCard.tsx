import React from 'react';

type ReviewProps = {
  name?: string;
  comment?: string;
  rating?: number;
  date?: string;
  image?: string;
};

const ReviewCard = ({
  name = "Anonymous",
  comment = "No comment provided.",
  rating = 0,
  date,
  image
}: ReviewProps) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md text-white">
      <div className="flex items-center mb-4">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full mr-4 bg-gray-700 flex items-center justify-center text-white font-bold text-sm">
            {name.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          {date && (
            <p className="text-sm text-gray-200 font-medium">
              Submitted on: {date}
            </p>
          )}
        </div>
      </div>
      <p className="text-gray-300 mb-2">{comment}</p>
      <p className="text-yellow-400 text-sm">{"⭐".repeat(rating)}</p>
    </div>
  );
};

export default ReviewCard;
