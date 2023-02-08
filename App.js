import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//ICONS
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
//components
import MainScreen from './screens/MainScreen';
import ShortsScreen from './screens/ShortsScreen';
import PublishScreen from './screens/PublishScreen';
import SubscriptionScreen from './screens/SubscriptionScreen';
import LibraryScreen from './screens/LibraryScreen';
import IconButton from './UI/IconButton';
import Input from './components/Input';

//Tabs
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MyTheme = {
  colors: {
    background: "#2f3e46"
  },
};

function BottomTabs() {
  

  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        tabBarStyle:{color:'#fff'},
        headerTintColor: "#fff",
        tabBarActiveTintColor:'#fff',
        headerRight: ({ tintColor }) => (
          <View style={{ flexDirection: "row" }}>
            <IconButton
              icon="notifications-outline"
              color={tintColor}
              size={24}
            />
            <IconButton 
              icon="search" 
              color={tintColor} 
              size={24} 
              // onPress={onPress}  
            />
          </View>
        ),
        headerLeft: () => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require('./assets/youtube-icon.png')} 
              style={{width:32, height:32, marginLeft:8}}
            />
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 24, marginLeft:2 }}>
              YouTube
            </Text>
          </View>
        ),
      })}
    >
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          title: "",
          tabBarLabel: "Main",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ShortsScreen"
        component={ShortsScreen}
        options={{
          title: "",
          tabBarLabel: "Shorts",
          tabBarIcon: () => (
            <Image
              source={require("./assets/shorts.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SubscriptionScreen"
        component={SubscriptionScreen}
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" size={36} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="LibraryScreen"
        component={LibraryScreen}
        options={{
          title: "",
          tabBarLabel: "Subscriptions",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="youtube-subscription"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PublishScreen"
        component={PublishScreen}
        options={{
          title: "",
          tabBarLabel: "Library",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="video-library" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="BottomTabs"
            component={BottomTabs}
            options={{
              headerShown:false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

