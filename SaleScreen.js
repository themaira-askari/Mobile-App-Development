import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

const SaleScreen = () => {
  const saleProducts = [
    {
      id: 1,
      name: 'Winter dress',
      price: 3900,
      originalPrice: 5670,
      image: require('../../assets/36.jpg'), 
    },
    {
      id: 2,
      name: 'Summer Floral Dress',
      price: 3500,
      originalPrice: 5900,
      image: require('../../assets/37.jpeg'), 
    },
    {
      id: 3,
      name: 'formal wear dress',
      price: 6500,
      originalPrice: 7000,
      image: require('../../assets/38.jpeg'), 
    },
    {
      id: 4,
      name: 'salwar kameez ',
      price: 3000,
      originalPrice: 3400,
      image: require('../../assets/16.jpg'), 
    },
    {
      id: 5,
      name: 'Her by j.',
      price: 5999,
      originalPrice: 6500,
      image: require('../../assets/42.jpeg'), 
    },
     {
      id: 5,
      name: 'charlie de vesta',
      price: 10000,
      originalPrice: 12000,
      image: require('../../assets/43.jpg'), 
    },

     {
      id: 5,
      name: 'tom ford',
      price: 10999,
      originalPrice: 15000,
      image: require('../../assets/44.jpeg'), 
    },
  
  ];

  const handleAddToCart = (productName) => {
    alert(`Added ${productName} to cart!`);
  };

  return (
    <View style={styles.container}>
      <Header title="Sale Items" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>🎉 Massive Sale! 🎉</Text>
          <Text style={styles.heroSubtitle}>Up to 50% OFF on selected items</Text>
          <View style={styles.timer}>
            <Text style={styles.timerText}>Sale ends in 2 days!</Text>
          </View>
        </View>

        <View style={styles.productsGrid}>
          {saleProducts.map((product) => (
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
          <Text style={styles.infoTitle}>Sale Terms & Conditions</Text>
          <Text style={styles.infoText}>
            • Discounts apply to selected items only{'\n'}
            • Limited stock available{'\n'}
            • No additional coupons can be applied{'\n'}
            • Sale prices are valid until stock lasts
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
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    marginBottom: 15,
  },
  timer: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  timerText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  infoSection: {
    padding: 20,
    backgroundColor: '#FFF3CD',
    margin: 15,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#FFC107',
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#856404',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#856404',
    lineHeight: 20,
  },
});

export default SaleScreen;