import * as React from 'react';
import { render } from '@testing-library/react';
import Main from '.';

describe('Main', () => {
  it('should render correctly', () => {
    const { container } = render(<Main />);
    expect(container).toMatchSnapshot();
  });
});
