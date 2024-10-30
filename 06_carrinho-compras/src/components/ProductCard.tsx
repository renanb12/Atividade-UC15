import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ProductDTO } from "../types/Product";

interface CardProps {
  item: ProductDTO;
}

const ProductCard = ({ item }: CardProps) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{item.image}</Text>
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.text}>{item.price}</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#ce17e2",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 32,
    color: "#fff",
  },
});
