// Assuming you are using Jest for testing
import React from 'react'
import { render, waitFor } from '@testing-library/react'
import Explore from './index'
import { dataMockPosts } from '../../../constants/dataMock/index'
import { ThemeProvider } from 'styled-components'
import { dark } from '../../../../test/config/theme-wrapper'
import { getTitleText } from '../../../../test/config/react-library'

const makeSut = posts => {
  return render(
    <ThemeProvider theme={dark}>
      <Explore posts={posts} />
    </ThemeProvider>
  )
}
test('renders Home component', async () => {
  makeSut(dataMockPosts)

  await waitFor(() => {
    expect(getTitleText()).toEqual('Explore - Rahul Roy')
  })
})
