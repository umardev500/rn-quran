import {MainNavigator} from '@navigation';
import './global.css';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView>
      <MainNavigator />
    </GestureHandlerRootView>
  );
};

export default App;
