import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Background from './Background'
import { baseURL, darkGreen } from '../Constants'
import Field from './Field'
import Btn from './Btn'
import { Dimensions } from 'react-native';
import axios from 'axios'

const Login = (props) => {
    const [username,setUserName]=useState('')
    const [password,setPassword]=useState('')
    console.log(username)
    // const handleLogin = async()=>{
    //     try {
    //         const response = await axios.post(`${baseURL}accounts/login/`,{
    //             username:username,
    //             password : password
    //         });
    //         if(response.status==200){
    //             if(response.data.StatusCode==6000){
    //                 console.log(response.data);
    //             }
    //             else{
    //                 console.log(response.data);
    //             }
    //         }else{
    //             console.log(response);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    const handleLogin =()=> {
        console.log("helloworld");
        axios.post(`${baseURL}accounts/login`, {
            username: username,
            password: password
        }).then((response)=>{
            if(response.status == 200){
                console.log('20000000');
            }else{
                console.log(response);
            }
        })
    }

  return (
    <Background>
        <View style={{alignItems:"center",width:460}}>
            <Text style = {{color:"white",fontSize:64,fontWeight:"bold", marginVertical:10}}>Login</Text>
        </View>
        <View style={{backgroundColor:"white",height:Dimensions.get('window').height,width:Dimensions.get('window').width,borderTopLeftRadius:130,paddingTop:100,alignItems:'center'}}>
            <Text style={{fontSize:40,color:"grey"}}>Welcome Back</Text>
            <Text style={{color:'grey',fontSize:19,fontWeight:"bold",marginBottom:20}}>Login to your account</Text>
            <Field placeholder="Email / username" onChangeText={text=>setUserName(text)}/>
            <Field placeholder="password" onChangeText={pass=>setPassword(pass)}/>
            <Btn bgColor={darkGreen} textColor="white" btnLabel="Login" Press={handleLogin}/>
            <Text style={{color:"grey"}}>Don't have Account?</Text><TouchableOpacity onPress={()=>props.navigation.navigate("Signup")}><Text style={{color:'blue'}}>Signup</Text></TouchableOpacity>
        </View>
    </Background>
  )
}

export default Login