import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Pages from '.';

describe('Pages', () => {
  it('should render correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
