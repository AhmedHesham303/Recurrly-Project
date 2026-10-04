import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import "@/app/global.css";
import { useFonts } from "expo-font";
export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Inter-ExtraBold": require("../../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "Inter-ExtraLight": require("../../assets/fonts/PlusJakartaSans-Light.ttf"),
    "Inter-Light": require("../../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Inter-Regular": require("../../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Inter-SemiBold": require("../../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
  });
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="subscriptions/[id]" />
    </Stack>
  );
}
