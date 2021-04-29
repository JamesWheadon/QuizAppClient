import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../../layout/Header';

describe('Header', () => {
    test('it renders a navigation bar from the nav tag inside of Header', () => {
        render(<Header />, { wrapper: MemoryRouter });
        const nav = screen.queryByRole('navigation');
        expect(nav).toBeInTheDocument();
    })
})