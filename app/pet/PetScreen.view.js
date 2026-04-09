import { Picker } from "@react-native-picker/picker";
import {
  Button,
  RefreshControl,
  ScrollView,
  SectionList,
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
  addMedicalRecordPress,
  medicalHistory,
  isLoading,
  onRefresh,
  medicalRecordDetailPress,
  id,
}) {
  const _renderAnimalType = () => (
    <View style={styles.textInput}>
      <Picker
        selectedValue={animalType}
        onValueChange={(itemValue) => setAnimalType(itemValue)}
      >
        <Picker.Item label="Dog" value="dog" />
        <Picker.Item label="Cat" value="cat" />
        <Picker.Item label="Bird" value="bird" />
        <Picker.Item label="Bunny" value="bunny" />
        <Picker.Item label="Horse" value="horse" />
        <Picker.Item label="Lizard" value="lizard" />
      </Picker>
    </View>
  );

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
        {_renderAnimalType()}
        <Text style={styles.textTitle}>Breed</Text>
        <TextInput
          placeholder="Breed"
          style={styles.textInput}
          value={breed}
          onChangeText={setBreed}
        />
        <Text style={styles.textTitle}>Date of Birth</Text>
        <Text style={styles.textTitle}>Photo</Text>
        <Text style={[styles.textTitle, { alignSelf: "center" }]}>
          Medical History
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Add Medical Record"
            color={"#052b53"}
            style={styles.button}
            onPress={() => addMedicalRecordPress()}
          />
        </View>
        <SectionList
          sections={medicalHistory}
          renderItem={({ item }) => (
            <Item
              name={item.name}
              date={item?.dateAdministered}
              dosage={item?.dosage}
              instructions={item?.instructions}
              medicalRecordDetailPress={medicalRecordDetailPress}
              medID={item.id}
            />
          )}
          keyExtractor={(item) => `KEY_${item.id}`}
          ListEmptyComponent={<Text>No results</Text>}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.textTitle}>{title}</Text>
          )}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
          }
          horizontal
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Save Pet"
            color={"#052b53"}
            onPress={() => savePress()}
          />
          <View style={{ margin: 10 }} />
          <Button
            title="Delete Pet"
            color={"#531805"}
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
    marginBottom: 30,
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
  buttonContainer: {
    padding: 10,
    borderRadius: 15,
    margin: 25,
    flexDirection: "row",
    justifyContent: "center",
  },
});
