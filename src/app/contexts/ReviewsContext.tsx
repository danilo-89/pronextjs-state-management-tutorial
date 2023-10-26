'use client';
import { useState, createContext, useContext } from 'react';

import { createReviewsStore } from '../../store/store';

import { Review } from '@/api/types';

const ReviewsContext = createContext<ReturnType<typeof createReviewsStore>>(
	null!
);

export const useReviews = () => {
	if (!ReviewsContext)
		throw new Error('useCart must be used within a CartProvider');
	return useContext(ReviewsContext);
};

const ReviewsProvider = ({
	reviews,
	children,
}: {
	reviews: Review[];
	children: React.ReactNode;
}) => {
	const [store] = useState(() => createReviewsStore(reviews));
	return (
		<ReviewsContext.Provider value={store}>{children}</ReviewsContext.Provider>
	);
};

export default ReviewsProvider;
