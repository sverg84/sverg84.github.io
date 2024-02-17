import * as React from 'react';

export interface PreloadedExoticComponent<T extends React.ComponentType<any>>
	extends React.LazyExoticComponent<T> {
	preload: () => {};
}

export default function lazyWithPreload<T extends React.ComponentType<any>>(
	factory: () => Promise<{
		default: T;
	}>,
): PreloadedExoticComponent<T> {
	return Object.assign(React.lazy(factory), {preload: factory});
}
