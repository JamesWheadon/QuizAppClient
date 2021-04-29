import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { render } from 'react-dom';

import TopicCard from '.';

describe('it should have images for the topics, which can be selected', () => {
    beforeEach(() => {
        render(<TopicCard topic={topic} selectCard={selectCard}/>)
    })

    test('it should have images for the topics', () => {
        // set a data object with the categories 

        // use useEvent and click on a category using a role 

        // check to see if the state has changed for the category
    })
})