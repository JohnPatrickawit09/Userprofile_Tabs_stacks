import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DashboardLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6200ea', // Active tab color
        tabBarInactiveTintColor: '#777', // Inactive tab color
        tabBarActiveBackgroundColor: '#f3f3f3', // Subtle active background
        tabBarLabelStyle: {
          fontSize: 14, // Increased label size
          fontWeight: '600', // Bold label text
        },
        tabBarStyle: {
          backgroundColor: '#fff', // White background
          paddingBottom: 10, // Adds some padding for spacing
          borderTopLeftRadius: 20, // Rounded corners
          borderTopRightRadius: 20, // Rounded corners
          elevation: 10, // Subtle shadow for a floating effect
          height: 70, // Increased tab bar height for better visuals
        },
        tabBarShowLabel: true, // Keep label visible
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              size={26}
              color={focused ? '#6200ea' : '#777'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'account' : 'account-outline'}
              size={26}
              color={focused ? '#6200ea' : '#777'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'cog' : 'cog-outline'}
              size={26}
              color={focused ? '#6200ea' : '#777'}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default DashboardLayout;
