import '@testing-library/jest-dom';

jest.mock('@fortawesome/fontawesome-svg-core/import.macro', () => {
	const mockIconLookup = {prefix: 'fas', iconName: 'up'};
	return {
		brands: jest.fn().mockReturnValue(mockIconLookup),
		solid: jest.fn().mockReturnValue(mockIconLookup),
	};
});

jest.mock('@fortawesome/react-fontawesome', () => ({
	FontAwesomeIcon: jest.fn().mockReturnValue(<i className="fa" />),
}));
