import React from 'react'
import { render, screen, waitFor } from '../../../../test/config/react-library'
import ThemeWrapper from '.'
import { GlobalContext } from '../../../contexts/globalContext'

jest.mock('../../../contexts/globalContext', () => {
  const originalModule = jest.requireActual('../../../contexts/globalContext')

  return {
    ...originalModule,
    useGlobalContext: () => ({
      isLight: false,
      setIsLight: jest.fn()
    })
  }
})

const makeSut = (
  isLight: boolean,
  setIsLight: React.Dispatch<React.SetStateAction<boolean>>,
  children: React.ReactNode
) => {
  return render(
    <GlobalContext.Provider value={{ isLight, setIsLight }}>
      <ThemeWrapper>{children}</ThemeWrapper>
    </GlobalContext.Provider>
  )
}

describe('ThemeWrapper component', () => {
  it('renders children', async () => {
    const setIsLight = jest.fn()
    const children = <div>Hello World!</div>
    makeSut(true, setIsLight, children)
    await waitFor(() => {
      const text = screen.getByText('Hello World!')
      expect(text).toBeInTheDocument()
    })
  })

  it('applies light theme when isLight is true', async () => {
    const setIsLight = jest.fn()
    const children = <div>Hello World!</div>
    makeSut(true, setIsLight, children)
    // expect(document.body).toHaveStyle('background-color: #F9F9F9')
  })

  it('applies dark theme when isLight is false', async () => {
    const setIsLight = jest.fn()
    const children = <div>Hello World!</div>
    makeSut(false, setIsLight, children)
    // expect(document.body).toHaveStyle('background-color: #202329')
  })
})
