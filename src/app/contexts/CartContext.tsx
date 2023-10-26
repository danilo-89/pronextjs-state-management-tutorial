'use client';
import { useState, createContext, useContext } from 'react';

import { createCartStore } from '../../store/store';

import { Cart } from '@/api/types';

const CartContext = createContext<ReturnType<typeof createCartStore> | null>(
	null
);

export const useCart = () => {
	if (!CartContext)
		throw new Error('useCart must be used within a CartProvider');
	return useContext(CartContext)!;
};

const CartProvider = ({
	cart,
	children,
}: {
	cart: Cart;
	children: React.ReactNode;
}) => {
	const [store] = useState(() => createCartStore(cart));
	return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
};

export default CartProvider;
