import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './homeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false, tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-variant-outline" color={color} size={size}/> ),
          }}
        />
        <Tab.Screen name="myCard" component={myCard} options={{headerShown: false, tabBarLabel: 'My Card',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-variant-outline" color={color} size={size}/> ),
          }}
        />
        <Tab.Screen name="statistics" component={Statistics} options={{headerShown: false, tabBarLabel: 'Statistics',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-variant-outline" color={color} size={size}/> ),
          }}
        />
        <Tab.Screen name="settings" component={Settings} options={{headerShown: false, tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-variant-outline" color={color} size={size}/> ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


