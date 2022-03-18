import { useCallback } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme } from '../ThemeProvider'
import Text from './Text'

interface ButtonProps {
  disabled?: boolean
  title: string
  onPress?(): void
}

export default function PreemButton(props: ButtonProps) {
  const { disabled, title, onPress } = props
  const [{ theme }] = useTheme()

  const styles = useCallback(() => {
    return StyleSheet.create({
      button: {
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: theme.colors.primary,
        alignItems: 'center',
        padding: 5,
        height: 45,
        justifyContent: 'center',
        marginTop: 5,
      },
      buttonText: {
        fontSize: 18,
      },
      disabled: {
        opacity: 0.4,
      },
    })
  }, [theme])

  return (
    <TouchableOpacity onPress={onPress} style={[styles().button, disabled ? styles().disabled : {}]} disabled={disabled}>
      <Text style={styles().button}>{title}</Text>
    </TouchableOpacity>
  )
}
