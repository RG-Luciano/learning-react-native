import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Login} from './pages/login'

const Stack = createStackNavigator();

export function Routes() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} 
        options={{headerShown:false}} />
      </Stack.Navigator>
  );
}
