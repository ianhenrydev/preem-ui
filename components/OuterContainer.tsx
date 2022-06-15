import React, { useMemo } from 'react'
import { SafeAreaView, StyleSheet, View, ViewProps } from 'react-native'
import { useTheme } from '../ThemeProvider'

export default function OuterContainer(props: ViewProps) {
  const [{ theme }] = useTheme()

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        alignItems: 'center',
        flex: 1,
      },
      safe: {
        flex: 1,
        backgroundColor: theme.colors.background,
      },
    })
  }, [theme])

  return (
    <SafeAreaView style={styles.safe}>
      <View style={[styles.container, props.style]} {...props} />
    </SafeAreaView>
  )
}
