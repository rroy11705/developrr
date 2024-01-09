// HeadSeo/index.test.js

import React from 'react'
import {
  getLink,
  getMeta,
  getTitleText,
  render,
  waitFor
} from '../../../../test/config/react-library'
import HeadSeo from './index'
import { mockHeaders } from '../../../constants/dataMock/index'
import { HeadSeoProps } from './interface'

const makeSut = (header: HeadSeoProps) => {
  return render(
    <HeadSeo
      title={header.title}
      description={header.description}
      keyword={header.keyword}
      cover={header.cover}
      slug={header.slug}
      canonical={header.canonical}
    />
  )
}

describe('HeadSeo component', () => {
  it('renders HeadSeo component with description, keyword, slug and cover', async () => {
    const header = mockHeaders[0]
    makeSut(header)

    await waitFor(() => {
      expect(getMeta({ name: 'description' })).toEqual(header.description)
      expect(getMeta({ property: 'twitter:description' })).toEqual(
        header.description
      )
      expect(getMeta({ property: 'og:description' })).toEqual(
        header.description
      )
      expect(getMeta({ name: 'keywords' })).toEqual(header.keyword)
      expect(getMeta({ property: 'og:url' })).toEqual(header.slug)
      expect(getMeta({ property: 'twitter:url' })).toEqual(header.slug)
      expect(getMeta({ property: 'og:image' })).toEqual(header.cover)
      expect(getMeta({ property: 'twitter:image' })).toEqual(header.cover)
    })
  })

  it('renders HeadSeo component with title', async () => {
    const header = mockHeaders[0]
    makeSut(header)

    await waitFor(() => {
      expect(getTitleText()).toEqual(header.title)
    })
  })

  it('renders HeadSeo component with canonical link', async () => {
    const header = mockHeaders[0]
    makeSut(header)

    await waitFor(() => {
      expect(getLink({ rel: 'canonical' })).toEqual(header.canonical)
    })
  })
})
