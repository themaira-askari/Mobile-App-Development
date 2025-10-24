import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Header from '../components/Header';

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([
    { 
      id: 1, 
      name: 'Wool Blend Coat', 
      price: 129.99, 
      quantity: 1, 
      size: 'M',
      category: 'Winter Pret',
      image: '🧥'
    },
    { 
      id: 2, 
      name: 'Cotton Maxi Dress', 
      price: 59.99, 
      quantity: 2, 
      size: 'L',
      category: 'Summer Pret',
      image: '👗'
    },
    { 
      id: 3, 
      name: 'Ocean Breeze Perfume', 
      price: 89.99, 
      quantity: 1, 
      size: '100ml',
      category: 'Men Perfumes',
      image: '🧴'
    },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    Alert.alert(
      'Remove Item',
      'Are you sure you want to remove this item from your cart?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Remove', 
          style: 'destructive',
          onPress: () => {
            setCartItems(cartItems.filter(item => item.id !== id));
          }
        },
      ]
    );
  };

  const clearCart = () => {
    Alert.alert(
      'Clear Cart',
      'Are you sure you want to remove all items from your cart?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Clear All', 
          style: 'destructive',
          onPress: () => setCartItems([])
        },
      ]
    );
  };

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getShipping = () => {
    return getSubtotal() > 100 ? 0 : 9.99;
  };

  const getTotal = () => {
    return getSubtotal() + getShipping();
  };

  const proceedToCheckout = () => {
    if (cartItems.length === 0) {
      Alert.alert('Cart Empty', 'Please add items to your cart before checkout.');
      return;
    }
    Alert.alert(
      'Proceed to Checkout',
      `Total Amount: $${getTotal().toFixed(2)}`,
      [
        { text: 'Continue Shopping', style: 'cancel' },
        { 
          text: 'Checkout', 
          onPress: () => {
            Alert.alert('Order Placed!', 'Thank you for your purchase!');
            setCartItems([]);
          }
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping Cart" showCart={false} />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {cartItems.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>🛒</Text>
            <Text style={styles.emptyTitle}>Your cart is empty</Text>
            <Text style={styles.emptySubtitle}>
              Browse our collections and add some stylish items to your cart!
            </Text>
            <TouchableOpacity style={styles.shopButton}>
              <Text style={styles.shopButtonText}>Start Shopping</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <View style={styles.cartHeader}>
              <Text style={styles.cartTitle}>
                Your Cart ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
              </Text>
              <TouchableOpacity onPress={clearCart}>
                <Text style={styles.clearText}>Clear All</Text>
              </TouchableOpacity>
            </View>

            {cartItems.map((item) => (
              <View key={item.id} style={styles.cartItem}>
                <View style={styles.itemImage}>
                  <Text style={styles.itemIcon}>{item.image}</Text>
                </View>
                <View style={styles.itemDetails}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemCategory}>{item.category}</Text>
                  <Text style={styles.itemSize}>Size: {item.size}</Text>
                  <Text style={styles.itemPrice}>${item.price}</Text>
                </View>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity 
                    style={styles.quantityButton}
                    onPress={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{item.quantity}</Text>
                  <TouchableOpacity 
                    style={styles.quantityButton}
                    onPress={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.itemTotal}>
                  <Text style={styles.itemTotalPrice}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </Text>
                  <TouchableOpacity 
                    style={styles.removeButton}
                    onPress={() => removeItem(item.id)}
                  >
                    <Text style={styles.removeText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}

            <View style={styles.summary}>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Subtotal</Text>
                <Text style={styles.summaryValue}>${getSubtotal().toFixed(2)}</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Shipping</Text>
                <Text style={styles.summaryValue}>
                  {getShipping() === 0 ? 'FREE' : `$${getShipping().toFixed(2)}`}
                </Text>
              </View>
              {getSubtotal() < 100 && (
                <Text style={styles.shippingNote}>
                  Add ${(100 - getSubtotal()).toFixed(2)} more for free shipping!
                </Text>
              )}
              <View style={[styles.summaryRow, styles.totalRow]}>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalValue}>${getTotal().toFixed(2)}</Text>
              </View>
            </View>

            <TouchableOpacity 
              style={styles.checkoutButton}
              onPress={proceedToCheckout}
            >
              <Text style={styles.checkoutText}>Proceed to Checkout</Text>
            </TouchableOpacity>

            <View style={styles.promoSection}>
              <Text style={styles.promoTitle}>Special Offers</Text>
              <View style={styles.promoItem}>
                <Text style={styles.promoText}>🎁 Free gift on orders over $150</Text>
              </View>
              <View style={styles.promoItem}>
                <Text style={styles.promoText}>📦 Free shipping on orders over $100</Text>
              </View>
            </View>

            <View style={styles.secureSection}>
              <Text style={styles.secureIcon}>🔒</Text>
              <Text style={styles.secureText}>Secure checkout guaranteed</Text>
            </View>
          </>
        )}
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
    padding: 16,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 80,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
  },
  shopButton: {
    backgroundColor: '#8B4513',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  shopButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  clearText: {
    color: '#E74C3C',
    fontSize: 16,
    fontWeight: '600',
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  itemImage: {
    width: 60,
    height: 60,
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  itemIcon: {
    fontSize: 24,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  itemCategory: {
    fontSize: 12,
    color: '#8B4513',
    marginBottom: 2,
  },
  itemSize: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B4513',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  quantityButton: {
    width: 30,
    height: 30,
    backgroundColor: '#F8F9FA',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: '600',
    minWidth: 20,
    textAlign: 'center',
  },
  itemTotal: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  itemTotalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  removeButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  removeText: {
    color: '#E74C3C',
    fontSize: 12,
    fontWeight: '600',
  },
  summary: {
    backgroundColor: '#F8F9FA',
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#666',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  shippingNote: {
    fontSize: 14,
    color: '#27AE60',
    fontStyle: 'italic',
    marginBottom: 10,
    textAlign: 'center',
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    paddingTop: 10,
    marginTop: 5,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8B4513',
  },
  checkoutButton: {
    backgroundColor: '#27AE60',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  promoSection: {
    padding: 15,
    backgroundColor: '#FFF3CD',
    marginTop: 15,
    borderRadius: 8,
  },
  promoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#856404',
    marginBottom: 10,
  },
  promoItem: {
    marginBottom: 5,
  },
  promoText: {
    fontSize: 14,
    color: '#856404',
  },
  secureSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  secureIcon: {
    marginRight: 8,
  },
  secureText: {
    fontSize: 14,
    color: '#666',
  },
});

export default CartScreen;