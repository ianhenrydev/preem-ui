import React, { useCallback } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { useTheme } from '../ThemeProvider'

interface LoadingProps {
  message?: string
}

export default function Loading(props: LoadingProps) {
  const [{ theme }] = useTheme()

  const styles = useCallback(() => {
    return StyleSheet.create({
      loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    })
  }, [theme])

  return (
    <View style={styles().loading}>
      <ActivityIndicator size="large" color={theme.colors.text} />
      {props.message && <Text style={{ color: 'white', fontSize: 18 }}>{props.message}</Text>}
    </View>
  )
}
