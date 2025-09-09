import { render, screen } from '@testing-library/react'
import App from './App'

it('renders navigation brand', () => {
  render(<App />)
  expect(screen.getByText(/EchoWave/i)).toBeInTheDocument()
})
