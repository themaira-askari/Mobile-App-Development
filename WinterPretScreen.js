import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

const WinterPretScreen = () => {
  const winterPretProducts = [
    {
      id: 1,
      name: 'salwar kameez',
      price: 1800,
      description: 'Premium  blend with thermal lining',
      image: require('../../assets/34.jpeg'),
    },
    {
      id: 2,
      name: 'dress pant ',
      price: 2500,
      description: 'Soft knit sweater with pant',
      image: require('../../assets/30.jpeg'),
    },
    {
      id: 3,
      name: 'Thermal Jacket',
      price: 5099,
      description: 'Waterproof with thermal insulation',
      image: require('../../assets/31.jpeg'),
    },
    {
      id: 4,
      name: 'salwar kameez',
      price: 3599,
      description: 'Casual fleece  for everyday wear',
      image: require('../../assets/33.jpeg'),
    },
    {
      id: 5,
      name: 'Winter Blazer',
      price: 7000,
      description: 'Formal winter blazer for office wear',
      image: require('../../assets/27.jpeg'),
    },

  ];

  const handleAddToCart = (productName) => {
    alert(`"${productName}" added to cart! ❄️`);
  };

  return (
    <View style={styles.container}>
      <Header title="Winter Pret Collection" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Ready-to-Wear Winter</Text>
          <Text style={styles.heroSubtitle}>Stylish outfits for the cold season</Text>
        </View>

        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{winterPretProducts.length}</Text>
            <Text style={styles.statLabel}>Products</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>⭐ 4.8</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>🚚</Text>
            <Text style={styles.statLabel}>Free Delivery</Text>
          </View>
        </View>

        <View style={styles.productsGrid}>
          {winterPretProducts.map((product) => (
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
          <Text style={styles.infoTitle}>About Winter Pret</Text>
          <Text style={styles.infoText}>
            Our winter pret collection features ready-to-wear outfits designed for comfort and style in cold weather. 
            Each piece is crafted from premium materials to keep you warm while maintaining fashion elegance.
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
    backgroundColor: '#3498DB',
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
    backgroundColor: '#F8F9FA',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
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
    backgroundColor: '#E8F4FD',
    margin: 15,
    borderRadius: 12,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#2C3E50',
    lineHeight: 20,
  },
});

export default WinterPretScreen;