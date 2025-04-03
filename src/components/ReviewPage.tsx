import React from 'react';

const ReviewPage = ({
    user,
    loginWithGoogle,
    logout,
    newReview,
    setNewReview,
    handleReviewSubmit,
    reviews
  }) => {
  
  return (
    <section className="py-20 px-4 bg-gray-900 text-white min-h-screen">
      <div className="max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-center mb-8">Write a Review</h2>
        {!user ? (
  <div className="text-center">
    <p className="mb-4">You must be signed in with Google to leave a review.</p>
    <button
      onClick={loginWithGoogle}
      className="bg-[#FF204E] text-white px-6 py-3 rounded-lg"
    >
      Sign in with Google
    </button>
  </div>
) : (
  <>
    <p className="text-right mb-2 text-sm">
      Signed in as <strong>{user.displayName}</strong>{" "}
      <button
        onClick={logout}
        className="text-[#FF204E] underline ml-2"
      >
        Log out
      </button>
    </p>

    <form
      onSubmit={handleReviewSubmit}
      className="space-y-4 bg-white/5 p-6 rounded-xl"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full px-4 py-2 rounded bg-gray-800 text-white"
        value={newReview.name}
        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
        required
      />
      <textarea
        name="comment"
        placeholder="Your Review"
        className="w-full px-4 py-2 rounded bg-gray-800 text-white"
        value={newReview.comment}
        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
        required
      />
      <input
        type="number"
        name="rating"
        placeholder="Rating (1–5)"
        min="1"
        max="5"
        className="w-full px-4 py-2 rounded bg-gray-800 text-white"
        value={newReview.rating}
        onChange={(e) =>
          setNewReview({ ...newReview, rating: parseInt(e.target.value) })
        }
        required
      />
      <button type="submit" className="w-full bg-[#FF204E] text-white px-6 py-3 rounded-lg">
        Submit Review
      </button>
    </form>
  </>
)}

      </div>

      {/* Display submitted reviews */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-center">Recent Reviews</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
  <div key={index} className="bg-white/10 p-4 rounded-lg">
    <p className="text-lg font-bold mb-1">{review.name}</p>
    {review.date && (
      <p className="text-sm text-gray-400 mb-2">
        Submitted on: {review.date}
      </p>
    )}
    <p className="text-white/80 mb-1">⭐ {review.rating} / 5</p>
    <p className="text-white/70">{review.comment}</p>
  </div>
))}

        </div>
      </div>
    </section>
  );
};

export default ReviewPage;
