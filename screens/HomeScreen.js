import { View, Text, Image, TextInput, ScrollView, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  CogIcon,
  HomeIcon,
} from 'react-native-heroicons/outline';


export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Anupma",
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white w-full h-full">

      <ScrollView classNamew='w-full h-full'>
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
            className="h-20 w-20 mr-2 rounded-xl overflow-hidden flex justify-end"
          >
            <Text className='text-white font-medium p-2'>January</Text>
          </ImageBackground>

          <ImageBackground
            source={require("../assets/memories-home.jpg")}
            className="h-20 w-20 mr-2 rounded-xl overflow-hidden flex justify-end"
          >
            <Text className='text-white font-medium p-2'>February</Text>
          </ImageBackground>

          <ImageBackground
            source={require("../assets/memories-home.jpg")}
            className="h-20 w-20 mr-2 rounded-xl overflow-hidden flex justify-end"
          >
            <Text className='text-white font-medium p-2'>March</Text>
          </ImageBackground>

          <ImageBackground
            source={require("../assets/memories-home.jpg")}
            className="h-20 w-20 mr-2 rounded-xl overflow-hidden flex justify-end"
          >
            <Text className='text-white font-medium p-2'>April</Text>
          </ImageBackground>

          <ImageBackground
            source={require("../assets/memories-home.jpg")}
            className="h-20 w-20 mr-2 rounded-xl overflow-hidden flex justify-end"
          >
            <Text className='text-white font-medium p-2'>June</Text>
          </ImageBackground>

          <ImageBackground
            source={require("../assets/memories-home.jpg")}
            className="h-20 w-20 mr-2 rounded-xl overflow-hidden flex justify-end"
          >
            <Text className='text-white font-medium p-2'>July</Text>
          </ImageBackground>

        </ScrollView>

        <View className="p-4">
          <Text className="font-bold text-black text-xl mb-2">Pinned</Text>
          <View className='w-full h-auto flex-row flex-wrap gap-4'>
            <Image source={require("../assets/memories/memories-1.png")} className="h-28 w-28" />
            <Image source={require("../assets/memories/memories-2.png")} className="h-28 w-28" />
            <Image source={require("../assets/memories/memories-3.png")} className="h-28 w-28" />
            <Image source={require("../assets/memories/memories-4.png")} className="h-28 w-28" />
            <Image source={require("../assets/memories/memories-5.png")} className="h-28 w-28" />
            <Image source={require("../assets/memories/memories-6.png")} className="h-28 w-28" />
            <Image source={require("../assets/memories/memories-7.png")} className="h-28 w-28" />
            <Image source={require("../assets/memories/memories-8.png")} className="h-28 w-28" />
          </View>
        </View>

        <View className="p-4">
          <Text className="font-bold text-black text-xl mb-2">Album</Text>

          <View className='w-full h-auto flex-row flex-wrap gap-2'>

            <ImageBackground
              source={require("../assets/memories/memories-2.png")}
              className="h-28 w-28 mr-2 rounded-xl overflow-hidden flex justify-end"
            >
              <Text className='text-white font-medium p-2'>1. First Meet</Text>
            </ImageBackground>

            <ImageBackground
              source={require("../assets/memories/memories-3.png")}
              className="h-28 w-28 mr-2 rounded-xl overflow-hidden flex justify-end"
            >
              <Text className='text-white font-medium p-2'>2. Breakup</Text>
            </ImageBackground>

            <ImageBackground
              source={require("../assets/memories/memories-4.png")}
              className="h-28 w-28 mr-2 rounded-xl overflow-hidden flex justify-end"
            >
              <Text className='text-white font-medium p-2'>3. Pachup</Text>
            </ImageBackground>

          </View>
        </View>


      </ScrollView>

      <View className=" w-full h-16 bg-slate-200 sticky bottom-0">
        <HomeIcon color="black" fill="black" size={42} />
      </View>

    </SafeAreaView>
  )
}