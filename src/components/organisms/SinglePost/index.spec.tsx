// SinglePost.test.tsx

import React from 'react'
import {
  render,
  screen,
  fireEvent
} from '../../../../test/config/react-library'
import SinglePost from './index'
import { ThemeProvider, dark } from '../../../../test/config/theme-wrapper'
import mockRouter from 'next-router-mock'

jest.mock('next/router', () => jest.requireActual('next-router-mock'))

const makeSut = (metadata, content) => {
  return render(
    <ThemeProvider theme={dark}>
      <SinglePost metadata={metadata} content={content} />
    </ThemeProvider>
  )
}

describe('SinglePost Component', () => {
  it('copies URL to clipboard on share icon click', () => {
    const metadata = {
      category: 'Tech',
      title: 'Sample Title',
      time: '10:00',
      date: '2022-01-01',
      excerpt: 'Sample Excerpt'
    }
    const content = '<p>Sample content</p>'

    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn()
      }
    })

    makeSut(metadata, content)

    const shareIcon = screen.getByTestId('share-icon')
    fireEvent.click(shareIcon)

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      window.location.href
    )
  })

  it('navigates back on back link click', () => {
    const metadata = {
      category: 'Tech',
      title: 'Sample Title',
      time: '10:00',
      date: '2022-01-01',
      excerpt: 'Sample Excerpt'
    }
    const content = '<p>Sample content</p>'

    makeSut(metadata, content)
    const backLink = screen.getByTestId('back-to-list')
    fireEvent.click(backLink)

    expect(mockRouter).toMatchObject({
      asPath: '/',
      pathname: '/',
      query: {}
    })
  })
})
