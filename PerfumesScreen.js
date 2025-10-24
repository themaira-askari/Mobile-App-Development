import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CategoryCard from '../components/CategoryCard';
import Header from '../components/Header';

const PerfumesScreen = () => {
  const navigation = useNavigation();

  const categories = [
    {
      id: 1,
      title: 'Men Perfumes',
      color: '#2C3E50',
      description: 'Masculine and bold fragrances',
      screen: 'MenPerfumes',
      image: require('../../assets/47.jpeg'),
    },
    {
      id: 2,
      title: 'Women Perfumes',
      color: '#8E44AD',
      description: 'Feminine and elegant scents',
      screen: 'WomenPerfumes',
      image: require('../../assets/9.jpeg'),
    },
  ];

  const perfumeNotes = [
    '🌊 Aquatic & Fresh',
    '🌲 Woody & Earthy',
    '🌸 Floral & Sweet',
    '🍊 Citrus & Fruity'
  ];

  return (
    <View style={styles.container}>
      <Header title="Perfumes Collection" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Signature Scents</Text>
          <Text style={styles.heroSubtitle}>Find your perfect fragrance</Text>
        </View>

        <View style={styles.notes}>
          {perfumeNotes.map((note, index) => (
            <View key={index} style={styles.noteItem}>
              <Text style={styles.noteText}>{note}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Perfume Categories</Text>
          <Text style={styles.sectionDescription}>
            Explore our curated collection of fragrances for men and women
          </Text>
          
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
               image={category.image}
              onPress={() => navigation.navigate(category.screen)}
            />
          ))}
        </View>

        <View style={styles.tipSection}>
          <Text style={styles.tipTitle}>Fragrance Tip</Text>
          <Text style={styles.tipText}>
            Apply perfume to pulse points like wrists and neck for longer-lasting scent. 
            Store in cool, dark places to maintain fragrance quality.
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
    backgroundColor: '#8E44AD',
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
  notes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#F4ECF7',
  },
  noteItem: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    margin: 5,
    minWidth: '45%',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  noteText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#8E44AD',
    textAlign: 'center',
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
  tipSection: {
    padding: 20,
    backgroundColor: '#E8F6F3',
    margin: 15,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#1ABC9C',
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0E6251',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 14,
    color: '#0E6251',
    lineHeight: 20,
  },
});

export default PerfumesScreen;