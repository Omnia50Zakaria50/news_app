import {Image, ScrollView, Text, View} from 'react-native';

export default function ArticleDetailScreen({activeArticle}): JSX.Element {
  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          margin: 5,
          width: '100%',
          textAlign: 'center',
        }}>
        {activeArticle?.title}
      </Text>
      <Text
        style={{
          fontSize: 14,
          margin: 1,
          width: '100%',
          textAlign: 'center',
        }}>
        by: {activeArticle?.author} @ {activeArticle?.publishedAt.split('T')[0]}
      </Text>
      <Image
        defaultSource={
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
        }
        style={{width: '100%', height: 200}}
        source={{
          uri:
            activeArticle?.urlToImage ||
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
        }}
      />
      <View
        style={{
          display: 'flex',
          padding: 2,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            margin: 1,
            width: '100%',
          }}>
          {activeArticle?.content}
        </Text>
      </View>
    </ScrollView>
  );
}
