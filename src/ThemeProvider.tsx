import React, { createContext, useContext, useReducer } from 'react'

type ThemeType = 'darkBlue' | 'light'

interface Theme {
  type: ThemeType
  colors: {
    background: string
    card: string
    input: string
    primary: string
    text: string
    textDisabled: string
  }
}

const darkBlueTheme: Theme = {
  type: 'darkBlue',
  colors: {
    background: '#171b24',
    card: '#202632',
    input: '#30394a',
    primary: '#2a90fd',
    text: '#fff',
    textDisabled: '#9E9E9E',
  },
}

const getTheme = (themeType: ThemeType): Theme => {
  switch (themeType) {
    case 'darkBlue':
      return darkBlueTheme
    case 'light':
      return {
        type: 'light',
        colors: {
          background: '#fff',
          card: '#E0E0E0',
          input: '#9E9E9E',
          primary: '#2a90fd',
          text: '#000',
          textDisabled: '#9E9E9E',
        },
      }
  }
}

interface IState {
  theme: Theme
}

type Action = { type: 'setTheme'; payload: ThemeType }

const ThemeContext = createContext({} as [IState, React.Dispatch<Action>])

const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case 'setTheme':
      return {
        ...state,
        theme: getTheme(action.payload),
      }
    default:
      return state
  }
}

export const ThemeProvider = ({ children }: any) => {
  const themeReducer = useReducer(reducer, { theme: darkBlueTheme })
  return <ThemeContext.Provider value={themeReducer}>{children}</ThemeContext.Provider>
}

export const useTheme = (): [IState, React.Dispatch<Action> | null] => {
  if (!!ThemeContext) {
    return useContext(ThemeContext)
  }
  return [{ theme: darkBlueTheme }, null]
}
