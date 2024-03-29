import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/LoginScreen";
import EditProfileScreen from "../screens/users/EditProfileScreen";
import NotificationScreen from "../screens/users/NotificationScreen";
import ProfileScreen from "../screens/users/ProfileScreen";

const Stack = createNativeStackNavigator();

function ProfileStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen}/>
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default ProfileStackNavigator;
