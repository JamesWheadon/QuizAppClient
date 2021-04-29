import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TopicCard from '.';

describe('it should have images for the topics, which can be selected', () => {
    let topic;
    let selectCard;
    beforeEach(() => {
        topic = {id: 1, image: "wizard"}
        selectCard = jest.fn();
        render(<TopicCard topic={topic} selectCard={selectCard}/>)
    })

    test('it should have images for the topics', () => {
        // set a data object with the categories 
        const topicName = screen.getByRole('heading');
        const topicImage = screen.getByRole('img');
        // use useEvent and click on a category using a role 

        // check to see if the state has changed for the category
        expect(topicImage).toBeInTheDocument();
        expect(topicName).toBeInTheDocument();
    });

    test('it should call selectCard when an topic is clicked', () => {
        const topicImage = screen.getByRole('img');
        userEvent.click(topicImage);
        expect(selectCard).toHaveBeenCalled();
    })
})