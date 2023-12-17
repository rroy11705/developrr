// LatestPosts/index.test.js

import React from 'react'
import {
  render,
  screen,
  fireEvent
} from '../../../../test/config/react-library'
import LatestPosts from './index'
import { ThemeProvider } from 'styled-components'
import { dark } from '../../../../test/config/theme-wrapper'
import { dataMockPosts } from '../../../constants/dataMock/index'
import mockRouter from 'next-router-mock'

jest.mock('next/router', () => jest.requireActual('next-router-mock'))

jest.mock('../../../hooks/useWindowsize', () => () => ({
  width: 1200,
  height: 800
}))

const makeSut = posts => {
  return render(
    <ThemeProvider theme={dark}>
      <LatestPosts posts={posts} />
    </ThemeProvider>
  )
}

describe('LatestPosts component', () => {
  it('renders LatestPosts component with posts', () => {
    makeSut(dataMockPosts)

    const postCards = screen.queryAllByTestId('post-card')

    expect(postCards).toHaveLength(3)
  })
  it('renders explore button', () => {
    makeSut(dataMockPosts)

    const exploreIcon = screen.getByTestId('explore')

    expect(exploreIcon).toBeInTheDocument()
  })
  it('redirects to explore page on clicking explore', () => {
    makeSut(dataMockPosts)

    const exploreIcon = screen.getByTestId('explore')
    fireEvent.click(exploreIcon)

    expect(mockRouter).toMatchObject({
      asPath: '/explore',
      pathname: '/explore',
      query: {}
    })
  })
  it('renders correctly with window size', () => {
    const { container } = makeSut(dataMockPosts)

    expect(container).toMatchSnapshot()
  })
})
