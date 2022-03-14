
import Results, { formatJobList, formatQueryParams } from './';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { waitForElementToBeRemoved, screen } from '@testing-library/react';
import { render } from '../../utils/test';

describe('formatJobList test', () => {

    it(' Should add comma  to a word', () => {
        const expectedState = 'item2,'
        expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
    })
    it("Should don't add comma  to the last element of the list", () => {
        const expectedState = 'item3'
        expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
    })
})

describe('formatQueryParamas test', () => {
    it('Should use the right format for params', () => {
        const expectedState = 'a1=answer1&a2=answer2'
        expect(formatQueryParams({ 1: 'answer1', 2: 'answer2' })).toEqual(expectedState);
    })
})

const ResultMockedData = [
    {
        title: 'seo',
        description: "Le SEO est en charge du référencement web d'une page",

    },
    {
        title: 'frontend',
        description: "Le developpeur ou la developpeuse frontend se charge de l'interface: interaction avec l'utilisateur, style etc."
    }
];

const server = setupServer(
    rest.get('http://localhost:8000/results', (req, res, ctx) => {

        return res(ctx.json({ resultsData: ResultMockedData }))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers());
afterAll(() => server.close())

describe('The results Components', () => {
    test('Should display the results after data is loaded', async () => {
        render(<Results />)
        await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
        const jobTitleElements = screen.getAllByTestId('job-title');
        expect(jobTitleElements[0].textContent).toBe('seo');
        expect(jobTitleElements.length).toBe(2);
        const jobDescriptionElements = screen.getAllByTestId('job-description')
        expect(jobDescriptionElements[1].textContent).toBe(
            ResultMockedData[1].description
        )
        expect(jobDescriptionElements.length).toBe(2)
    })
})