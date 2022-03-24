import React, { useCallback } from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'
import { useTheme } from '../ThemeProvider'

export default function OuterContainer(props: ViewProps) {
  const [{ theme }] = useTheme()

  const styles = useCallback(() => {
    return StyleSheet.create({
      container: {
        alignItems: 'center',
        backgroundColor: theme.colors.background,
        flex: 1,
        justifyContent: 'center',
        padding: 16,
      },
    })
  }, [theme])

  return <View {...props} style={[styles().container, props.style]} />
}
