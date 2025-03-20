import { Tabs } from 'expo-router';
import { Package2, Backpack } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#E5E5EA',
        },
      }}>
      <Tabs.Screen
        name="equipment"
        options={{
          title: '내장비',
          tabBarIcon: ({ color, size }) => (
            <Package2 size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="backpack"
        options={{
          title: '배낭',
          tabBarIcon: ({ color, size }) => (
            <Backpack size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}