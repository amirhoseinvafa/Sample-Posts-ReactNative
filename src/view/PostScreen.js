import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import useApi from '../hooks/useApi';
import GetPost from '../api/GetPostings';
import Posts from './Posts';

const PostsScreen = ({navigation}) => {
  const getListingsPosts = useApi(GetPost.GetPosts);

  const [data, setData] = useState([]);

  useEffect(() => {
    getListingsPosts.request().then((res) => setData(res.data));
  }, []);

  const alert = (id) => {
    Alert.alert('Delet posts', 'are you shure?', [
      {
        text: 'yes',
        onPress: () => {
          const temp = data.filter((item) => item.id !== id);
          setData([...temp]);
        },
      },
      {
        text: 'cancel',
        onPress: () => console.log('cancel press'),
      },
    ]);
  };
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        {data.map((item) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('OnePost', {itemId: item.id})}
            key={item.id}>
            <Posts item={item} navigation={navigation} press={alert} />
          </TouchableOpacity>
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
export default PostsScreen;
