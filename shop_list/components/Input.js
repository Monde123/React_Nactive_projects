import { View, StyleSheet, TextInput } from "react-native";

const Input = ({ prdoucts, addProducts }) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder="nouveau produit"
      value={prdoucts}
      multiline={true}
      onChangeText={(value) => addProducts(value)}
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    // flexDirection: "column",
    //flexGrow: 1,
  },
  textInput: {
    borderRadius: 10,
    borderColor: "purple",
    borderWidth: 1,
    padding: 10,
    justifyContent: "flex-start",
    fontSize: 18,
    width: "100%",
  },
});

export default Input;
