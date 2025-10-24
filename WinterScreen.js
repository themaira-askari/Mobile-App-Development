import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CategoryCard from '../components/CategoryCard';
import Header from '../components/Header';

const WinterScreen = () => {
  const navigation = useNavigation();

  const subcategories = [
    {
      id: 1,
      title: 'Winter Pret Collection',
      color: '#3498DB',
      screen: 'WinterPret',
      image: require('../../assets/21.jpg'),
    },
    {
      id: 2,
      title: 'Winter Unstitched',
      color: '#2980B9',
      screen: 'WinterUnstitched',
      image: require('../../assets/23.jpeg'),
    },
  ];

  return (
    <View style={styles.container}>
      <Header title="Winter Collection" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Winter Fashion</Text>
          <Text style={styles.heroSubtitle}>Stay warm and stylish this season</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Winter Categories</Text>
          <Text style={styles.sectionDescription}>
            Explore our complete winter collection with ready-to-wear and custom options
          </Text>
          
          {subcategories.map((subcategory) => (
            <CategoryCard
              key={subcategory.id}
              title={subcategory.title}
              image={subcategory.image}
              onPress={() => navigation.navigate(subcategory.screen)}
            />
          ))}
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
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
  },
  section: {
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 20,
    marginBottom: 10,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#666',
    marginLeft: 20,
    marginBottom: 20,
    marginRight: 20,
    lineHeight: 20,
  },
});

export default WinterScreen;