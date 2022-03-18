import React, { useCallback } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../ThemeProvider'

interface TabBarOption<T> {
  label: string
  value: T
}

interface ToggleButtonProps<T> {
  option: TabBarOption<T>
  selected: boolean
  onPress(): void
  isTab?: boolean
}

function ToggleButton<T>(props: ToggleButtonProps<T>) {
  const { selected } = props
  const [{ theme }] = useTheme()

  const styles = useCallback(() => {
    return StyleSheet.create({
      button: {
        padding: 20,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        borderColor: theme.colors.input,
        backgroundColor: selected ? theme.colors.input : theme.colors.background,
      },
      text: {
        fontSize: 14,
        color: selected ? theme.colors.text : theme.colors.textDisabled,
      },
    })
  }, [theme, selected])

  return (
    <TouchableOpacity style={[styles().button]} onPress={props.onPress}>
      <Text style={[styles().text]}>{props.option.label}</Text>
    </TouchableOpacity>
  )
}

interface TabBarProps<T> {
  chosenOption: TabBarOption<T>
  options: TabBarOption<T>[]
  onPress(option: TabBarOption<T>): void
}

export default function TabBar<T>(props: TabBarProps<T>) {
  const [{ theme }] = useTheme()

  const styles = useCallback(() => {
    return StyleSheet.create({
      container: {
        flexDirection: 'row',
        borderRadius: 5,
        borderColor: theme.colors.input,
        borderWidth: 1,
      },
    })
  }, [theme])

  return (
    <View style={{ alignItems: 'flex-start' }}>
      <View style={styles().container}>
        {props.options.map((option: TabBarOption<T>, index) => {
          return (
            <ToggleButton
              key={`${option.value}:${index}`}
              option={option}
              selected={props.chosenOption.value === option.value}
              onPress={() => props.onPress(option)}
              isTab
            />
          )
        })}
      </View>
    </View>
  )
}
