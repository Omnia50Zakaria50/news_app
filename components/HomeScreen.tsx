import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

export default function HomeScreen({
  navigation,
  news = [],
  setNews = () => {},
  setActiveArticle = () => {},
}): JSX.Element {
  const [keyword, setKeyword] = useState('bitcoin');
  const [refreshing, setRefreshing] = useState(false);

  const loadNews = async function () {
    let response = await Axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: keyword,
        apiKey: '5f18b36178fc41fcbd5a68db26f031bc',
      },
    });
    if (response.status === 200) {
      console.log(response.data);
      setNews([...response.data.articles]);
    }
  };

  return (
    <View>
      <TextInput
        style={{height: 40, margin: 12, borderWidth: 1, padding: 10}}
        onChangeText={setKeyword}
        value={keyword}
      />
      <Button
        title="search"
        onPress={() => {
          loadNews();
        }}></Button>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={loadNews} />
        }>
        {news.map((record, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setActiveArticle(state => {
                  let newState = {...record};
                  return newState;
                });
                navigation.navigate('Details');
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 2,
                  borderWidth: 1,
                  borderStyle: 'dashed',
                  borderColor: 'gray',
                }}>
                <Image
                  defaultSource={
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
                  }
                  style={{width: 50, height: 50}}
                  source={{
                    uri:
                      record?.urlToImage ||
                      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
                  }}
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                    width: '100%',
                    textAlign: 'center',
                  }}>
                  Article: {record.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
