import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#666',
  },
  ingredientsTitle: {
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 5,
    fontSize: 26,
  },
  ingredients: {
    textAlign: 'left',
    color: '#444',
    fontSize: 20,
    marginBottom: 100,
  },
  buttonContainer: {
    marginTop: 10,
    width: '80%',
  },
});

export default styles;
