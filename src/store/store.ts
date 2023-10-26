import { create } from 'zustand';

import { Cart, Review } from '@/api/types';

const createCartStore = (cart: Cart) =>
	create<{
		cart: Cart;
		setCart: (cart: Cart) => void;
	}>((set) => ({
		cart,
		setCart(cart: Cart) {
			set({ cart });
		},
	}));

const createReviewsStore = (reviews: Review[]) =>
	create<{
		reviews: Review[];
		setReviews: (Reviews: Review[]) => void;
	}>((set) => ({
		reviews,
		setReviews(reviews: Review[]) {
			set({ reviews });
		},
	}));

export { createCartStore, createReviewsStore };
