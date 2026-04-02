import { FlatList, StyleSheet, Text, View } from "react-native";
import Item from "./Item";

export default function PetsScreenView({ pets, navigateToDetailScreen }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Overview of your Pets</Text>
      <FlatList
        data={pets}
        renderItem={({ item }) => (
          <Item
            name={item.name}
            type={item.type}
            onDetailPress={navigateToDetailScreen}
            id={item.id}
          />
        )}
        keyExtractor={(item) => `KEY_${item.id}`}
        ListEmptyComponent={<Text>No results</Text>}
        ItemSeparatorComponent={<View style={{ height: 5, margin: 5 }} />}
      />
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
