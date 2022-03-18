import React, { useCallback, useState } from 'react'
import { FlatList, LayoutChangeEvent, LayoutRectangle, TouchableOpacity, View } from 'react-native'
import Card from './Card'
import Loading from './Loading'

interface CardListProps<T> {
  data: T[]
  isLoading?: boolean
  onCardPressed?(item: T): void
  onRefresh?(): void
  onRenderCardContent(item: T): React.ReactNode
}

export default function CardList<T>(props: CardListProps<T>) {
  const { data, isLoading, onCardPressed, onRefresh, onRenderCardContent } = props
  const [layout, setLayout] = useState<LayoutRectangle>()

  function renderListItem(item: T) {
    const containerStyle = numColumns() === 1 ? { width: '100%', marginVertical: 5 } : { width: 228, marginHorizontal: 11, marginVertical: 5 }
    return (
      <TouchableOpacity disabled={!onCardPressed} onPress={() => onCardPressed?.(item)} style={containerStyle}>
        <Card>{onRenderCardContent(item)}</Card>
      </TouchableOpacity>
    )
  }

  const numColumns = useCallback(() => {
    return !!layout?.width ? Math.floor(layout.width / 250) : 1
  }, [layout])

  const onLayout = (event: LayoutChangeEvent) => setLayout(event.nativeEvent.layout)

  if (isLoading) {
    return <Loading />
  }

  return (
    <View style={{ width: '100%' }} onLayout={onLayout}>
      <FlatList<T>
        data={data}
        renderItem={({ item }) => renderListItem(item)}
        keyExtractor={(_, i) => `item-${i}`}
        numColumns={numColumns()}
        key={numColumns()}
        style={{ width: '100%' }}
        onRefresh={onRefresh}
        refreshing={isLoading}
      />
    </View>
  )
}
