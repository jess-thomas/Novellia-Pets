import { StyleSheet, Text, View } from "react-native";

export default function PetsScreenView({}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Overview of your Pets</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fbfaf261",
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    alignSelf: "center",
  },
});
