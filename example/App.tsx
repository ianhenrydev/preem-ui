import { Card, Fab, InnerContainer, Label, Loading, OuterContainer, Text, TextInput, ThemeProvider } from 'preem-ui'
import React from 'react'

export default function App() {
  return (
    <ThemeProvider>
      <OuterContainer>
        <InnerContainer>
          <Label text="Text">
            <Text>This is some sample text</Text>
          </Label>
          <Label text="Card">
            <Card>
              <Text>This is some sample card Text</Text>
            </Card>
          </Label>
          <Label text="TextInput">
            <TextInput />
          </Label>
          <Label text="Loading">
            <Loading />
          </Label>
        </InnerContainer>
      </OuterContainer>
      <Fab />
    </ThemeProvider>
  )
}
