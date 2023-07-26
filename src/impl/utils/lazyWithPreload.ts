import * as React from 'react';

interface PreloadedExoticComponent<T = any>
	extends React.LazyExoticComponent<React.ComponentType<T>> {
	preload: () => {};
}

export default function lazyWithPreload<T>(
	factory: () => Promise<{
		default: React.ComponentType<T>;
	}>,
): PreloadedExoticComponent<T> {
	return Object.assign(React.lazy(factory), {preload: factory});
}
