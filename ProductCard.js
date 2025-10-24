import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ProductCard = ({ name, price, image, onAddToCart, isSale = false }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        {image ? (
          <Image source={image} style={styles.image} />
        ) : (
          <Text style={styles.imagePlaceholder}>📦</Text>
        )}
        {isSale && (
          <View style={styles.saleBadge}>
            <Text style={styles.saleText}>SALE</Text>
          </View>
        )}
      </View>
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={2}>{name}</Text>
        <Text style={styles.price}>Rs{price}</Text>
        <TouchableOpacity style={styles.button} onPress={onAddToCart}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '47%',
    backgroundColor: 'white',
    borderRadius: 12,
    margin: 5,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer: {
    width: '100%',
    height: 120,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imagePlaceholder: {
    fontSize: 40,
  },
  saleBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#FF4444',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  saleText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  info: {
    paddingTop: 4,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
    height: 40,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#8B4513',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default ProductCard;