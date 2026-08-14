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
  

  <Tabs.Screen
       name="toDoList"
        options={{ title: 'LISTA JOGADORES',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name ={focused ? 'list-circle' : 'list-circle-outline'} color={color} size={24}/>
          ),
        }}/>

         <Tabs.Screen
       name="edit"
        options={{ title: 'EDIÇÃO',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name ={focused ? 'camera' : 'camera-outline'} color={color} size={24}/>
          ),
        }}/>

         <Tabs.Screen
       name="BuscaCEP"
        options={{ title: 'ESTÁDIOS',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name ={focused ? 'location' : 'location-outline'} color={color} size={24}/>
          ),
        }}/>
  </Tabs>

   
  );
}
