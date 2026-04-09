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

export const getInitialMedicationValues = (type, pet) => {
  let name, dosage, instructions;
  if (type === MEDICAL_FORM_TYPES.MEDICATION) {
    const medication = pet?.medications?.[0];
    name = medication?.name ?? "";
    dosage = medication?.dosage ?? "";
    instructions = medication?.instructions ?? "";
  }
  return { name, dosage, instructions };
};
