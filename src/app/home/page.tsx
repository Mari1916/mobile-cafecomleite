import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./style";
import { Link } from "expo-router";

const menuItems = [
  {
    id: "1",
    name: "Fraputtino Avelã",
    description: "Café com creme de avelã.",
    price: 18.90,
    image: require("@/assets/images/avela.png"),
  },
  {
    id: "2",
    name: "Fraputtino Mocha",
    description: "Café com Mocha.",
    price: 32.00,
    image: require("@/assets/images/mocha.png"),
  },
  {
    id: "3",
    name: "Fraputtino Chocolate",
    description: "Café com Chocolate.",
    price: 42.50,
    image: require("@/assets/images/chocolate.png"),
  },
];

const MenuScreen = () => {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
        <Image style={styles.headerImage} source={require("@/assets/images/logo.png")}/>
        <Text style={styles.restaurantName}>Café com Leite</Text>
        <Text style={styles.restaurantOpcao}>A melhor cafeteria brasileira!</Text>
    </View>

    <View style={styles.tabs}>
        {["Combos", "Fraputtinos", "Bebidas Quentes", "Lanches"].map((item) => (
            <TouchableOpacity>
                <Text style={styles.tabsName}>{item}</Text>
            </TouchableOpacity>
        ))}
    </View>

    <ScrollView style={styles.menuList}>
            {
                menuItems.map((item) => (
                    <Link href={"/produtos/page"} asChild>
                  <TouchableOpacity style={styles.menuItem}>
                    <View style={styles.menuContent}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemDescription}>{item.description}</Text>
                        <Text style={styles.itemPrice}>{item.price.toFixed(2)}</Text>
                    </View>
                    <Image style={styles.itemImage} source={item.image}/>
                  </TouchableOpacity>  
                  </Link>
                ))
            }
            </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Café com Leite</Text>
        <Text style={styles.footerText}>Endereço: Rua dos Bolos, 000</Text>
        <Text style={styles.footerText}>Telefone: (11) 1234-5678</Text>
      </View>
    </View>
  );
};

export default MenuScreen;
