import React from 'react'
import { render, screen } from '../../test/config/react-library'
import { GlobalProvider, useGlobalContext } from './globalContext'

let mockIsLight = false // initial value

jest.mock('./globalContext', () => {
  const originalModule = jest.requireActual('./globalContext')

  return {
    ...originalModule,
    useGlobalContext: () => ({
      isLight: mockIsLight,
      setIsLight: jest.fn().mockImplementation(newIsLight => {
        mockIsLight = newIsLight
      })
    })
  }
})

const makeSut = () => {
  const TestComponent = () => {
    const { isLight, setIsLight } = useGlobalContext()
    return (
      <div>
        <span>{isLight?.toString()}</span>
        <button
          onClick={() => setIsLight !== undefined && setIsLight(!isLight)}
        >
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
    const darkTheme = screen.queryByText('false')
    expect(darkTheme).toBeInTheDocument()
  })
})
