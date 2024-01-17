// Assuming you are using Jest for testing
import React from 'react'
import { render, waitFor } from '@testing-library/react'
import Profile from './index'
import { ThemeProvider } from 'styled-components'
import { dark } from '../../../../test/config/theme-wrapper'
import { getTitleText } from '../../../../test/config/react-library'

const makeSut = () => {
  return render(
    <ThemeProvider theme={dark}>
      <Profile />
    </ThemeProvider>
  )
}
test('renders Home component', async () => {
  makeSut()

  await waitFor(() => {
    expect(getTitleText()).toEqual('Profile - Rahul Roy')
  })
})
