import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Signup() {
  return (
    <View>
      <Text>sign-up</Text>
      <Link href="/(auth)/sign-in">Login</Link>
    </View>
  );
}
