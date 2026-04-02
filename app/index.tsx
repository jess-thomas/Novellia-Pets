import { View } from "react-native";
import WelcomeScreen from "./welcome/WelcomeScreen";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <WelcomeScreen />
    </View>
  );
}
