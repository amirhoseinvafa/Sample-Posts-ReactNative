import React from 'react';
import {View, TextInput, StyleSheet, Button, Text} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import Colors from '../config/Colors';
import AppButton from '../component/AppButton';

const EditScreen = ({navigation}) => {
  const {control, handleSubmit, errors} = useForm();

  const onSubmit = () => navigation.navigate('posts');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={styles.textInput}
              onBlur={onBlur}
              placeholder="Title"
              onChangeText={(text) => onChange(text)}
              value={value}
            />
          )}
          name="addTitle"
          rules={{required: true}}
          defaultValue=""
        />
      </View>
      {errors.addTitle && <Text style={styles.errors}>This is requried.</Text>}
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={styles.textInput}
              onBlur={onBlur}
              placeholder="Body"
              onChangeText={(text) => onChange(text)}
              value={value}
              autoCorrect={false}
            />
          )}
          name="addBody"
          rules={{required: true}}
          defaultValue=""
        />
      </View>
      {errors.addBody && <Text style={styles.errors}>This is requried.</Text>}
      <View style={styles.buttonContainer}>
        <AppButton title="posting" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  inputContainer: {
    backgroundColor: Colors.light,
    borderRadius: 25,
    marginTop: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  textInput: {
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,

    width: '100%',
  },
  button: {},
  errors: {
    color: Colors.danger,
    marginLeft: 25,
  },
});

export default EditScreen;
