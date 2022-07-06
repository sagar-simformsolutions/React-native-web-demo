import React from "react";
import {
  extendTheme,
  NativeBaseProvider,
  Text,
  useColorMode,
} from "native-base";
import { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import ProductList from "./ProductList";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetails from "./ProductDetails";
import PickerImage from "./PickerImageComponent";

const App = () => {
  const [darkMode, setDark] = useState(false);
  const { toggleColorMode } = useColorMode();
  // console.log(colorMode, '<== colorMode');

  const theme = extendTheme({
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: "dark",
    },
  });
  const Stack = createNativeStackNavigator();
  return (
    <NativeBaseProvider /* theme={theme} */>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={ProductList} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen name="PickerImage" component={PickerImage} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
