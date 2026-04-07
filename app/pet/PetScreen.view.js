import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Item from "./components/Item";

export default function PetsScreenView({
  animalType,
  setAnimalType,
  petName,
  setPetName,
  breed,
  setBreed,
  savePress,
  deletePress,
}) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Name</Text>
        <TextInput
          placeholder="Name"
          style={styles.textInput}
          value={petName}
          onChangeText={setPetName}
        />
        <Text style={styles.textTitle}>Animal Type</Text>
        <TextInput
          placeholder="Type"
          style={styles.textInput}
          value={animalType}
          onChangeText={setAnimalType}
        />
        <Text style={styles.textTitle}>Breed</Text>
        <TextInput
          placeholder="Breed"
          style={styles.textInput}
          value={breed}
          onChangeText={setBreed}
        />
        <Text style={styles.title}>Date of Birth</Text>
        <Text style={styles.title}>Photo</Text>
        <Text style={styles.title}>Medical History</Text>
        <FlatList
          data={[
            {
              recordType: "Vaccine",
              name: "Rabies",
              dateAdministered: "Oct 8th 2022",
              id: "5",
            },
            {
              recordType: "Vaccine",
              name: "HeartWorm",
              dateAdministered: "Oct 8th 2025",
              id: 6,
            },
          ]}
          renderItem={({ item }) => (
            <Item name={item.name} type={item.recordType} />
          )}
          keyExtractor={(item) => `KEY_${item.id}`}
          ListEmptyComponent={<Text>No results</Text>}
          ItemSeparatorComponent={<View style={{ height: 5, margin: 5 }} />}
          horizontal
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Save"
            color={"#052b53"}
            style={styles.button}
            onPress={() => savePress()}
          />
          <Button
            title="Delete"
            color={"#531805"}
            style={styles.deleteButton}
            onPress={() => deletePress()}
          />
        </View>
      </View>
    </ScrollView>
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
  textTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 18,
    marginTop: 10,
    color: "#052b53",
  },
  textInput: {
    backgroundColor: "#f0f0f0",
    borderWidth: 2,
    borderColor: "#052b53",
    borderRadius: 8,
    marginHorizontal: 10,
    marginBottom: 10,
    fontSize: 18,
  },
  button: {
    borderRadius: 15,
    flex: 1,
  },
  deleteButton: {
    borderRadius: 15,
    marginLeft: 10,
    flex: 1,
  },
  buttonContainer: {
    padding: 10,
    borderRadius: 15,
    width: "50%",
    alignSelf: "center",
    marginBottom: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
