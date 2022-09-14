import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MarketVehicles from './MarketVehicles'

const Drawer = createDrawerNavigator()
export default function SideMenus() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name='Market Vehicles' component={MarketVehicles}/>
    </Drawer.Navigator>
  )
}