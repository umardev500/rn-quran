import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeTabNavigator} from './HomeTabNavigator';
import {ReadScreen} from '@screens';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Read"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeTabs" component={HomeTabNavigator} />
      <Stack.Screen name="Read" component={ReadScreen} />
    </Stack.Navigator>
  );
};
