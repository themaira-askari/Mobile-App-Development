import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CategoryCard from '../components/CategoryCard';
import Header from '../components/Header';

const SummerScreen = () => {
  const navigation = useNavigation();

  const subcategories = [
    {
      id: 1,
      title: 'Summer Pret Collection',
      color: '#E74C3C',
      description: 'Ready-to-wear summer outfits',
      screen: 'SummerPret',
      image: require('../../assets/14.jpg'),
    },
    {
      id: 2,
      title: 'Summer Unstitched',
      color: '#C0392B',
      description: 'Light fabrics for custom tailoring',
      screen: 'SummerUnstitched',
      image: require('../../assets/22.jpg'),
    },
  ];

  const summerFeatures = [
    '🌞 Light & Breathable',
    '💧 Moisture Wicking',
    '🎨 Vibrant Colors',
    '🌊 Beach Ready'
  ];

  return (
    <View style={styles.container}>
      <Header title="Summer Collection" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Summer Vibes</Text>
          <Text style={styles.heroSubtitle}>Fresh and comfortable summer fashion</Text>
        </View>

        <View style={styles.features}>
          {summerFeatures.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summer Categories</Text>
          <Text style={styles.sectionDescription}>
            Discover our complete summer collection with ready-to-wear and custom options
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

        <View style={styles.tipSection}>
          <Text style={styles.tipTitle}>Summer Style Tip</Text>
          <Text style={styles.tipText}>
            Choose light fabrics like cotton and linen to stay cool and comfortable in the summer heat.
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
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
  },
  features: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#FDEDEC',
  },
  featureItem: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    margin: 5,
    minWidth: '45%',
    alignItems: 'center',
  },
  featureText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#C0392B',
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
    backgroundColor: '#FFF3CD',
    margin: 15,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#FFC107',
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#856404',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 14,
    color: '#856404',
    lineHeight: 20,
  },
});

export default SummerScreen;