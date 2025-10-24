import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

const MenPerfumesScreen = () => {
  const menPerfumes = [
    {
      id: 1,
      name: 'Ocean Breeze',
      price: 4300,
      description: 'Fresh aquatic notes with musk',
      image: require('../../assets/49.jpeg'),
    },
    {
      id: 2,
      name: 'aqua tom',
      price: 7399,
      description: 'Earthy aquatic light weight base with musk',
      image: require('../../assets/52.jpeg'), 
    },
    {
      id: 3,
      name: 'Yard lay ',
      price: 5999,
      description: 'Zesty citrus with herbal notes',
      image: require('../../assets/46.jpeg'), 
    },
    {
      id: 4,
      name: 'black sauvage',
      price: 15499,
      description: 'for party wear best of uk ',
      image: require('../../assets/50.jpg'), 
    },
    {
      id: 5,
      name: 'Leather Accord',
      price: 7000,
      description: 'Bold leather with tobacco notes',
      image: require('../../assets/45.jpeg'), 
    },
    {
      id: 6,
      name: 'Aqua Marine',
      price: 9888,
      description: 'Fresh marine aquatic scent',
      image: require('../../assets/48.jpeg'), 
    },
  ];

  const handleAddToCart = (productName) => {
    alert(`"${productName}" added to cart! 🧴`);
  };

  return (
    <View style={styles.container}>
      <Header title="Men Perfumes" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Men's Fragrances</Text>
          <Text style={styles.heroSubtitle}>Bold and sophisticated scents</Text>
        </View>

        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{menPerfumes.length}</Text>
            <Text style={styles.statLabel}>Scents</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>⭐ 4.9</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>⏱️</Text>
            <Text style={styles.statLabel}>Long Lasting</Text>
          </View>
        </View>

        <View style={styles.notesInfo}>
          <Text style={styles.notesTitle}>Signature Notes</Text>
          <View style={styles.notesList}>
            <Text style={styles.note}>• Woody & Earthy</Text>
            <Text style={styles.note}>• Citrus & Fresh</Text>
            <Text style={styles.note}>• Spicy & Warm</Text>
            <Text style={styles.note}>• Aquatic & Clean</Text>
          </View>
        </View>

        <View style={styles.productsGrid}>
          {menPerfumes.map((perfume) => (
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
          <Text style={styles.infoTitle}>About Men's Fragrances</Text>
          <Text style={styles.infoText}>
            Our men's perfume collection features sophisticated scents with masculine character. 
            From fresh daytime fragrances to intense evening scents, find the perfect signature 
            fragrance that complements your style.
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
    backgroundColor: '#2C3E50',
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
  notesInfo: {
    padding: 20,
    backgroundColor: '#F4F6F6',
    margin: 15,
    borderRadius: 12,
  },
  notesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 10,
  },
  notesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  note: {
    fontSize: 14,
    color: '#2C3E50',
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
    backgroundColor: '#EBEDEF',
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

export default MenPerfumesScreen;