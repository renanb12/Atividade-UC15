// ProductDetails.tsx

import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, Image } from "react-native";
import { ProductDTO } from "../types/Product";
import { useCartContext } from "../contexts/CartContext";

// Definindo o tipo para as props recebidas pelo componente
type ProductDetailsProps = {
  route: {
    params: {
      product: ProductDTO;
    };
  };
};

const ProductDetails = ({ route }: ProductDetailsProps) => {
  const { product } = route.params; // Produto vindo da navegação
  const { addProduct } = useCartContext(); // Função do contexto para adicionar ao carrinho
  const [quantity, setQuantity] = useState<string>("1"); // Tipando o estado como string

  // Função para adicionar o produto ao carrinho
  const handleAddToCart = () => {
    const parsedQuantity = parseInt(quantity, 10);
    if (parsedQuantity > 0 && !isNaN(parsedQuantity)) {
      addProduct(product, parsedQuantity); // Chamada para adicionar o produto
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <TextInput
        style={styles.quantityInput}
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
        placeholder="Quantidade"
      />
      <Button title="Adicionar ao Carrinho" onPress={handleAddToCart} />
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: "bold" },
  price: { fontSize: 20, color: "#888", marginVertical: 8 },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 16,
    borderRadius: 8,
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginVertical: 8,
    width: 100,
  },
});
