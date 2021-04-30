import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '.';

describe('Winners page', () => {
    beforeEach(() => {
        render(<Router><Home /></Router>)
    })

    it('should render the elements to the page', () => {
        const startButton = screen.getByRole('button');
        expect(startButton).toBeInTheDocument();
    });
})