import * as React from 'react';
import { useLocation } from 'react-router-dom';

const SCREEN_WIDTH_BREAKPOINT = 835;

export default function JobSeekerNavWrapper(): React.JSX.Element | null {
	const [isDesktop, setIsDesktop] = React.useState<boolean>(
		window.innerWidth > SCREEN_WIDTH_BREAKPOINT,
	);

	const [Module, setModule] = React.useState<React.LazyExoticComponent<
		() => React.JSX.Element
	> | null>(null);

	const {pathname} = useLocation();

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
				pathname === '/'
					? React.lazy(
							async () =>
								await (isDesktop
									? import('./JobSeekerNavBreadcrumbs')
									: import('./JobSeekerNavDropdown')),
					  )
					: null,
			);
		};
		conditionalImport();
	}, [isDesktop, pathname]);

	return Module != null ? (
		<React.Suspense fallback={null}>
			<Module />
		</React.Suspense>
	) : null;
}
