import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Background from './Background'
import Btn from './Btn'
import { darkGreen } from '../Constants'

const Home = (props) => {
  const handleLog = ()=>{

  }
  const handleReg = ()=>{
    
  }
  return (
    <Background>
      <View style={{marginHorizontal:30,marginVertical:50,justifyContent:"center",height:'100%',fontWeight:'bold'}}>
        <Text style={{color:"white",fontSize:60}}>KartMyCart</Text>
        <Text style={{color:"white",fontSize:30,marginBottom:40}}>drop in your basket</Text>
        <View style={{alignItems:"center",width:"100%"}}>
        <Btn bgColor={darkGreen} textColor="white" btnLabel="Login" Press={()=>props.navigation.navigate("Login")}/>
        <Btn bgColor="white" textColor={darkGreen} btnLabel="Signup" Press={()=>props.navigation.navigate("Signup")}/>
      </View>
      </View>
    </Background>
  )
}
const styles = StyleSheet.create({})
export default Home