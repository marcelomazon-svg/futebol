import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function TabLayout() {
  return( 
  <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#abda04',
        headerStyle: {
          backgroundColor: '#042200',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#ffffffea',
        },

      }}
  >
    <Tabs.Screen
       name="index" 
        options={{ title: 'TABELA', 
          tabBarIcon:({ color, focused }) => (
          <Ionicons name={focused ? 'football-sharp' : 'football-outline'} color={color} size={24} />
      ),
    }} 
    />
    <Tabs.Screen
       name="about"
        options={{ title: 'JOGOS',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name ={focused ? 'game-controller' : 'game-controller-outline'} color={color} size={24}/>
          ),
        }}/>
  </Tabs>
  );
}
