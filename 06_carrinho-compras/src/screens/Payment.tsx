// Payment.tsx

import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/types";

type PaymentProps = NativeStackScreenProps<RootStackParamList, "Payment">;

const Payment = ({ navigation }: PaymentProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Endereço de entrega:</Text>

      <TextInput placeholder="Endereço" style={styles.input} />
      <View style={styles.row}>
        <TextInput
          placeholder="Cidade"
          style={[styles.input, styles.halfInput]}
        />
        <TextInput
          placeholder="Estado"
          style={[styles.input, styles.halfInput]}
        />
      </View>

      <Text style={styles.sectionTitle}>Dados de pagamento:</Text>

      <TextInput
        placeholder="Número do cartão"
        style={styles.input}
        keyboardType="numeric"
      />
      <View style={styles.row}>
        <TextInput
          placeholder="Data de validade"
          style={[styles.input, styles.halfInput]}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="CVV"
          style={[styles.input, styles.halfInput]}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity
        style={styles.orderButton}
        onPress={() => navigation.navigate("OrderStatus")}
      >
        <Text style={styles.orderButtonText}>Finalizar pedido</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    marginVertical: 10,
  },
  input: {
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 12,
    color: "#FFF",
    fontSize: 16,
    marginVertical: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInput: {
    width: "48%",
  },
  orderButton: {
    backgroundColor: "#6A1B9A",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  orderButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
