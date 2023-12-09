/* eslint-disable multiline-ternary */
import Link from 'next/link'
import { BiMoon } from 'react-icons/bi'
import { MdSearch, MdWbSunny } from 'react-icons/md'
import { useGlobalContext } from '../../../contexts/globalContext'
import { Container } from './styles'

const MenuTop = () => {
  const { isLight, setIsLight } = useGlobalContext()

  return (
    <>
      <Container data-testid="menu-top">
        {isLight ? (
          <BiMoon
            onClick={() => setIsLight !== undefined && setIsLight(!isLight)}
            size={30}
            className="theme-icon"
            data-testid="moon-button"
          />
        ) : (
          <MdWbSunny
            onClick={() => setIsLight !== undefined && setIsLight(!isLight)}
            size={30}
            className="theme-icon"
            data-testid="sun-button"
          />
        )}
        <div className="header-profile">
          <h1>blog</h1>
        </div>
        <Link href="/explore">
          <a>
            <MdSearch size={30} />
          </a>
        </Link>
      </Container>
    </>
  )
}

export default MenuTop
