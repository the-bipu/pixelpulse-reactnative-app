import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
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
    <SafeAreaView className="flex items-center justify-center">
        <ImageBackground
            source={require("../assets/pink-tree.jpg")}
            className="w-full h-full flex justify-end"
        >
            <View className='flex justify-start mb-10 bg-white w-[90%] h-[auto] m-5 rounded-full p-5'>
                <Text className="text-xl font-bold text-center text-black">
                    Hey Buddy !! 🚀
                </Text>

                <Text className="text-xl font-bold text-center text-black">
                    Waiting to connect to the server !!
                </Text>
            </View>
        </ImageBackground>

      {/* <Progress.Circle size={60} indeterminate={true} color='black' /> */}

    </SafeAreaView>
  )
}

export default LoadingScreen