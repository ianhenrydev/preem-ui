import React, { useMemo } from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'
import { useTheme } from '../ThemeProvider'

export default function InnerContainer(props: ViewProps) {
  const [{ theme }] = useTheme()

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        maxWidth: 600,
        width: '100%',
      },
    })
  }, [theme])

  return <View {...props} style={[styles.container, props.style]} />
}
