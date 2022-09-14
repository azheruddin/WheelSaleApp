import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from '../dealers/Search';
import SplashScreen from '../dealers/SplashScreen';
import MainScreen from '../dealers/MainScreen';
import Login from '../dealers/Login';
import Signup from '../dealers/Signup';
import Subscription from '../dealers/Subscription';
import Account from '../dealers/Account';
import Tabs from './Tabs';
import AddVehicles from '../dealers/AddVehicles';
import ShowVehicles from '../dealers/ShowVehicles';
import MarketVehicles from '../dealers/MarketVehicles';
import Support from '../dealers/Support';
import Dashboard from '../dealers/Dashboard';
import SideMenus from '../dealers/SideMenus';
import SoldVehicles from '../dealers/SoldVehicles';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator initialRouteName="MainScreen">
=======
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen
          name="SideMenus"
          component={SideMenus}
          options={{headerShown: false}}
        />

>>>>>>> f3425c2bcef0021fe314c39fde7dcca95133248b
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Add Vehicles"
          component={AddVehicles}
          options={{headerShown: true,
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: '#fff',
            },
            headerStyle: {
              backgroundColor: '#00b8dc',
            },}}
        />

        <Stack.Screen
          name="Show Vehicles"
          component={ShowVehicles}
          options={{headerShown: true,
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: '#fff',
            },
            headerStyle: {
              backgroundColor: '#00b8dc',
            },}}
        />

        <Stack.Screen
          name="Market Vehicles"
          component={MarketVehicles}
          options={{headerShown: true,
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: '#fff',
            },
            headerStyle: {
              backgroundColor: '#00b8dc',
            },}}
        />

        <Stack.Screen
          name="Sold Vehicles"
          component={SoldVehicles}
          options={{headerShown: true,
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: '#fff',
            },
            headerStyle: {
              backgroundColor: '#00b8dc',
            },}}
        />

        <Stack.Screen
          name="Support"
          component={Support}
          options={{headerShown: true,
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: '#fff',
            },
            headerStyle: {
              backgroundColor: '#00b8dc',
            },}}
        />

        <Stack.Screen
          name="Subscription"
          component={Subscription}
          options={{headerShown: true,
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: '#fff',
            },
            headerStyle: {
              backgroundColor: '#00b8dc',
            },}}
        />

        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            headerTitleStyle: {
              color: '#fff',
            },
            headerStyle: {
              backgroundColor: '#833471',
            },
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Account"
          component={Account}
          options={{
            headerShown: true,
            headerRight: () => (
              <TouchableOpacity onPress={() => Auth().signOut()}>
                <Image
                  style={{backgroundColor: 'white', height: 35, width: 35}}
                  source={{
                    uri: logOutIcon,
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />

        {/* <Stack.Screen
          name="Notification"
          component={Notifications}
          options={{headerShown: false}}
        /> */}

        {/* <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: true,
            headerRight: () => (
              <TouchableOpacity onPress={() => alert('Please click EDIT PROFILE button.')}>
                <Image style={{backgroundColor: 'white',height: 40,width: 40,left: 10,}} source={{uri: profileEditIcon,}} />
              </TouchableOpacity>
            ),
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
