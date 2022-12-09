import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Home from '../pages'

test('home', () => {
  render(<Home />)
  const main = within(screen.getByRole('main'))
  expect(main.getByRole('heading', { level: 1, name: /DevOps jednoduše pro všechny./i })).toBeDefined()

    const meets = screen.getAllByText(/Domluvme si schůzku/i)
    meets.map(
      (m) => expect(m.getAttribute('href'))
        .toBe('https://calendly.com/vojtechmares/30min')
    )

  // const footer = within(screen.getByRole('contentinfo'))
  // const link = within(footer.getByRole('link'))
  // expect(link.getByRole('img', { name: /vercel logo/i })).toBeDefined()
})
