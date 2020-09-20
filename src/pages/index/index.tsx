import React, { useState, useEffect } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'
import { example } from '../../api/index'
import { useStore, getState } from '../../model/index'

export default () => {
  const [text, setText] = useState('i am model')
  const [state, actions] = useStore('Example')

  const tapModel = async () => {
    try {
      await actions.toStandardTime(true)
      console.log('model right!', state, getState('Example'))
      setText(getState('Example').standardTime)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    console.log(666)
    ;(async () => {
      try {
        const data = await example()
        console.log(data.data, data.statusCode)
      } catch (error) {
        // console.log(error, 666)
      }
      // console.log(data, '-=-==-')
      // console.log(data.data, '-=-==-=-=')
    })()
  }, [])

  return (
    <View>
      <Text>{text}</Text>
      {/* <Text>{state.standardTime}</Text> */}
      <Button onClick={tapModel}>click me!</Button>
    </View>
  )
}
