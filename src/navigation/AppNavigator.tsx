import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeTabNavigator} from './HomeTabNavigator';
import {ReadScreen} from '@screens';
import {RootStackParamList} from '@typed';

const Stack = createNativeStackNavigator<RootStackParamList>();

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
