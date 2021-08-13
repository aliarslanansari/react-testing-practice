import { render, screen, fireEvent } from '@testing-library/react'
import App, { replaceCamelWithSpaces } from './App'

test('button has correct initial color', () => {
  render(<App />)
  const button = screen.getByRole('button', { name: 'Change to blue' })
  expect(button).toHaveStyle({ backgroundColor: 'red' })
})

test('button turns blue when c', () => {
  render(<App />)
  const button = screen.getByRole('button', { name: 'Change to blue' })
  fireEvent.click(button)
  expect(button).toHaveStyle({ backgroundColor: 'blue' })
  expect(button).toHaveTextContent('Change to red')
})

test('initial condition of button and checkbox', () => {
  render(<App />)
  const button = screen.getByRole('button', { name: 'Change to blue' })
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' })
  expect(button).toBeEnabled()
  expect(checkbox).not.toBeChecked()
  fireEvent.click(checkbox)
  expect(checkbox).toBeChecked()
  expect(button).toBeDisabled()
})

describe('spaces before camel-case capital letters', () => {
  test('should work for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })
  test('should one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })
  test('should work for multiple inner capital letter', () => {
    expect(replaceCamelWithSpaces('MediumVoiletRed')).toBe('Medium Voilet Red')
  })
})
