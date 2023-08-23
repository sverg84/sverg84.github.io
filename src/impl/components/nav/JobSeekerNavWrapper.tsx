import * as React from 'react';

const SCREEN_WIDTH_BREAKPOINT = 835;

export default function JobSeekerNavWrapper(): React.JSX.Element | null {
	const [isDesktop, setIsDesktop] = React.useState<boolean>(
		window.innerWidth > SCREEN_WIDTH_BREAKPOINT,
	);

	const [Module, setModule] = React.useState<React.LazyExoticComponent<
		() => React.JSX.Element
	> | null>(null);

	const updateMedia = () => {
		setIsDesktop(window.innerWidth > SCREEN_WIDTH_BREAKPOINT);
	};

	React.useEffect(() => {
		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	}, []);

	React.useEffect(() => {
		const conditionalImport = async () => {
			setModule(
				React.lazy(
					async () =>
						await (isDesktop
							? import('./JobSeekerNavBreadcrumbs')
							: import('./JobSeekerNavDropdown')),
				),
			);
		};
		conditionalImport();
	}, [isDesktop]);

	return Module != null ? (
		<React.Suspense fallback={null}>
			<Module />
		</React.Suspense>
	) : null;
}
