import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeTabNavigator} from './HomeTabNavigator';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeTabs" component={HomeTabNavigator} />
    </Stack.Navigator>
  );
};
