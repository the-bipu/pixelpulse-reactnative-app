import { View, Text, SafeAreaView, ImageBackground, Image } from 'react-native'
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
      
    // useEffect(() => {
    //     setTimeout(() => {
    //         navigation.navigate("Home");
    //     }, 4000);
    // }, []);

  return (
    <SafeAreaView className="flex items-center justify-center h-[100%] w-[100%] bg-white">

      <View className='w-[100%] h-[auto] flex-1 justify-center items-center mt-20'>
        <Image 
          source={require("../assets/get-started.png")}
          className="w-[80%] h-[auto] flex justify-center items-center m-2"
        />

        <Text className="flex-1 text-2xl font-bold text-center text-black">
          Memories 🍃
        </Text>
      </View>

          <View className='flex justify-start mb-10 bg-blue-400 w-[90%] h-[auto] m-5 rounded-xl p-5'>
            <Text className="text-2xl font-bold text-center text-black">
                Get Started
            </Text>
          </View>

      {/* <Progress.Circle size={60} indeterminate={true} color='black' /> */}

    </SafeAreaView>
  )
}

export default LoadingScreen