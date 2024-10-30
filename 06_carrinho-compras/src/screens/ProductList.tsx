import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { ProductDTO } from "../types/Product";
import ProductCard from "../components/ProductCard";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import axios from "axios";
import { RootStackParamList } from "../types/types";

const ProductList = () => {
  const [data, setData] = useState<ProductDTO[]>([]);
  const [productList, setProductList] = useState<ProductDTO[]>([]);
  const navigation = useNavigation<NavigationProp<RootStackParamList  >>();

  const fetchData = async () => {
    try {
      const response = await axios.get<ProductDTO[]>(
        "https://fakestoreapi.com/products"
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar produtos", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
       <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles}
          onPress={() => {
            // Navega para a tela de detalhes, passando o produto como parâmetro
            navigation.navigate("Details", { product: item });
          }}
        >
          <Image source={{ uri: item.image }} style={styles} />
          <View style={styles}>
            <Text style={styles}>{item.title}</Text>
            <Text style={styles}>${item.price}</Text>
          </View>
        </TouchableOpacity>
  );
};
}

export default ProductList;

const styles = StyleSheet.create({});
function setData(data: any) {
  throw new Error("Function not implemented.");
}

function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}
