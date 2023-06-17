import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import styles from './login.style';
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from '../utils/authErrorMessageParser';


const initialFormValues = {
  username: '',
  password: '',
};

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  function handleSignUp() {
    navigation.navigate('SignPage');
  }

  async function handleFormSubmit(formValues) {
    try {
      navigation.navigate('MessagesPage');
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.username,
        formValues.password
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
      showMessage({
        message: authErrorMessageParser(error.code),
        type: "danger",
      });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>FST</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <>
            <View style={styles.Tinput}>
              <TextInput
                onChangeText={handleChange('username')}
                value={values.username}
                placeholder='E-posta Adınızı Giriniz'
                placeholderTextColor='#78b3ed'
              />
              
            </View>
            <View style={styles.Şinput}>
              <TextInput
                onChangeText={handleChange('password')}
                value={values.password}
                placeholder='Şifrenizi Giriniz'
                placeholderTextColor='#78b3ed'
                secureTextEntry
              />
               
            </View>
            <View style={styles.button}>
              <Button title='Giriş Yap' onPress={handleSubmit} disabled={loading} />
             
            </View>
            <View style={styles.button}>
              <Button title='Kayıt Ol' onPress={handleSignUp} />
             
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Login;
