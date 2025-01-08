import {MainNavigator} from '@navigation';
import './global.css';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useEffect} from 'react';
import {copyQuranAssetsToDocuments} from '@utils';

const App = () => {
  // Copy the Quran database to the documents directory
  useEffect(() => {
    copyQuranAssetsToDocuments();
  }, []);

  return (
    <GestureHandlerRootView>
      <MainNavigator />
    </GestureHandlerRootView>
  );
};

export default App;
