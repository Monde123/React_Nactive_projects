import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, FlatList } from "react-native";

export default function App() {
  const [prdoucts, setProduct] = useState();
  const [myprdoucts, setMyProduct] = useState([]);

  const addProducts = (value) => {
    setProduct(value);
  };

  const submittedProduicts = () => {
    const id=Date.now().toString();
    setMyProduct((currentProducts) => [ {key: id,name: prdoucts},...currentProducts]);
    setProduct('');
  
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="nouveau produit"
            value={prdoucts}
          onChangeText={addProducts}
        
        />
        <Button title="Valider"onPress ={() => submittedProduicts()} />
      </View>
      <FlatList data={myprdoucts} renderItem={({item})=> <Text style={styles.elemnt}>
             {item.name}
          </Text>} />
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60,
  },
  inputContainer: {
    flexDirection: "row",
  },
  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 5,
    paddingLeft: 9,
    fontSize: 18,
    flexGrow: 1,
  },
  items: {
    padding: 9,
  },
  elemnt: {
    backgroundColor: "green",
    fontSize: 18,
    color: "white",
    borderWidth: 1,
    borderColor: "red",
    padding: 20,
    marginTop: 10,
  },
});
