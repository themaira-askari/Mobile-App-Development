import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CategoryCard = ({ title, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {image ? (
        <Image 
          source={image} 
          style={styles.image}
          onError={(error) => console.log('Image loading error:', error)}
        />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>📷</Text>
        </View>
      )}
      <View style={styles.overlay}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    height: 150,
    margin: '1%',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  placeholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 40,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CategoryCard;