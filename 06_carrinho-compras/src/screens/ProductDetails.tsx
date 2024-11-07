import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../types/types";
import { ProductDTO } from "../types/Product";

type ProductDetailsRouteProp = RouteProp<RootStackParamList, "ProductDetails">;

const ProductDetails = () => {
  const route = useRoute<ProductDetailsRouteProp>();
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: "#888",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#333",
  },
});
