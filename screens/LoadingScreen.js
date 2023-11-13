import { View, Text, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import * as Animatable from 'react-native-animatable'
// import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'

const LoadingScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
          headerTitle:"Loading",
          headerShown: false,
        });
    }, []);

    const handlePress = () => {
      navigation.navigate('HomeScreen');
    };
      
    // useEffect(() => {
    //     setTimeout(() => {
    //         navigation.navigate("Home");
    //     }, 4000);
    // }, []);

  return (
    <SafeAreaView className="flex items-center justify-center h-[100%] w-[100%] bg-white">

      <View className='w-[100%] h-[auto] flex justify-center items-center mt-14'>
        <Image 
          source={require("../assets/get-started.png")}
          className="w-[80%] h-[auto] flex justify-center items-center m-2"
        />

        <Text className="flex text-2xl font-bold text-center text-black">
          Memories 🍃
        </Text>
      </View>

      <TouchableOpacity className='flex justify-start bg-white border-blue-400 border-2 w-[90%] h-[auto] mt-10 mb-5 rounded-full p-4'>
        <Text className="text-2xl font-bold text-center text-black">
            Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        className='flex justify-start mb-10 bg-blue-400 w-[90%] h-[auto] rounded-full p-4'
        onPress={handlePress}
      >
        <Text className="text-2xl font-bold text-center text-white">
            Get Started
        </Text>
      </TouchableOpacity>

      <Text className='mx-16 text-center font-medium'>
        By Signing up you agree to the 
        <Text className='text-blue-800'> Terms of use </Text> 
        and 
        <Text className='text-blue-800'> Privacy policy</Text>
      </Text>

      {/* <Progress.Circle size={60} indeterminate={true} color='black' /> */}

    </SafeAreaView>
  )
}

export default LoadingScreen