import '@testing-library/jest-dom'
import {
  cleanup,
  render,
  screen,
  waitFor,
  fireEvent
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const getMetaContent = ({
  name,
  property
}: {
  name?: string
  property?: string
}) => {
  const metas = document.getElementsByTagName('meta')
  if (name) {
    for (let i = 0; i < metas.length; i += 1) {
      if (metas[i].getAttribute('name') === name) {
        return metas[i].getAttribute('content')
      }
    }
  } else if (property) {
    for (let i = 0; i < metas.length; i += 1) {
      if (metas[i].getAttribute('property') === property) {
        return metas[i].getAttribute('content')
      }
    }
  }
  return ''
}

const getLinkHref = ({ rel }: { rel?: string }) => {
  const links = document.getElementsByTagName('link')
  if (rel) {
    for (let i = 0; i < links.length; i += 1) {
      if (links[i].getAttribute('rel') === rel) {
        return links[i].getAttribute('href')
      }
    }
  }
  return ''
}

const getTitleText = () => {
  const title = document.getElementsByTagName('title')
  if (title) {
    return title.item(0).innerHTML
  }
  return ''
}

export {
  cleanup,
  render,
  waitFor,
  getMetaContent as getMeta,
  getLinkHref as getLink,
  getTitleText,
  screen,
  fireEvent,
  userEvent
}
