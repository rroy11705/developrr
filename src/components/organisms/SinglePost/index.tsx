/* eslint-disable multiline-ternary */
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { MdShare } from 'react-icons/md'
import MainContent from '../../templates/MainContent'
import { Container } from './styles'

const SinglePost = ({ metadata, content }) => {
  const router = useRouter()
  const [urlCopied, setUrlCopied] = useState('')
  const [messageCopied, setMessageCopied] = useState('')
  const [scaleUpVerTop, setScaleUpVerTop] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(urlCopied)
    setMessageCopied('URL copied successfully')
    setScaleUpVerTop(true)
  }

  useEffect(() => {
    const textToCopy = window.location.href
    setUrlCopied(textToCopy)
  }, [])

  return (
    <Container>
      <MainContent>
        <div className="desktop">
          <div className="tag">{metadata.category}</div>
          <div className="text-content">
            <h1>{metadata.title}</h1>
            <h4>
              {metadata.time} • {metadata.date}
            </h4>
            <h3>{metadata.excerpt}</h3>

            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>
          <div className="backToList">
            <a data-testid="back-to-list" onClick={() => router.push('/')}>
              ← back to list
            </a>
            <div>
              <a onClick={handleCopy}>
                <MdShare size={30} data-testid="share-icon" />
              </a>
            </div>
          </div>
          <div className={`message scale-${scaleUpVerTop}`}>
            <div className="message-content">{messageCopied}</div>
          </div>
        </div>
      </MainContent>
    </Container>
  )
}

export default SinglePost
