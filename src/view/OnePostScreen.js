import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, ActivityIndicator} from 'react-native';
import GetPost from '../api/GetPostings';
import useApi from '../hooks/useApi';

import color from '../config/Colors';
import {ColorAndroid} from 'react-native/Libraries/StyleSheet/PlatformColorValueTypesAndroid';

const OnePost = ({route, navigation}) => {
  const {itemId} = route.params;
  const getOnePosting = useApi(GetPost.GetOnePost);
  const [data, setData] = useState([]);

  useEffect(() => {
    getOnePosting.request(itemId).then((res) => setData(res.data));
  }, []);

  return (
    <>
      {getOnePosting.loading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <View style={styles.card}>
            <View style={styles.cardTitle}>
              <Text style={styles.textTitle} numberOfLines={1}>
                {data.title}
              </Text>
            </View>
            <View>
              <Text style={styles.textBody}>{data.body}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                // onPress={() => press(item.id)}
                title="Delet post"
                color={color.deletButton}
              />
              <Button
                onPress={() => navigation.navigate('edit')}
                title="ADD"
                color={color.addButton}
              />
            </View>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 20,
    backgroundColor: '#e7e7e7',
    borderRadius: 20,
    minHeight: 300,
  },
  cardTitle: {
    width: '100%',
    height: 60,
    backgroundColor: '#FC9957',
    padding: 7,
  },
  textTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  textBody: {
    margin: 7,
    marginTop: 17,
    textAlign: 'justify',
  },
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 35,
    marginLeft: 10,
  },
});
export default OnePost;
