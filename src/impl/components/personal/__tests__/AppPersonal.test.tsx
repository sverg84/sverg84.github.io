import { render, waitFor } from '@testing-library/react';
import * as React from 'react';

import MyName from '../../../consts/MyName';
import { Component as AppPersonal } from '../AppPersonal';

describe('Basic Personal app render', () => {
	test('App component successfully renders', () => {
		const app = render(<AppPersonal />);
		waitFor(() => expect(app.queryByText(MyName)).toBeVisible());
	});
});
