import { View, Text, Image, TextInput, ScrollView, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    CogIcon,
 } from 'react-native-heroicons/outline';


export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
          headerTitle:"Anupma",
          headerShown: false,
        });
      }, []);

  return (
    <SafeAreaView className="bg-white w-full h-full">

        <ImageBackground
          source={require("../assets/memories-home.jpg")}
          className="w-full h-[300px]"
        >
          <View className='ml-5 mb-2 mt-4'>
            <Text className="font-bold text-white text-2xl">PixelPulse</Text>
          </View>
        </ImageBackground>

        <ScrollView 
          horizontal
          className='w-auto h-[100px] bg-[#ebedee] flex flex-row flex-initial p-2'
        >
          <ImageBackground
            source={require("../assets/memories-home.jpg")}
            className="h-[80px] w-[80px] mr-2 rounded-xl overflow-hidden flex justify-end"
          >
            <Text className='text-white font-medium p-2'>January</Text>
          </ImageBackground>

          <ImageBackground
            source={require("../assets/memories-home.jpg")}
            className="h-[80px] w-[80px] mr-2 rounded-xl overflow-hidden flex justify-end"
          >
            <Text className='text-white font-medium p-2'>February</Text>
          </ImageBackground>

          <ImageBackground
            source={require("../assets/memories-home.jpg")}
            className="h-[80px] w-[80px] mr-2 rounded-xl overflow-hidden flex justify-end"
          >
            <Text className='text-white font-medium p-2'>March</Text>
          </ImageBackground>

          <ImageBackground
            source={require("../assets/memories-home.jpg")}
            className="h-[80px] w-[80px] mr-2 rounded-xl overflow-hidden flex justify-end"
          >
            <Text className='text-white font-medium p-2'>April</Text>
          </ImageBackground>

          <ImageBackground
            source={require("../assets/memories-home.jpg")}
            className="h-[80px] w-[80px] mr-2 rounded-xl overflow-hidden flex justify-end"
          >
            <Text className='text-white font-medium p-2'>June</Text>
          </ImageBackground>

          <ImageBackground
            source={require("../assets/memories-home.jpg")}
            className="h-[80px] w-[80px] mr-2 rounded-xl overflow-hidden flex justify-end"
          >
            <Text className='text-white font-medium p-2'>July</Text>
          </ImageBackground>

        </ScrollView>

    </SafeAreaView>
  )
}