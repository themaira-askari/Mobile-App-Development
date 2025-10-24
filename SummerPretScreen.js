import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

const SummerPretScreen = () => {
  const summerPretProducts = [
    {
      id: 1,
      name: 'Cotton Dress',
      price: 3000,
      description: 'Flowly maxi dress with floral print',
      image: require('../../assets/16.jpg'), 
    },
    {
      id: 2,
      name: 'kurta salwar',
      price: 3500,
      description: 'Breathable linen shirt and pants',
      image: require('../../assets/18.jpeg'), 
    },
    {
      id: 3,
      name: 'Beach Cover-up',
      price: 3500,
      description: 'Lightweight beach cover-up',
      image: require('../../assets/19.jpg'), 
    },
    {
      id: 4,
      name: 'Summer Tunic',
      price: 2000,
      description: 'Casual tunic for everyday wear',
      image: require('../../assets/20.jpeg'), 
    },
    {
      id: 5,
      name: 'Sundress',
      price: 2999,
      description: 'Elegant sundress for special occasions',
      image: require('../../assets/15.jpg'), 
    },
  ];

  const handleAddToCart = (productName) => {
    alert(`"${productName}" added to cart! 🌞`);
  };

  return (
    <View style={styles.container}>
      <Header title="Summer Pret Collection" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Summer Ready-to-Wear</Text>
          <Text style={styles.heroSubtitle}>Light and stylish outfits for warm days</Text>
        </View>

        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{summerPretProducts.length}</Text>
            <Text style={styles.statLabel}>Products</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>⭐ 4.7</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>🏖️</Text>
            <Text style={styles.statLabel}>Beach Ready</Text>
          </View>
        </View>

        <View style={styles.productsGrid}>
          {summerPretProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
               image={product.image}
              onAddToCart={() => handleAddToCart(product.name)}
            />
          ))}
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>About Summer Pret</Text>
          <Text style={styles.infoText}>
            Our summer pret collection features breathable fabrics and vibrant designs perfect for 
            warm weather. Each outfit is designed for comfort and style, whether you're at the beach 
            or in the city.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  hero: {
    backgroundColor: '#E74C3C',
    padding: 25,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#FDEDEC',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#C0392B',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  infoSection: {
    padding: 20,
    backgroundColor: '#FDEDEC',
    margin: 15,
    borderRadius: 12,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#C0392B',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#C0392B',
    lineHeight: 20,
  },
});

export default SummerPretScreen;