import "@/app/global.css";
import { Link } from "expo-router";
import { Text } from "react-native";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
export default function App() {
  return (
    <SafeAreaView>
      <Text className="text-5xl text-primary font-sans-extrabold ">Home</Text>
      <Link
        href="/onboarding"
        className="mt-4 rounded bg-primary p-4 text-white font-sans-extrabold"
      >
        <Text>Go to Onboarding</Text>
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded bg-primary p-4 text-white font-sans-bold"
      >
        <Text>Go to Sign In</Text>
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded bg-primary p-4 text-white font-sans-bold"
      >
        <Text>Go to Sign Up</Text>
      </Link>
    </SafeAreaView>
  );
}
