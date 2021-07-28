import "react-native-gesture-handler";
import React from "react";
import StackNavigation from "./src/Navigation/StackNavigation";
import { ThemeProvider } from "./src/context/ThemeContext/ThemeContext";

const App = () => {
  return (
    <AppState>
        <StackNavigation />
    </AppState>
  );
};

const AppState = ({ children }: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
