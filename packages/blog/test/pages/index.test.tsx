import React from 'react';
import { render, fireEvent } from '../../../../test/testUtils';
import { Blog } from '../../pages/index';

describe('Blog page', () => {
  it('clicking button triggers alert', () => {
    const { getByText } = render(<Blog />, {});
    window.alert = jest.fn();
    fireEvent.click(getByText('Test Button'));
    expect(window.alert).toHaveBeenCalledWith('With typescript and Jest');
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Blog />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
