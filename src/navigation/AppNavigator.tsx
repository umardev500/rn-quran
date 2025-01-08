import {createStackNavigator} from '@react-navigation/stack';
import {HomeTabNavigator} from './HomeTabNavigator';
import {ReadScreen} from '@screens';
import {RootStackParamList} from '@typed';

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeTabs"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeTabs" component={HomeTabNavigator} />
      <Stack.Screen name="Read" component={ReadScreen} />
    </Stack.Navigator>
  );
};
