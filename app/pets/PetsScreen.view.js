import {
  Button,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Item from "./components/Item";

export default function PetsScreenView({
  pets,
  onDetailPress,
  addNewPetPress,
  isLoading,
  onRefresh,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Overview of your Pets</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Add a Pet"
          color={"#052b53"}
          style={styles.button}
          onPress={() => addNewPetPress()}
        />
      </View>
      <FlatList
        data={pets}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => (
          <Item
            name={item.name}
            type={item.type}
            onDetailPress={onDetailPress}
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
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    alignSelf: "center",
  },
  button: {
    borderRadius: 15,
  },
  buttonContainer: {
    padding: 10,
    borderRadius: 15,
    width: "50%",
  },
});
