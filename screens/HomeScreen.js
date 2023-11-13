import { View, Text, Image, TextInput, ScrollView } from 'react-native';
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
    <SafeAreaView className="bg-white pt-1">

        <View className="flex-row pb-3 mx-1 items-center space-x-2 px-3">

            <Image
                source={{
                    uri: 'https://images.unsplash.com/photo-1699637341383-8a67b4d1adf3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }}
                className="h-10 w-full bg-gray-300"
            />

            <View>
                <Text className="font-bold text-black text-2xl">Home is here.</Text>
            </View>

          {/* <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/6833/6833605.png'
              }}
              className="h-8 w-8 bg-gray-300 p-4 rounded-full"
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliever Now!
            </Text>

            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>

          </View>

          <UserIcon size={35} color="#00CCBB" /> */}
        </View>

    </SafeAreaView>
  )
}