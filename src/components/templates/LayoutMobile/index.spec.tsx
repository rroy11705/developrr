import React from 'react'
import {
  render,
  screen,
  userEvent
} from '../../../../test/config/react-library'
import {
  ThemeProvider,
  dark,
  light
} from '../../../../test/config/theme-wrapper'
import LayoutMobile from '.'
import { GlobalContext } from '../../../contexts/globalContext'

const makeSut = (
  isLight: boolean,
  setIsLight: React.Dispatch<React.SetStateAction<boolean>>,
  children: React.ReactNode,
  noTop: boolean
) => {
  return render(
    <GlobalContext.Provider value={{ isLight, setIsLight }}>
      <ThemeProvider theme={isLight ? light : dark}>
        <LayoutMobile noTop={noTop}>{children}</LayoutMobile>
      </ThemeProvider>
    </GlobalContext.Provider>
  )
}

describe('LayoutMobile component', () => {
  it('should render menu if noTop is false', () => {
    const setIsLight = jest.fn()
    const children = <div>Hello World!</div>
    makeSut(false, setIsLight, children, false)
    const menuTop = screen.queryByTestId('menu-top')
    expect(menuTop).toBeInTheDocument()
  })
  it('should render bottom menu', () => {
    const setIsLight = jest.fn()
    const children = <div>Hello World!</div>
    makeSut(false, setIsLight, children, true)
    const menuBottom = screen.queryByTestId('menu-bottom')
    expect(menuBottom).toBeInTheDocument()
  })

  it('should not render bottom menu if menuTop is true', async () => {
    const setIsLight = jest.fn()
    const children = <div>Hello World!</div>
    makeSut(false, setIsLight, children, true)
    const menuTop = screen.queryByTestId('menu-top')
    expect(menuTop).not.toBeInTheDocument()
  })

  it('should call scroll top function on button click', async () => {
    window.scrollTo = jest.fn()
    const setIsLight = jest.fn()
    const children = <div>Hello World!</div>
    makeSut(false, setIsLight, children, true)
    const topButton = screen.getAllByTestId('menu-bottom-btn')
    expect(topButton[0]).toBeInTheDocument()
    await userEvent.click(topButton[0])
    expect(window.scrollTo).toHaveBeenCalledWith({ behavior: 'smooth', top: 0 })
  })
})
