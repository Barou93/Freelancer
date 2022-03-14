import Card from './';

import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../utils/contexte';

describe('picture test', () => {
    test('verify picture is avaible', async () => {
        render(
            <ThemeProvider>
                <Card
                    title='Harry Potter'
                    label="Magicien Frontend"
                    picture="/myPicture.png"

                />
            </ThemeProvider>
        )
        const cardPicture = screen.getByRole('img')
        const CardTitle = screen.getByText(/Harry/i)
        expect(cardPicture.src).toBe('http://localhost/myPicture.png')
        expect(CardTitle.textContent).toBe(' Harry Potter ')

    })
    test('Should add ⭐️ around title', async () => {
        render(
            <ThemeProvider>
                <Card
                    title='Harry Potter'
                    label="Magicien Frontend"
                    picture="/myPicture.png"

                />
            </ThemeProvider>

        )
        const cardTitle = screen.getByText(/harry/i)
        const parentNode = cardTitle.closest('div')
        fireEvent.click(parentNode)
        expect(cardTitle.textContent).toBe('⭐️ Harry Potter ⭐️')
    })

})