export const getPetImage = (type) => {
  switch (type) {
    case "dog":
      return require("./images/dog.jpg");
    case "cat":
      return require("./images/cat.jpg");
    case "bird":
      return require("./images/bird.jpg");
    case "bunny":
      return require("./images/bunny.jpg");
    case "horse":
      return require("./images/horse.webp");
    case "lizard":
      return require("./images/lizard.webp");
    default:
      return;
  }
};
