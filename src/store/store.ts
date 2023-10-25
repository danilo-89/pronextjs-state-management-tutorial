import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit';

import { Review, type Cart } from '@/api/types';
import { useSelector } from 'react-redux';

export interface ReviewsState {
	reviews: Review[] | null;
}
export interface CartState {
	cart: Cart;
}

// Reviews store setup
export interface ReviewsState {
	reviews: Review[] | null;
}

const initialReviews: ReviewsState = {
	reviews: null,
};

export const reviewsSlice = createSlice({
	name: 'reviews',
	initialState: initialReviews,
	reducers: {
		setReviews: (state, action: PayloadAction<Review[]>) => {
			state.reviews = action.payload;
		},
	},
});

// Cart store setup
const initialCartState: CartState = {
	cart: {
		products: [],
	},
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState: initialCartState,
	reducers: {
		setCart: (state, action: PayloadAction<Cart>) => {
			state.cart = action.payload;
		},
	},
});

// store initializer
export const createStore = () =>
	configureStore({
		reducer: {
			cart: cartSlice.reducer,
			reviews: reviewsSlice.reducer,
		},
	});

// Actions
export const { setCart } = cartSlice.actions;
export const { setReviews } = reviewsSlice.actions;

// Types
export type StoreType = ReturnType<typeof createStore>;
export type RootState = ReturnType<StoreType['getState']>;
export type AppDispatch = StoreType['dispatch'];

// Selector hooks
export const useCart = () => useSelector((state: RootState) => state.cart.cart);
export const useReviews = () =>
	useSelector((state: RootState) => state.reviews.reviews);
