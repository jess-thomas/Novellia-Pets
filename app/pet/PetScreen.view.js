import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import Item from "./Item";

export default function PetsScreenView({
  animalType,
  setAnimalType,
  petName,
  setPetName,
  breed,
  setBreed,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        style={styles.textInput}
        value={petName}
        onChangeText={setPetName}
      />
      <TextInput
        placeholder="Type"
        style={styles.textInput}
        value={animalType}
        onChangeText={setAnimalType}
      />
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
          },
          {
            recordType: "Vaccine",
            name: "HeartWorm",
            dateAdministered: "Oct 8th 2025",
          },
        ]}
        renderItem={({ item }) => (
          <Item name={item.name} type={item.recordType} />
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
  textInput: {
    backgroundColor: "#f0f0f0",
    borderWidth: 2,
    borderColor: "#052b53",
    padding: 10,
    borderRadius: 8,
    margin: 18,
  },
});
