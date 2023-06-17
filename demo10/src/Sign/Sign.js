import { Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import styles from './Sign.style';
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from '../utils/authErrorMessageParser';

import { Formik } from 'formik';

const initialFormValues = {
  username: '',
  password: '',
  repassword: '',
};

const Sign = ({ navigation }) => {

  const [loading, setLoading] = useState(false);

  function handleLogin() {
    navigation.goBack();
  }

  async function handleFormSubmit(values) {
    if (values.password !== values.repassword) {
      showMessage({
        message: 'Şifreler uyuşmuyor',
        type: 'danger',
      });
      return;
    }

    try {
      setLoading(true);
      await auth().createUserWithEmailAndPassword(values.username, values.password);
      showMessage({
        message: 'Kullanıcı başarıyla oluşturuldu',
        type: 'success',
      });
      navigation.navigate('LoginPage');
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>FST Register</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <>
            <View style={styles.Tinput}>
              <TextInput
                placeholder='E-posta Adınızı Giriniz'
                placeholderTextColor='#78b3ed'
                onChangeText={handleChange('username')}
                value={values.username}
                autoCapitalize='none'
              />
               
            </View>
            <View style={styles.Şinput}>
              <TextInput
                placeholder='Şifrenizi Giriniz'
                placeholderTextColor='#78b3ed'
                secureTextEntry
                onChangeText={handleChange('password')}
                value={values.password}
              />
              
            </View>
            <View style={styles.Şinput}>
              <TextInput
                placeholder='Şifrenizi Tekrar Giriniz'
                placeholderTextColor='#78b3ed'
                secureTextEntry
                onChangeText={handleChange('repassword')}
                value={values.repassword}
              />
              
            </View>
            <View style={styles.button}>
              <Button title='Kayıt Ol' loading={loading} onPress={handleSubmit} />
            </View>
            <View style={styles.button}>
              <Button title='GERİ DÖN' onPress={handleLogin} />
              
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Sign;
