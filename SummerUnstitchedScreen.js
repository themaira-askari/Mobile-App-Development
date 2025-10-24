import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

const SummerUnstitchedScreen = () => {
  const summerUnstitchedProducts = [
    {
      id: 1,
      name: 'Cotton Voile',
      price: 2500,
      description: 'Light and sheer cotton voile',
      image: require('../../assets/24.jpg'),
    },
    {
      id: 2,
      name: 'Linen Fabric',
      price: 2999,
      description: 'Pure linen for breathable wear',
      image: require('../../assets/28.jpeg'),
    },
    {
      id: 3,
      name: 'Chiffon Material',
      price: 3999,
      description: 'Flowly chiffon for dresses',
      image: require('../../assets/29.jpeg'),
    },
    {
      id: 4,
      name: 'Georgette Fabric',
      price: 30.99,
      description: 'Crinkled georgette for formal wear',
      image: require('../../assets/32.jpg'),
    },
  ];

  const handleAddToCart = (productName) => {
    alert(`"${productName}" added to cart! 🌊`);
  };

  return (
    <View style={styles.container}>
      <Header title="Summer Unstitched" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Summer Fabrics</Text>
          <Text style={styles.heroSubtitle}>Create your perfect summer wardrobe</Text>
        </View>

        <View style={styles.features}>
          <Text style={styles.feature}>🌬️ Breathable</Text>
          <Text style={styles.feature}>💧 Quick Dry</Text>
          <Text style={styles.feature}>🎨 Summer Colors</Text>
          <Text style={styles.feature}>👗 Custom Fits</Text>
        </View>

        <View style={styles.productsGrid}>
          {summerUnstitchedProducts.map((product) => (
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
          <Text style={styles.infoTitle}>Summer Fabric Guide</Text>
          <Text style={styles.infoText}>
            All fabrics are 3-meter pieces perfect for complete summer outfits. 
            Choose from our premium collection of summer-appropriate materials.
          </Text>
          <View style={styles.serviceInfo}>
            <Text style={styles.serviceItem}>• UV Protection Available</Text>
            <Text style={styles.serviceItem}>• Color Safe in Sunlight</Text>
            <Text style={styles.serviceItem}>• Machine Wash Friendly</Text>
          </View>
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
    backgroundColor: '#C0392B',
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
  features: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#FDEDEC',
  },
  feature: {
    fontSize: 14,
    fontWeight: '600',
    color: '#C0392B',
    margin: 5,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 6,
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
    marginBottom: 15,
  },
  serviceInfo: {
    marginLeft: 10,
  },
  serviceItem: {
    fontSize: 14,
    color: '#C0392B',
    marginBottom: 5,
  },
});

export default SummerUnstitchedScreen;