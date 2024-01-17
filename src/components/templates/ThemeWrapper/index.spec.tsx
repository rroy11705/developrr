import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import ThemeWrapper from '.'
import { GlobalContext } from '../../../contexts/globalContext'

jest.mock('../../../contexts/globalContext')

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

  it('applies light theme when isLight is true', () => {
    const setIsLight = jest.fn()
    const children = <div>Hello World!</div>
    makeSut(true, setIsLight, children)
    expect(document.getElementsByTagName('body')).toHaveStyle(
      'background-color: #202329'
    )
  })

  it('applies dark theme when isLight is false', () => {
    const setIsLight = jest.fn()
    const children = <div>Hello World!</div>
    makeSut(false, setIsLight, children)
    expect(document.getElementsByTagName('body')).toHaveStyle(
      'background-color: #F9F9F9'
    )
  })
})
