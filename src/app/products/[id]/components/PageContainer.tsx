'use client';
import { ReactNode, useRef } from 'react';
import { useStore } from 'jotai';

import { reviewsAtom } from '@/app/store/atoms';

import { Review } from '@/api/types';

const PageContainer = ({
	reviews: initialReviews,
	children,
}: {
	reviews: Review[];
	children: ReactNode;
}) => {
	const store = useStore();
	const initialized = useRef(false);
	if (!initialized.current) {
		store.set(reviewsAtom, initialReviews);
		initialized.current = true;
	}

	if (initialized) {
		return <>{children}</>;
	}

	return <>Waiting for initialization...</>;
};

export default PageContainer;
