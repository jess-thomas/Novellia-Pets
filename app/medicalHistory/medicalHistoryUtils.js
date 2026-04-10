export const MEDICAL_FORM_TYPES = {
  VACCINE: "vaccine",
  ALLERGY: "allergy",
  MEDICATION: "medication",
};

export const getReactions = (hasRash, hasSwelling, hasHives, hasVomiting) => {
  const reactions = [];
  if (hasRash) reactions.push("rash");
  if (hasSwelling) reactions.push("swelling");
  if (hasHives) reactions.push("hives");
  if (hasVomiting) reactions.push("vomiting");

  return reactions;
};

export const getFormType = (date, instructions, severity) => {
  if (!!date) return MEDICAL_FORM_TYPES.VACCINE;
  if (!!severity) return MEDICAL_FORM_TYPES.ALLERGY;
  if (!!instructions) return MEDICAL_FORM_TYPES.MEDICATION;
};

export const getInitialMedicationValues = (type, pet, id) => {
  let name, dosage, instructions;
  if (type === MEDICAL_FORM_TYPES.MEDICATION) {
    const medication = pet?.medications?.find((item) => item.id == id);
    name = medication?.name ?? "";
    dosage = medication?.dosage ?? "";
    instructions = medication?.instructions ?? "";
  }
  return { name, dosage, instructions };
};

export const getInitialVaccineValues = (type, pet, id) => {
  let name, administeredDate;
  if (type === MEDICAL_FORM_TYPES.VACCINE) {
    const vaccine = pet?.vaccines?.find((item) => item.id == id);
    name = vaccine?.name ?? "";
    const isEdit = !!vaccine;
    console.warn(isEdit);
    administeredDate = isEdit
      ? new Date(vaccine?.dateAdministered)
      : new Date();
    console.warn(administeredDate);
  }
  return { name, administeredDate };
};

export const getInitialAllergyValues = (type, pet, id) => {
  let name, reactions, severity;
  let hasRash = false,
    hasHives = false,
    hasVomiting = false,
    hasSwelling = false;
  if (type === MEDICAL_FORM_TYPES.ALLERGY) {
    const allergy = pet?.allergies?.find((item) => item.id == id);
    name = allergy?.name ?? "";
    reactions = allergy?.reactions ?? [];
    if (reactions.find((item) => item === "rash")) hasRash = true;
    if (reactions.find((item) => item === "swelling")) hasSwelling = true;
    if (reactions.find((item) => item === "hives")) hasHives = true;
    if (reactions.find((item) => item === "vomiting")) hasVomiting = true;
    severity = allergy?.severity ?? "";
  }
  return {
    name,
    reactions,
    severity,
    hasRash,
    hasSwelling,
    hasHives,
    hasVomiting,
  };
};
