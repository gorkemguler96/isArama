import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { store } from './src/redux/store'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoryJobs from "./src/pages/FavoryJobs";
import Jobs from "./src/pages/Jobs";
import JobsDetail from "./src/pages/JobsDetail";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Provider store={store}>
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen name="JobsPage" component={Jobs} />
                  <Stack.Screen name="JobsDetail" component={JobsDetail} />
                  <Stack.Screen name="FavoryJobs" component={FavoryJobs} />
              </Stack.Navigator>
          </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
