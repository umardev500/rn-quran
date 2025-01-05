import {getTabBarButton, getTabBarIcon} from '@components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, SearchScreen, SettingScreen, SurahScreen} from '@screens';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();
const BAR_HEIGHT = 56;

export const HomeTabNavigator = () => {
  const insets = useSafeAreaInsets();
  const barHeightWithInset = BAR_HEIGHT + insets.bottom;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#b91c1c',
        tabBarStyle: {
          height: barHeightWithInset,
        },
        tabBarItemStyle: {
          height: BAR_HEIGHT,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarButton: getTabBarButton,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: getTabBarIcon('home'),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: getTabBarIcon('search'),
        }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: getTabBarIcon('book5'),
        }}
        name="Surah"
        component={SurahScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: getTabBarIcon('settings'),
        }}
        name="Setting"
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
};
