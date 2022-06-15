import React, { useMemo } from 'react'
import { Picker, PickerProps, StyleSheet } from 'react-native'
import { useTheme } from '../ThemeProvider'

export default function PreemPicker(props: PickerProps) {
  const [{ theme }] = useTheme()

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        backgroundColor: theme.colors.card,
        borderColor: theme.colors.card,
        borderRadius: 4,
        color: theme.colors.text,
        fontSize: 18,
        padding: 10,
        width: '100%',
      },
      item: {
        backgroundColor: theme.colors.card,
      },
    })
  }, [theme])

  return (
    <Picker style={styles.container} {...props}>
      <Picker.Item label="test" />
    </Picker>
  )
}
