import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState
} from 'react'

type Props = {
  children: React.ReactNode
}

type ContextType = {
  isLight?: boolean
  setIsLight?: Dispatch<SetStateAction<boolean>>
}

export const GlobalContext = createContext<ContextType>({
  isLight: false,
  setIsLight: undefined
})

export const GlobalProvider = ({ children }: Props) => {
  const [isLight, setIsLight] = useState<boolean>(false)
  return (
    <GlobalContext.Provider
      value={{
        isLight,
        setIsLight
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}
