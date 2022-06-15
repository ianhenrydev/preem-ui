import React, { useMemo } from 'react'
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme } from '../ThemeProvider'

interface Props {
  imageSource?: ImageSourcePropType
  onPress?(): void
}

export default function Fab(props: Props) {
  const { imageSource, onPress } = props
  const [{ theme }] = useTheme()

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        backgroundColor: theme.colors.primary,
        height: 72,
        width: 72,
        borderRadius: 48,
        alignItems: 'center',
        justifyContent: 'center',
      },
    })
  }, [theme])

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {imageSource && <Image source={imageSource} style={{ width: 48, height: 48 }} />}
    </TouchableOpacity>
  )
}
