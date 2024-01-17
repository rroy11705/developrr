// Assuming you are using Jest for testing
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Home from './index'
import { dataMockPosts } from '../../../constants/dataMock/index'
import { ThemeProvider } from 'styled-components'
import { dark } from '../../../../test/config/theme-wrapper'
import { getTitleText } from '../../../../test/config/react-library'

const makeSut = posts => {
  return render(
    <ThemeProvider theme={dark}>
      <Home posts={posts} />
    </ThemeProvider>
  )
}
test('renders Home component', async () => {
  makeSut(dataMockPosts)

  await waitFor(() => {
    expect(getTitleText()).toEqual('Rahul Roy - Web Developer')
  })
})
