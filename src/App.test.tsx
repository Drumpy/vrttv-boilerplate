import { render, screen } from '@testing-library/react'

import App from './App'

test('that jest is working', () => {
  render(<App />)
  expect(screen.getByText('Hello world!')).toBeInTheDocument()
})
