// Cart.tsx

import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useCartContext } from "../contexts/CartContext";

const Cart = () => {
  const { cart, addProduct, removeProduct } = useCartContext();

  return (
    <View style={styles.container}>
      {cart.map((item) => (
        <View key={item.product.id} style={styles.cartItem}>
          <Text style={styles.title}>{item.product.title}</Text>
          <Text style={styles.price}>${item.product.price}</Text>
          <TextInput
            style={styles.quantityInput}
            keyboardType="numeric"
            value={item.quantity.toString()}
            onChangeText={(text) => {
              const updatedQuantity = parseInt(text, 10);
              if (!isNaN(updatedQuantity) && updatedQuantity > 0) {
                const quantityDifference = updatedQuantity - item.quantity;
                addProduct(item.product, quantityDifference);
              }
            }}
          />
          <Button title="Remover" onPress={() => removeProduct(item.product.id)} />
        </View>
      ))}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: { padding: 16 },
  cartItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 8,
  },
  title: { fontSize: 18, fontWeight: "bold" },
  price: { fontSize: 16, color: "#888" },
  quantityInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 4,
    width: 60,
    marginVertical: 8,
  },
});
