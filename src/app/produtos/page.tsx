import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import styles from './styles'

const informações = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/avela.png')} style={styles.image} />
      <Text style={styles.title}>Fraputino Avelã</Text>
      <Text style={styles.price}>R$ 45,40</Text>
      <Text style={styles.description}>Deliciosa bebida de café sabor avelã.</Text>
      <Text style={styles.ingredientsTitle}>Ingredientes:</Text>
      <Text style={styles.ingredients}>• Café{'\n'}• Leite{'\n'}• Gelo{'\n'}• Creme de avelã{'\n'}• Chantilli</Text>
      <Button title="ADICIONAR A SACOLA" color="brown" onPress={() => alert('Item adicionado!')}/>
    </View>
  );
};

export default informações;