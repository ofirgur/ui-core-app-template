import * as React from 'react';
import { render } from '@testing-library/react';
import LeftPanel from '.';

describe('LeftPanel', () => {
  it('should render correctly', () => {
    const { container } = render(<LeftPanel />);
    expect(container).toMatchSnapshot();
  });
});
