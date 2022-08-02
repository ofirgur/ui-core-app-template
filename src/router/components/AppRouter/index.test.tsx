import * as React from 'react';
import { render } from '@testing-library/react';
import AppRouter from '.';

describe('AppRouter', () => {
  it('should render correctly', () => {
    const { container } = render(<AppRouter />);
    expect(container).toMatchSnapshot();
  });
});
