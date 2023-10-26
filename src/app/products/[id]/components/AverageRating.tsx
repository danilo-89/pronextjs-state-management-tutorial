'use client';
import { useStore, useAtomValue } from 'jotai';

import { reviewsAtom } from '@/app/store/atoms';

export default function AverageRating() {
	const store = useStore();
	const reviews = useAtomValue(reviewsAtom, {
		store,
	});

	return (
		<>
			{reviews && reviews?.length && (
				<div className='mt-4 font-light'>
					Average Rating:{' '}
					{(
						reviews?.reduce((a, b) => a + b.rating, 0) / reviews?.length
					).toFixed(1)}
				</div>
			)}
		</>
	);
}
