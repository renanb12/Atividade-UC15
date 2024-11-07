// src/screens/ProductDetails.tsx
import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useCartContext } from "../contexts/CartContext";
import { ProductDTO } from "../types/Product";

const ProductDetails = () => {
  const route = useRoute();
  const { product } = route.params as { product: ProductDTO };
  const { addProduct } = useCartContext();

  const handleAddToCart = () => {
    addProduct(product);
    // Opcional: exibir uma mensagem de confirmação
    alert("Produto adicionado ao carrinho!");
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Button title="Adicionar ao Carrinho" onPress={handleAddToCart} />
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
  },
  price: {
    fontSize: 20,
    color: "green",
    marginVertical: 8,
  },
  description: {
    fontSize: 16,
    color: "gray",
  },
});
