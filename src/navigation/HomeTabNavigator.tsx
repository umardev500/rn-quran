import {getTabBarIcon} from '@components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, SearchScreen, SettingScreen, SurahScreen} from '@screens';

const Tab = createBottomTabNavigator();

export const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#b91c1c',
        tabBarStyle: {
          minHeight: 56,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 2,
        },
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
