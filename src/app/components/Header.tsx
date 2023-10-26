'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { useAtomValue, useStore } from 'jotai';

import { cartAtom } from '../store/atoms';

import CartPopup from './CartPopup';

import { type Cart } from '@/api/types';

export default function Header({
	cart: initialCart,
	clearCartAction,
}: {
	cart: Cart;
	clearCartAction: () => Promise<Cart>;
}) {
	const store = useStore();
	const loaded = useRef(false);

	// set atom in store
	// note: another approach here would be to create another client component which would take in children and do the initialization itself before doing any rendering
	if (!loaded.current) {
		store.set(cartAtom, initialCart);
		loaded.current = true;
	}

	const cart = useAtomValue(cartAtom, {
		store,
	});

	const [showCart, setShowCart] = useState(false);

	return (
		<header className='mx-2 flex items-center justify-between p-4 bg-blue-800 mb-10 shadow-lg shadow-white rounded-b-2xl'>
			<Link href='/'>
				<h1 className='text-3xl font-bold leading-10 text-gray-100'>
					Donuts &amp; Dragoons Store
				</h1>
			</Link>
			<div
				className='flex items-center justify-center w-10 h-10 bg-blue-700 rounded-full'
				onClick={() => {
					setShowCart(!showCart);
				}}
			>
				<span className='text-xl font-bold leading-10 text-gray-100'>
					{cart.products.length}
				</span>
				{showCart && <CartPopup clearCartAction={clearCartAction} />}
			</div>
		</header>
	);
}
