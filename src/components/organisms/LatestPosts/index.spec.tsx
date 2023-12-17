// LatestPosts/index.test.js

import React from 'react'
import { render, screen } from '../../../../test/config/react-library'
import LatestPosts from './index'
import { ThemeProvider } from 'styled-components'
import { dark } from '../../../../test/config/theme-wrapper'
import { SearchContext } from '../../../contexts/searchContext'
import {
  dataMockPosts,
  dataMockSearchInPost
} from '../../../constants/dataMock/index'

const makeSut = (posts, search, setSearch) => {
  return render(
    <ThemeProvider theme={dark}>
      <SearchContext.Provider value={{ search, setSearch }}>
        <LatestPosts posts={posts} />
      </SearchContext.Provider>
    </ThemeProvider>
  )
}

describe('LatestPosts component', () => {
  it('renders LatestPosts component with posts', () => {
    const setSearch = jest.fn()
    makeSut(dataMockPosts, '', setSearch)

    const resultsTitle = screen.queryByText('Results found')
    const postCards = screen.queryAllByTestId('post-card-mini')

    expect(resultsTitle).toBeInTheDocument()
    expect(postCards).toHaveLength(3)
  })

  it('renders LatestPosts component with posts and filters search paramertes', () => {
    const setSearch = jest.fn()
    makeSut(dataMockPosts, dataMockSearchInPost.text, setSearch)

    const resultsTitle = screen.queryByText('Results found')
    const postCards = screen.queryAllByTestId('post-card-mini')

    expect(resultsTitle).toBeInTheDocument()
    expect(postCards).toHaveLength(dataMockSearchInPost.result)
  })
})
