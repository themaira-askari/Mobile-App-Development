import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CategoryCard from '../components/CategoryCard';
import Header from '../components/Header';

const HomeScreen = () => {
  const navigation = useNavigation();

  const categories = [
    {
      id: 1,
      title: 'Winter Collection',
      screen: 'Winter',
      image: require('../../assets/40.jpg'),
    },
    {
      id: 2,
      title: 'Summer Collection',
      screen: 'Summer',
      image:  require('../../assets/17.jpg'),
    },
    {
      id: 3,
      title: 'Perfumes Collection',
      screen: 'Perfumes',
      image: require('../../assets/51.jpeg'),
    },
    {
      id: 4,
      title: 'Sale Items',
      screen: 'Sale',
      image:require('../../assets/25.jpeg'),
    },
  ];

  return (
    <View style={styles.container}>
      <Header title="Fashion Flair" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Welcome to Fashion Flair</Text>
          <Text style={styles.heroSubtitle}>Discover Style That Defines You</Text>
        </View>

        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>Shop by Category</Text>
          <View style={styles.categoriesGrid}>
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                image={category.image} // ✅ IMAGE PASS KARNA
                onPress={() => navigation.navigate(category.screen)}
              />
            ))}
          </View>
        </View>

        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Why Choose Us?</Text>
          <View style={styles.features}>
            <View style={styles.feature}>
              <Text style={styles.featureIcon}>🚚</Text>
              <Text style={styles.featureText}>Free Shipping</Text>
            </View>
            <View style={styles.feature}>
              <Text style={styles.featureIcon}>💳</Text>
              <Text style={styles.featureText}>Secure Payment</Text>
            </View>
            <View style={styles.feature}>
              <Text style={styles.featureIcon}>↩️</Text>
              <Text style={styles.featureText}>Easy Returns</Text>
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
  heroSection: {
    backgroundColor: '#8B4513',
    padding: 30,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
  },
  categoriesSection: {
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 20,
    marginBottom: 15,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  featuresSection: {
    paddingVertical: 20,
    backgroundColor: '#F8F9FA',
    margin: 15,
    borderRadius: 12,
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  feature: {
    alignItems: 'center',
  },
  featureIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});

export default HomeScreen;