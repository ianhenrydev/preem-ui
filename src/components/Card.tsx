import { useCallback } from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'
import { useTheme } from '../ThemeProvider'

export default function Card(props: ViewProps) {
  const [{ theme }] = useTheme()

  const styles = useCallback(() => {
    return StyleSheet.create({
      card: {
        backgroundColor: theme.colors.card,
        borderRadius: 5,
        marginBottom: 15,
        padding: 16,
      },
    })
  }, [theme])

  return <View {...props} style={[styles().card, props.style]} />
}
