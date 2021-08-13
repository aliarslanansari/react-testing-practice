import React from 'react'
import './App.css'

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [buttonColor, setButtonColor] = React.useState('red')
  const [checkbox, setCheckbox] = React.useState(false)

  return (
    <div>
      <button
        disabled={checkbox}
        style={{ backgroundColor: buttonColor }}
        onClick={(e) => setButtonColor((p) => (p === 'red' ? 'blue' : 'red'))}>
        Change to {buttonColor === 'red' ? 'blue' : 'red'}
      </button>
      <input
        type='checkbox'
        id='enable-button-checkbox'
        defaultChecked={checkbox}
        aria-checked={checkbox}
        onClick={(e) => setCheckbox(e.target.checked)}
      />
      <label htmlFor='enable-button-checkbox'>Disable Button</label>
    </div>
  )
}

export default App
