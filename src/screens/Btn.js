import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Btn = ({bgColor,btnLabel,textColor,Press}) => {
  return (
    <TouchableOpacity style={{backgroundColor:bgColor,borderRadius:100,alignItems:'center',width:300,paddingVertical:5,marginVertical:10}} onPress={Press}>
        <Text style={{color:textColor,fontSize:25,fontWeight:'bold'}}>{btnLabel}</Text>
    </TouchableOpacity>
  )
}

export default Btn