import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import WinterScreen from '../screens/WinterScreen';
import SummerScreen from '../screens/SummerScreen';
import PerfumesScreen from '../screens/PerfumesScreen';
import SaleScreen from '../screens/SaleScreen';
import WinterPretScreen from '../screens/WinterPretScreen';
import WinterUnstitchedScreen from '../screens/WinterUnstitchedScreen';
import SummerPretScreen from '../screens/SummerPretScreen';
import SummerUnstitchedScreen from '../screens/SummerUnstitchedScreen';
import MenPerfumesScreen from '../screens/MenPerfumesScreen';
import WomenPerfumesScreen from '../screens/WomenPerfumesScreen';
import CartScreen from '../screens/CartScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#8B4513',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Fashion Flair' }}
        />
        <Stack.Screen 
          name="Winter" 
          component={WinterScreen}
          options={{ title: 'Winter Collection' }}
        />
        <Stack.Screen 
          name="Summer" 
          component={SummerScreen}
          options={{ title: 'Summer Collection' }}
        />
        <Stack.Screen 
          name="Perfumes" 
          component={PerfumesScreen}
          options={{ title: 'Perfumes Collection' }}
        />
        <Stack.Screen 
          name="Sale" 
          component={SaleScreen}
          options={{ title: 'Sale Items' }}
        />
        
        {/* Winter Subcategories */}
        <Stack.Screen 
          name="WinterPret" 
          component={WinterPretScreen}
          options={{ title: 'Winter Pret Collection' }}
        />
        <Stack.Screen 
          name="WinterUnstitched" 
          component={WinterUnstitchedScreen}
          options={{ title: 'Winter Unstitched' }}
        />
        
        {/* Summer Subcategories */}
        <Stack.Screen 
          name="SummerPret" 
          component={SummerPretScreen}
          options={{ title: 'Summer Pret Collection' }}
        />
        <Stack.Screen 
          name="SummerUnstitched" 
          component={SummerUnstitchedScreen}
          options={{ title: 'Summer Unstitched' }}
        />
        
        {/* Perfumes Subcategories */}
        <Stack.Screen 
          name="MenPerfumes" 
          component={MenPerfumesScreen}
          options={{ title: 'Men Perfumes' }}
        />
        <Stack.Screen 
          name="WomenPerfumes" 
          component={WomenPerfumesScreen}
          options={{ title: 'Women Perfumes' }}
        />
        
        <Stack.Screen 
          name="Cart" 
          component={CartScreen}
          options={{ title: 'Shopping Cart' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;