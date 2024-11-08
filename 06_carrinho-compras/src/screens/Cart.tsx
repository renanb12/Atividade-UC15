import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCartContext } from "../contexts/CartContext";
import { RootStackParamList } from "../types/types";
import { StackNavigationProp } from "@react-navigation/stack";

const Cart = () => {
  const { cart, addProduct, removeProduct } = useCartContext();
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, "Cart">>();

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.product.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <View style={styles.container}>
      {cart.map((item) => (
        <View key={item.product.id} style={styles.cartItem}>
          <Text style={styles.title}>{item.product.title}</Text>
          <Text style={styles.price}>R$ {item.product.price.toFixed(2)}</Text>

          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => item.quantity > 1 && addProduct(item.product, -1)}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.quantityInput}
              value={item.quantity.toString()}
              keyboardType="numeric"
              editable={false}
            />
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => addProduct(item.product, 1)}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>

          <Button
            title="Remover"
            onPress={() => removeProduct(item.product.id)}
          />
        </View>
      ))}

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: R$ {calculateTotal()}</Text>
      </View>

      <TouchableOpacity
        style={styles.orderButton}
        onPress={() =>
          navigation.navigate("Payment", { total: calculateTotal() })
        }
      >
        <Text style={styles.orderButtonText}>Fazer Pedido</Text>
      </TouchableOpacity>
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
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    padding: 8,
    backgroundColor: "#ccc",
    borderRadius: 4,
    marginHorizontal: 4,
  },
  quantityButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 4,
    width: 40,
    textAlign: "center",
  },
  totalContainer: {
    marginVertical: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  orderButton: {
    backgroundColor: "#6A0DAD",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  orderButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
