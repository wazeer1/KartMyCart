import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from './Background'
import { darkGreen } from '../Constants'
import Field from './Field'
import Btn from './Btn'

const Signup = (props) => {
  return (
    <Background>
        <View style={{alignItems:"center",width:460}}>
            <Text style = {{color:"white",fontSize:64,fontWeight:"bold", marginVertical:10}}>KartMyCart</Text>
        </View>
        <View style={{backgroundColor:"white",height:750,width:400,borderTopLeftRadius:130,paddingTop:100,alignItems:'center'}}>
            <Text style={{fontSize:40,color:"grey"}}>Welcome</Text>
            <Text style={{color:'grey',fontSize:19,fontWeight:"bold",marginBottom:20}}>Create your account</Text>
            <Field placeholder="username"/>
            <Field placeholder="phone"/>
            <Field placeholder="name"/>
            <Field placeholder="password"/>
            <Btn bgColor={darkGreen} textColor="white" btnLabel="Signup" Press={()=>props.navigation.navigate("Login")}/>
            <Text style={{color:"grey"}}>Already have Account?</Text><TouchableOpacity onPress={()=>props.navigation.navigate("Login")}><Text style={{color:'blue'}}>Login</Text></TouchableOpacity>
        </View>
    </Background>
  )
}

export default Signup