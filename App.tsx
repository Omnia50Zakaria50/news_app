import React, {useState} from 'react';
import HomeScreen from './components/HomeScreen';
import ArticleDetailScreen from './components/ArticleDetailScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function App(): JSX.Element {
  const [news, setNews] = useState([]);
  const [activeArticle, setActiveArticle] = useState(null);
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {props => (
            <HomeScreen
              {...props}
              news={news}
              setNews={setNews}
              setActiveArticle={setActiveArticle}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Details">
          {props => (
            <ArticleDetailScreen {...props} activeArticle={activeArticle} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
