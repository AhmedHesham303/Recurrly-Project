import { Text, View } from "react-native";
import { Link, useLocalSearchParams } from "../../../../.expo/types/router";

function Subscription() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>Subscription {id}</Text>
      <Link href="/">Go back</Link>
    </View>
  );
}

export default Subscription;
