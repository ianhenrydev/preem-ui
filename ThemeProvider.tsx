import React, { createContext, useContext, useReducer } from 'react'

interface ReactNavigationTheme {
  dark: boolean
  colors: {
    primary: string
    background: string
    card: string
    text: string
    border: string
    notification: string
  }
}

export interface PreemTheme extends ReactNavigationTheme {}

const darkBlueTheme: PreemTheme = {
  dark: true,
  colors: {
    primary: '#2a90fd',
    background: '#171b24',
    card: '#202632',
    text: '#fff',
    border: '#000',
    notification: '#2a90fd',
  },
}

interface IState {
  theme: PreemTheme
}

type Action = { type: 'setTheme'; payload: PreemTheme }

const ThemeContext = createContext({} as [IState, React.Dispatch<Action>])

const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case 'setTheme':
      return {
        ...state,
        theme: action.payload,
      }
    default:
      return state
  }
}

export const PreemThemeProvider = (props: { children: any; theme?: PreemTheme }) => {
  const { children, theme } = props
  const themeReducer = useReducer(reducer, { theme: theme || darkBlueTheme })
  return <ThemeContext.Provider value={themeReducer}>{children}</ThemeContext.Provider>
}

export const useTheme = (): [IState, React.Dispatch<Action> | null] => {
  if (!!ThemeContext) {
    return useContext(ThemeContext)
  }
  return [{ theme: darkBlueTheme }, null]
}
