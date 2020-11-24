import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, Alert} from 'react-native';

import GetPost from './src/api/getPostings';
import EditScreen from './src/navigat/EditScreen';
import Posts from './src/view/Posts';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosting();
  }, []);

  const loadPosting = async () => {
    const response = await GetPost.getPostings();
    setPosts(response.data);
  };

  // const getPosts = () => {
  //   const apiURL = 'https://jsonplaceholder.typicode.com/posts';
  //   fetch(apiURL)
  //     .then((response) => response.json())
  //     .then((data) => setPosts(data))
  //     .catch((err) => console.log(err));
  // };

  const alert = (id) => {
    Alert.alert('Delet posts', 'are you shure?', [
      {
        text: 'yes',
        onPress: () => {
          const temp = posts.filter((item) => item.id !== id);
          setPosts([...temp]);
        },
      },
      {
        text: 'cancel',
        onPress: () => console.log('press cancel'),
      },
    ]);
  };

  return (
    // <EditScreen />
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        {posts.map((item) => (
          <Posts item={item} press={alert} key={item.id} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 25,
    marginTop: 30,
  },
});

export default App;
