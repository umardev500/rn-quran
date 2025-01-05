import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './AppNavigator';

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};
