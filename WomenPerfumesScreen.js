import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

const WomenPerfumesScreen = () => {
  const womenPerfumes = [
    {
      id: 1,
      name: 'Floral Elegance',
      price: 3999,
      description: 'Romantic floral bouquet',
      image: require('../../assets/1.jpeg'),
    },
    {
      id: 2,
      name: 'Versace',
      price: 10999,
      description: 'Warm vanilla with caramel notes',
      image: require('../../assets/2.jpeg'),
    },
    {
      id: 3,
      name: 'La Vie Est Belle',
      price: 18999,
      description: 'Fresh fruits with floral hints',
      image: require('../../assets/4.jpeg'),
    },
    {
      id: 4,
      name: 'Mystic Rose',
      price: 4000,
      description: 'Luxurious rose with musk',
      image: require('../../assets/5.jpeg'),
    },
    {
      id: 5,
      name: 'Gucci Bloom',
      price: 75988,
      description: 'Exotic jasmine with white flowers',
      image: require('../../assets/6.jpeg'),
    },
    {
      id: 6,
      name: 'Channel No 5',
      price: 45999,
      description: 'Calming lavender with herbs',
      image: require('../../assets/7.jpg'),
    },
  ];

  const handleAddToCart = (productName) => {
    alert(`"${productName}" added to cart! 💐`);
  };

  return (
    <View style={styles.container}>
      <Header title="Women Perfumes" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Women's Fragrances</Text>
          <Text style={styles.heroSubtitle}>Elegant and captivating scents</Text>
        </View>

        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{womenPerfumes.length}</Text>
            <Text style={styles.statLabel}>Scents</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>⭐ 4.8</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>✨</Text>
            <Text style={styles.statLabel}>Elegant</Text>
          </View>
        </View>

        <View style={styles.notesInfo}>
          <Text style={styles.notesTitle}>Signature Notes</Text>
          <View style={styles.notesList}>
            <Text style={styles.note}>• Floral & Romantic</Text>
            <Text style={styles.note}>• Fruity & Sweet</Text>
            <Text style={styles.note}>• Oriental & Spicy</Text>
            <Text style={styles.note}>• Fresh & Clean</Text>
          </View>
        </View>

        <View style={styles.productsGrid}>
          {womenPerfumes.map((perfume) => (
            <ProductCard
              key={perfume.id}
              name={perfume.name}
              price={perfume.price}
               image={perfume.image}
              onAddToCart={() => handleAddToCart(perfume.name)}
            />
          ))}
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>About Women's Fragrances</Text>
          <Text style={styles.infoText}>
            Our women's perfume collection offers a range of captivating scents from delicate florals 
            to intense oriental fragrances. Each perfume is crafted to enhance your personality and 
            leave a lasting impression.
          </Text>
        </View>

        <View style={styles.occasionSection}>
          <Text style={styles.occasionTitle}>Perfect For Every Occasion</Text>
          <View style={styles.occasionList}>
            <View style={styles.occasionItem}>
              <Text style={styles.occasionIcon}>💼</Text>
              <Text style={styles.occasionText}>Office</Text>
            </View>
            <View style={styles.occasionItem}>
              <Text style={styles.occasionIcon}>🎉</Text>
              <Text style={styles.occasionText}>Evening</Text>
            </View>
            <View style={styles.occasionItem}>
              <Text style={styles.occasionIcon}>💕</Text>
              <Text style={styles.occasionText}>Romantic</Text>
            </View>
            <View style={styles.occasionItem}>
              <Text style={styles.occasionIcon}>🏖️</Text>
              <Text style={styles.occasionText}>Casual</Text>
            </View>
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
    backgroundColor: '#8E44AD',
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
    color: '#8E44AD',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  notesInfo: {
    padding: 20,
    backgroundColor: '#F4ECF7',
    margin: 15,
    borderRadius: 12,
  },
  notesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8E44AD',
    marginBottom: 10,
  },
  notesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  note: {
    fontSize: 14,
    color: '#8E44AD',
    marginBottom: 5,
    width: '48%',
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  infoSection: {
    padding: 20,
    backgroundColor: '#F4ECF7',
    margin: 15,
    borderRadius: 12,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8E44AD',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#8E44AD',
    lineHeight: 20,
  },
  occasionSection: {
    padding: 20,
    backgroundColor: '#E8DAEF',
    margin: 15,
    borderRadius: 12,
  },
  occasionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8E44AD',
    marginBottom: 15,
    textAlign: 'center',
  },
  occasionList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  occasionItem: {
    alignItems: 'center',
  },
  occasionIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  occasionText: {
    fontSize: 12,
    color: '#8E44AD',
    fontWeight: '600',
  },
});

export default WomenPerfumesScreen;