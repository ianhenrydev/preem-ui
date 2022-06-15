import React, { ReactNode, useMemo } from 'react'
import { StyleSheet, View } from 'react-native'
import { useTheme } from '../ThemeProvider'
import Text from './Text'

interface IProps {
  text: string
  children?: ReactNode
}

export default function Header(props: IProps) {
  const { text } = props
  const [{ theme }] = useTheme()

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        padding: 16,
        borderBottomColor: theme.colors.border,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        width: '100%',
        justifyContent: 'flex-start',
      },
      text: {
        fontSize: 22,
      },
    })
  }, [theme])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      {props.children}
    </View>
  )
}
