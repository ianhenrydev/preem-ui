import React, { useCallback } from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'
import { useTheme } from '../ThemeProvider'

export default function PreemTextInput(props: TextInputProps) {
  const [{ theme }] = useTheme()

  const styles = useCallback(() => {
    return StyleSheet.create({
      text: {
        color: theme.colors.text,
        fontSize: 18,
        width: '100%',
        padding: 10,
        backgroundColor: theme.colors.input,
        borderRadius: 4,
      },
    })
  }, [theme])

  return <TextInput {...props} style={[styles().text, props.style]} />
}
