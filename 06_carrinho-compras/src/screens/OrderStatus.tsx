import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/types";

type OrderStatusProps = NativeStackScreenProps<
  RootStackParamList,
  "OrderStatus"
>;

const OrderStatus = ({ navigation }: OrderStatusProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.iconText}>ÍCONE</Text>
      </View>
      <Text style={styles.message}>Seu pedido foi realizado!</Text>
      <Text style={styles.subMessage}>Aguarde as informações da entrega!</Text>

      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.homeButtonText}>Ir para tela inicial</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderStatus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  iconContainer: {
    width: 100,
    height: 100,
    backgroundColor: "#6A1B9A",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginBottom: 20,
  },
  iconText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  message: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
    marginVertical: 10,
  },
  subMessage: {
    fontSize: 16,
    color: "#AAA",
    textAlign: "center",
    marginBottom: 30,
  },
  homeButton: {
    backgroundColor: "#6A1B9A",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    width: "80%",
  },
  homeButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
