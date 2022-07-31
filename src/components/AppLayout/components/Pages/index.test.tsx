import * as React from 'react';
import { render } from '@testing-library/react';
import Pages from '.';

describe('Pages', () => {
  it('should render correctly', () => {
    const { container } = render(<Pages />);
    expect(container).toMatchSnapshot();
  });
});
