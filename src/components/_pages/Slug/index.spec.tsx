// Assuming you are using Jest for testing
import React from 'react'
import { render, waitFor } from '@testing-library/react'
import Slug from './index'
import { dataMockPosts } from '../../../constants/dataMock/index'
import { ThemeProvider } from 'styled-components'
import { dark } from '../../../../test/config/theme-wrapper'
import { getTitleText } from '../../../../test/config/react-library'

const makeSut = (metadata, content, slug) => {
  return render(
    <ThemeProvider theme={dark}>
      <Slug metadata={metadata} content={content} slug={slug} />
    </ThemeProvider>
  )
}
test('renders Home component', async () => {
  const content = '<p>Sample content</p>'
  makeSut(dataMockPosts[0].metadata, content, dataMockPosts[0].metadata.slug)

  await waitFor(() => {
    expect(getTitleText()).toEqual(
      `${dataMockPosts[0].metadata.title} - Rahul Roy`
    )
  })
})
