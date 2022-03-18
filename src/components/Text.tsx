import { useCallback } from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'
import { useTheme } from '../ThemeProvider'

export default function PreemText(props: TextProps) {
  const [{ theme }] = useTheme()

  const styles = useCallback(() => {
    return StyleSheet.create({
      text: {
        color: theme.colors.text,
      },
    })
  }, [theme])

  return <Text {...props} style={[styles().text, props.style]} />
}
