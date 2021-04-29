import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import IconCard from '.';

describe('it should show the icons in a card on the screen', () => {

    let handleFormSubmit;
    beforeEach(() => {
        handleFormSubmit = jest.fn()
        let icon = [{ id: 1, name: 'Ryan', url: 1 }];
        render(<IconCard icon={icon} selectIcon={handleFormSubmit} />)
    });

    test('it should render images', () => {
        expect(screen.getByAltText("icons", {exact: false})).toBeInTheDocument();
    })
})