import React from 'react'
import {
  render,
  screen,
  fireEvent
} from '../../../../test/config/react-library'
import { ThemeProvider, dark } from '../../../../test/config/theme-wrapper'
import SearchBar from '.'
import { SearchContext } from '../../../contexts/searchContext'

const makeSut = (search, setSearch) => {
  return render(
    <ThemeProvider theme={dark}>
      <SearchContext.Provider value={{ search, setSearch }}>
        <SearchBar />
      </SearchContext.Provider>
    </ThemeProvider>
  )
}

describe('SearchBar component', () => {
  it('should render by default', () => {
    const setSearch = jest.fn()
    makeSut('', setSearch)
    const searchBarContainer = screen.queryByTestId('search-container')
    expect(searchBarContainer).toBeInTheDocument()
  })

  it('should display the search value from context', () => {
    const setSearch = jest.fn()
    makeSut('test search', setSearch)
    const searchInput = screen.queryByTestId('search-input')
    expect(searchInput).toHaveValue('test search')
  })

  it('should call setSearch with the input on change', () => {
    const setSearch = jest.fn()
    makeSut('', setSearch)
    const searchInput = screen.queryByTestId('search-input')

    if (searchInput) {
      fireEvent.change(searchInput, {
        target: { value: 'new search' }
      })
    }

    expect(setSearch).toHaveBeenCalledWith('new search')
  })
})
