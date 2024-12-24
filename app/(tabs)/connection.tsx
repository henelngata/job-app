import { View, Text } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import Post from '@/components/Post'
const connection = () => {
  return (
   <SafeAreaView>
      <Text>Hello</Text>
      <Post/>
   </SafeAreaView>
  )
}

export default connection