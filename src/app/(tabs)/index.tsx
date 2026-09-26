import "@/app/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href="/onboarding"
        className="mt-4 rounded bg-primary p-4 text-white"
      >
        <Text>Go to Onboarding</Text>
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded bg-primary p-4 text-white"
      >
        <Text>Go to Sign In</Text>
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded bg-primary p-4 text-white"
      >
        <Text>Go to Sign Up</Text>
      </Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "123" },
        }}
        className="mt-4 rounded bg-primary p-4 text-white"
      >
        <Text>Go to Subscription</Text>
      </Link>
    </View>
  );
}
