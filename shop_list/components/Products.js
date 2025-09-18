import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
const Products = ({ name, key, deleteProd }) => {
    return (
      <Pressable onPress={() => deleteProd(key)}>
        <View>
          <Text style={styles.elemnt}>{name}</Text>
        </View>
      </Pressable>
    );
  },
  styles = StyleSheet.create({
    elemnt: {
      borderRadius: 16,
      backgroundColor: "#daceceff",
      fontSize: 18,

      borderWidth: 1,
      borderColor: "purple",
      padding: 15,
      marginTop: 10,
    },
  });

export default Products;
