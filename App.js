import { Urbanist_700Bold as UrbanistBold } from "@expo-google-fonts/urbanist";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
  AcademicCapIcon,
  CalendarDaysIcon,
  UserCircleIcon,
} from "react-native-heroicons/outline";
import EventsScreen from "./screens/events/EventsScreen";
import RecordsScreen from "./screens/records/RecordsScreen";
import ProfileScreen from "./screens/users/ProfileScreen";

const Tab = createBottomTabNavigator();
// SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    UrbanistBold,
  });

  // const onLayourRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  // Agregar a NavigationContainer ? onLayout={onLayourRootView}
  return (
    <>
      <StatusBar style="dark"></StatusBar>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Events"
            component={EventsScreen}
            options={{
              tabBarIcon: () => {
                return <CalendarDaysIcon color="gray" />;
              },
            }}
          ></Tab.Screen>
          <Tab.Screen
            name="Records"
            component={RecordsScreen}
            options={{
              tabBarIcon: () => {
                return <AcademicCapIcon color="gray" />;
              },
            }}
          ></Tab.Screen>
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: () => {
                return <UserCircleIcon color="gray" />;
              },
            }}
          ></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
