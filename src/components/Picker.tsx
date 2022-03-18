import React, { useCallback } from 'react'
import { Picker, PickerProps, StyleSheet } from 'react-native'
import { useTheme } from '../ThemeProvider'

export default function PreemPicker(props: PickerProps) {
  const [{ theme }] = useTheme()

  const styles = useCallback(() => {
    return StyleSheet.create({
      container: {
        backgroundColor: theme.colors.input,
        borderColor: theme.colors.input,
        borderRadius: 4,
        color: theme.colors.text,
        fontSize: 18,
        padding: 10,
        width: '100%',
      },
      item: {
        backgroundColor: theme.colors.input,
      },
    })
  }, [theme])

  return (
    <Picker style={styles().container} {...props}>
      <Picker.Item label="test" />
    </Picker>
  )
}
