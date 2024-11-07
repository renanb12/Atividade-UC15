import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ProductDTO } from "../types/Product";

interface CardProps {
  item: ProductDTO;
}

const ProductCard = ({ item }: CardProps) => {
  return (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>${item.price}</Text>
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
    borderRadius: 8,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    color: "#fff",
  },
});
