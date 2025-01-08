import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {ReadScreen} from '@screens';
import {RootStackParamList} from '@typed';
import {HomeTabNavigator} from './HomeTabNavigator';

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeTabs"
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="HomeTabs" component={HomeTabNavigator} />
      <Stack.Screen name="Read" component={ReadScreen} />
    </Stack.Navigator>
  );
};
