import { findByRole, fireEvent, render, screen } from '@testing-library/react'
import { it, describe, expect, vi } from 'vitest'
import { userEvent } from '@testing-library/user-event'
import App from './App'


describe('app component test suite', () => {
    it.skip('should render app with initial state', () => {
        render(<App />)

        screen.debug(undefined, 100000000)
    })

    it.skip('should render the app name prop', () => {
        render(<App name='learn testing in react' />)

        const heading = screen.getByText('learn testing in react')
        expect(heading).toBeDefined()
    })

    it('should increment the count on button click', async() => {
        render(<App />)

        const initialCount = screen.getByRole('heading',{name:"0"})
        expect(initialCount).toBeDefined()

        const button = screen.getByRole('button',{name:'increment'})
        fireEvent.click(button)

        const updatedCount = await screen.findByRole('heading',{name:'1'})
        expect(updatedCount).toBeDefined()

    })


    it.only('should be able to fetch async data', async () => {

        vi.spyOn(globalThis, "fetch").mockResolvedValue({
            json: async () => ({ name: "yunus karatt" })
        } as Response)

        render(<App />)

        const button = screen.getByRole('button', { name: /Fetch user/ })
        expect(button).toBeDefined()
        await userEvent.click(button)

        const username = screen.getByRole('heading', { name: /yunus karatt/ })
        expect(username).toBeDefined()
    })
})