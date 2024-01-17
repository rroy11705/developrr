import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { GlobalProvider, useGlobalContext } from './globalContext'
import userEvent from '@testing-library/user-event'

const makeSut = () => {
  const TestComponent = () => {
    const { isLight, setIsLight } = useGlobalContext()
    return (
      <div>
        <span>{isLight && isLight.toString()}</span>
        <button onClick={() => setIsLight && setIsLight(!isLight)}>
          Toggle Theme
        </button>
      </div>
    )
  }

  return render(
    <GlobalProvider>
      <TestComponent />
    </GlobalProvider>
  )
}

describe('GlobalProvider', () => {
  it('provides isLight and setIsLight through context', async () => {
    makeSut()
    await waitFor(() => {
      const darkTheme = screen.queryByText('false')
      expect(darkTheme).toBeInTheDocument()
      const toggleButton = screen.queryByText('Toggle Theme')
      if (toggleButton) {
        userEvent.click(toggleButton)
        const lightTheme = screen.queryByText('true')
        expect(lightTheme).toBeInTheDocument()
      }
    })
  })
})
