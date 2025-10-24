import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

const WinterUnstitchedScreen = () => {
  const winterUnstitchedProducts = [
    {
      id: 1,
      name: 'Wool Suiting Fabric',
      price: 4300,
      description: '3-meter piece ',
      image: require('../../assets/35.jpeg'),
    },
    {
      id: 2,
      name: 'Winter Cotton Blend',
      price: 3500,
      description: 'Heavy cotton blend for shirts',
      image: require('../../assets/39.jpeg'),
    },
    {
      id: 3,
      name: 'Fleece Material',
      price: 4599,
      description: 'Soft fleece for hoodies and sweaters',
      image: require('../../assets/26.jpg'),
    },
    {
      id: 4,
      name: 'Thermal Fabric',
      price: 3200,
      description: 'Thermal insulated fabric',
      image: require('../../assets/41.jpeg'),
    },
    {
      id: 5,
      name: 'Tweed Cloth',
      price: 5200,
      description: 'Classic tweed for formal wear',
      image: require('../../assets/21.jpg'),
    },
    {
      id: 6,
      name: 'Flannel Fabric',
      price: 3899,
      description: 'Warm flannel for shirts and dresses',
      image: require('../../assets/19.jpg'),
    },
  ];

  const handleAddToCart = (productName) => {
    alert(`"${productName}" added to cart! 🧵`);
  };

  return (
    <View style={styles.container}>
      <Header title="Winter Unstitched" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Winter Fabrics</Text>
          <Text style={heroSubtitle}>Create your custom winter wardrobe</Text>
        </View>

        <View style={styles.features}>
          <Text style={styles.feature}>✂️ Custom Tailoring</Text>
          <Text style={styles.feature}>🧵 Premium Quality</Text>
          <Text style={styles.feature}>🔥 Thermal Properties</Text>
          <Text style={styles.feature}>🎨 Various Colors</Text>
        </View>

        <View style={styles.productsGrid}>
          {winterUnstitchedProducts.map((product) => (
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
          <Text style={styles.infoTitle}>Custom Tailoring Service</Text>
          <Text style={styles.infoText}>
            All fabrics come in standard 3-meter pieces suitable for complete outfits. 
            Consult with our recommended tailors for perfect custom fits.
          </Text>
          <View style={styles.serviceInfo}>
            <Text style={styles.serviceItem}>• Free Swatch Available</Text>
            <Text style={styles.serviceItem}>• Color Fast Guarantee</Text>
            <Text style={styles.serviceItem}>• Shrinkage Protected</Text>
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
    backgroundColor: '#2980B9',
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
    backgroundColor: '#F8F9FA',
  },
  feature: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2C3E50',
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
    backgroundColor: '#EBF5FB',
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
    marginBottom: 15,
  },
  serviceInfo: {
    marginLeft: 10,
  },
  serviceItem: {
    fontSize: 14,
    color: '#2C3E50',
    marginBottom: 5,
  },
});

export default WinterUnstitchedScreen;