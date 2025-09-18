import { useFonts } from "expo-font";

import Products from "./components/Products";
import Input from "./components/Input";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Modal,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";

export default function App() {
  const [prdoucts, setProduct] = useState("");
  const [myprdoucts, setMyProduct] = useState([]);
  const [btnState, setButton] = useState(true);
  const [visible, setVisible] = useState(false);

  // --- chargement des fonts avec useFonts
  const [fontsLoaded] = useFonts({
    Bitcount: require("./assets/fonts/Bitcount.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  useEffect(() => {
    setButton(!(prdoucts && prdoucts.length > 1));
  }, [prdoucts]);

  const addProducts = (value) => {
    setProduct(value);
  };

  const submittedProduicts = () => {
    const id = Date.now().toString();
    setMyProduct((currentProducts) => [
      { key: id, name: prdoucts },
      ...currentProducts,
    ]);
    setProduct("");
    setVisible(false);
  };

  const deleteProd = (key) => {
    setMyProduct((currentProducts) =>
      currentProducts.filter((prod) => prod.key !== key)
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Modal visible={visible} transparent animationType="slide">
          <View style={styles.modal}>
            <View style={styles.modalBoxHeader}>
              <Text style={styles.textModalHeader}> Ajout de produit</Text>
            </View>
            <View style={styles.modalBoxBody}>
              <Input prdoucts={prdoucts} addProducts={addProducts} />
            </View>
            <View style={styles.modalBoxFooter}>
              <TouchableOpacity
                style={styles.bottomModalRed}
                onPress={() => {
                  setVisible(false);
                }}
              >
                <Text style={styles.modalBtnText}>Retour</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.bottomModalBlue}
                onPress={() => submittedProduicts()}
                disabled={btnState}
              >
                <Text style={styles.modalBtnText}>Valider</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Shopping List</Text>
        </View>

        <View style={styles.body}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setVisible(true)}
          >
            <Text style={styles.addButtonText}>Ajouter un produit</Text>
          </TouchableOpacity>

          <FlatList
            data={myprdoucts}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <Products
                name={item.name}
                deleteProd={() => deleteProd(item.key)}
              />
            )}
          />
        </View>

        <View style={styles.footer}>
          <Text
            style={{
              color: "white",
              fontSize: 20,
           
              fontFamily: "Bitcount",
            }}
          >
            Bottom Nav
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loading: { flex: 1, justifyContent: "center", alignItems: "center" },

  header: {
    paddingTop: 50,
    padding: 25,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  headerTitle: {
    color: "purple",
    fontSize: 25,
    fontFamily: "Bitcount", // <- n'as pas la variante Bold dans les fichiers
  },

  container: {
    flex: 1,
    height: "100%",
  },

  body: {
    height: "80%",
    backgroundColor: "#fbebebff",
    width: "100%",
    padding: 16,
    justifyContent: "center",
  },

  addButton: {
    borderRadius: 10,
    backgroundColor: "purple",
    width: "95%",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  footer: {
    backgroundColor: "purple",
    paddingBottom: 50,
    padding: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textModalHeader: {
    margin: 10,
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  modalBoxHeader: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 12,
    backgroundColor: "purple",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBoxBody: {
    backgroundColor: "#f7e5e5ff",
    padding: 24,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBoxFooter: {
    width: "80%",
    flexDirection: "row",
    backgroundColor: "purple",
    justifyContent: "space-between",
    padding: 15,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
  bottomModalBlue: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    width: "48%",
    backgroundColor: "green",
  },
  bottomModalRed: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    width: "48%",
    backgroundColor: "red",
  },
  modalBtnText: { color: "white", fontSize: 16, fontWeight: "bold" },
});
