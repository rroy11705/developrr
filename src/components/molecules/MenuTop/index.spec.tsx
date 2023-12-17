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
import MenuTop from '.'
import { GlobalContext } from '../../../contexts/globalContext'

const makeSut = (isLight, setIsLight) => {
  return render(
    <GlobalContext.Provider value={{ isLight, setIsLight }}>
      <ThemeProvider theme={isLight ? light : dark}>
        <MenuTop />
      </ThemeProvider>
    </GlobalContext.Provider>
  )
}

describe('MenuTop component', () => {
  it('should render by default', () => {
    const setIsLight = jest.fn()
    makeSut(false, setIsLight)
    const menuTop = screen.queryByTestId('menu-top')
    expect(menuTop).toBeInTheDocument()
  })

  it('should render dark theme at first and change to light theme if click on sun button', async () => {
    const setIsLight = jest.fn()
    makeSut(false, setIsLight)
    const sunButton = screen.getByTestId('sun-button')
    expect(sunButton).toBeInTheDocument()
    await userEvent.click(sunButton)
    const moonButton = screen.queryByTestId('moon-button')
    expect(moonButton).not.toBeInTheDocument()
  })

  it('should render light theme at first and change to dark theme if click on moon button', async () => {
    const setIsLight = jest.fn()
    makeSut(true, setIsLight)
    const moonButton = screen.getByTestId('moon-button')
    expect(moonButton).toBeInTheDocument()
    if (moonButton) {
      await userEvent.click(moonButton)
    }
    const sunButton = screen.queryByTestId('sun-button')
    expect(sunButton).not.toBeInTheDocument()
  })
})
