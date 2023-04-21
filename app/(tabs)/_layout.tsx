import { View, Pressable, useColorScheme } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
//* Styling
import Colors from '../../constants/Colors';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    screenOptions={{
      title: "",
      tabBarStyle: {
        borderTopWidth: 0,
        elevation: 0,
        backgroundColor: "transparent",
        position: "absolute"
      },
      tabBarBackground: () => (
        <View style={{ 
          flex: 1,
          shadowColor: "#000",
              shadowOffset: {
                width: -3,
                height: -27,
              },
              shadowOpacity: 1,
              shadowRadius: 16,
              elevation: 24,
        }}>
          <LinearGradient 
            start={{ x: 0, y: 0.5 }}
            end={{ x: 0, y: 0.5 }}
            colors={['rgba(0,0,0,0.3)', '#000']}
            style={{ height: 100 }}
          />
        </View>
      )
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialIcons name="home-filled" size={33} color={color} />,
          tabBarActiveTintColor: Colors.dark.text,
          tabBarInactiveTintColor: Colors.pallete.gray,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <MaterialIcons
                    name="info"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialIcons name="add" size={37} color={color} />,
          tabBarActiveTintColor: Colors.dark.text,
          tabBarInactiveTintColor: Colors.pallete.gray,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" size={33} color={color} />,
          tabBarActiveTintColor: Colors.dark.text,
          tabBarInactiveTintColor: Colors.pallete.gray,
        }}
      />
      <Tabs.Screen 
        name="search"
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialIcons name="search" size={33} color={color} />,
        }}
      />
    </Tabs>
  );
}
