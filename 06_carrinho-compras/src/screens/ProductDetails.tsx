import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { ProductDTO } from "../types/Product";
import { useCartContext } from "../contexts/CartContext";

type ProductDetailsProps = {
  route: {
    params: {
      product: ProductDTO;
    };
  };
};

const ProductDetails = ({ route }: ProductDetailsProps) => {
  const { product } = route.params; // Produto vindo da navegação
  const { addProduct } = useCartContext(); // Adiciona no carrinho
  const [quantity, setQuantity] = useState<number>(1); // Quantidade inicial como número

  // Função para incrementar a quantidade
  const increaseQuantity = () => setQuantity((prev) => prev + 1);

  // Função para decrementar a quantidade
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Função para adicionar o produto ao carrinho
  const handleAddToCart = () => {
    addProduct(product, quantity); // Chamada para adicionar o produto
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${(product.price * quantity).toFixed(2)}</Text>

      {/* Controles de quantidade */}
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          onPress={decreaseQuantity}
          style={styles.quantityButton}
        >
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.quantityText}>{quantity}</Text>

        <TouchableOpacity
          onPress={increaseQuantity}
          style={styles.quantityButton}
        >
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>

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
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 16,
  },
});
