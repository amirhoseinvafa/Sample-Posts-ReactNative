import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Posts = ({item, press, navigation}) => {
  return (
    <View style={styles.card} key={item.id}>
      <View style={styles.cardTitle}>
        <Text style={styles.textTitle} numberOfLines={1}>
          {item.title}
        </Text>
      </View>
      <View>
        <Text style={styles.textBody}>{item.body}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => press(item.id)}
          title="Delet post"
          color="#AB0000"
        />
        <Button
          onPress={() => navigation.navigate('edit')}
          title="ADD"
          color="#638200"
        />
      </View>
    </View>
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

export default Posts;
