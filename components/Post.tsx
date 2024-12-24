import { View, Text, Image } from 'react-native'
import React from 'react'


const Post = () => {
  return (
    <View>
      <Text>Post</Text>
      <View>
      <View>
          <Text className="font-semibold"> John Doe</Text>
          <View><Text>21 minutes ago </Text></View>
      </View>
      </View>

    </View>
  )
}

export default Post