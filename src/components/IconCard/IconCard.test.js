import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import IconCard from '.';

describe('it should show the icons in a card on the screen', () => {

    let handleFormSubmit = jest.fn()
    beforeEach(() => {
        let icon = [{ id: 1, name: 'Ryan', url: 1 }];
        render(<IconCard src={icon.url} onClick={()=>selectIcon(icon.id)} />)
    });

    test('it should render images', () => {
        expect(await screen.findByAltText("icons", {exact: false})).toBeInTheDocument();
    })
})