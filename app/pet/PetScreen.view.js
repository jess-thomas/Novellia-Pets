import {
  Button,
  RefreshControl,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MedicalFormItem from "./components/MedicalFormItem";
import { PetProfileHeader } from "./components/PetProfileHeader";

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
  showDOBPicker,
  setShowDOBPicker,
  onChangeDate,
  dob,
  isEdit,
}) {
  const _renderButtons = () => (
    <View style={styles.buttonContainer}>
      <Button title="Save Pet" color={"#052b53"} onPress={() => savePress()} />
      <View style={{ margin: 10 }} />
      {isEdit && (
        <Button
          title="Delete Pet"
          color={"#531805"}
          onPress={() => deletePress()}
        />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
        ListHeaderComponent={
          <PetProfileHeader
            petName={petName}
            setPetName={setPetName}
            animalType={animalType}
            setAnimalType={setAnimalType}
            breed={breed}
            setBreed={setBreed}
            dob={dob}
            showDOBPicker={showDOBPicker}
            setShowDOBPicker={setShowDOBPicker}
            onChangeDate={onChangeDate}
            isEdit={isEdit}
            addMedicalRecordPress={addMedicalRecordPress}
          />
        }
        ListFooterComponent={_renderButtons}
        sections={medicalHistory}
        renderItem={({ item }) => (
          <MedicalFormItem
            name={item.name}
            date={item?.dateAdministered}
            dosage={item?.dosage}
            instructions={item?.instructions}
            medicalRecordDetailPress={medicalRecordDetailPress}
            medID={item.id}
            reactions={item?.reactions}
            severity={item?.severity}
          />
        )}
        keyExtractor={(item) => `KEY_${item.id}`}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.textTitle}>{title}</Text>
        )}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }
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
  image: {
    width: 300,
    height: 200,
    alignSelf: "center",
    marginVertical: 20,
    borderWidth: 2,
    borderColor: "#052b53",
    borderRadius: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#052b53",
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
  addButtonContainer: {
    borderRadius: 25,
    margin: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
});
