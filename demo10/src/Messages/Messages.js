import React, { useState, useEffect } from 'react';
import { Text, View, Button, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native';
import Modal from 'react-native-modalbox';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import moment from 'moment';
import 'moment/locale/tr';
import styles from './Messages.style';
import parseContentData from '../utils/parseContentData';

const Messages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await database().ref('messages/').once('value');
      const contentData = snapshot.val();
      const parsedData = contentData ? parseContentData(contentData) : [];
      setContentList(parsedData);
    };
  
    fetchData();
  
    
    const messagesRef = database().ref('messages/');
    messagesRef.on('value', (snapshot) => {
      const contentData = snapshot.val();
      const parsedData = contentData ? parseContentData(contentData) : [];
      setContentList(parsedData);
    });
  
    
    return () => messagesRef.off('value');
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleMessage = (value) => {
    setMessage(value);
  };

  const handleSend = () => {
    console.log('Gönderilen mesaj:', message);
    sendContent(message);
    closeModal();
  };

  const sendContent = (content) => {
    const userMail = auth().currentUser.email;
  
    const contentObject = {
      text: content,
      username: userMail.split('@')[0],
      timestamp: moment().format('YYYY-MM-DD HH:mm'),
    };
  
    database()
      .ref('messages/')
      .push(contentObject)
      .then(() => console.log('Mesaj gönderildi.'))
      .catch((error) => console.log('Hata oluştu:', error));
  };
  

  const renderContent = ({ item }) => {
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.messageText}>{item.text}</Text>
        <Text style={styles.date}>{item.timestamp}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>CHAT SCREEN</Text>

<FlatList
        contentContainerStyle={styles.flatListContent}
        data={contentList}
        renderItem={renderContent}
        inverted={true}
        keyExtractor={(item, index) => index.toString()}
      />
     

      <View style={styles.container2}>
        <TouchableOpacity style={styles.button} onPress={openModal}>
          <Text style={styles.buttonText}>EKLE</Text>
        </TouchableOpacity>
      </View>

      <Modal
        style={[styles.modal, { zIndex: 9999 }]}
        position={'bottom'}
        backdrop={true}
        backdropColor={'grey'}
        isOpen={isModalOpen}
        onClosed={closeModal}
      >
        <Text style={styles.modal_text}>Haydi Yaz Yaz Bi Kenara...</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mesaj</Text>
          <TextInput
            multiline={true}
            style={styles.input}
            placeholder="Mesajınızı buraya yazın"
            placeholderTextColor="#ccc"
            value={message}
            onChangeText={handleMessage}
          />
        </View>
        <View style={styles.ButtonG}>
          <Button title="Gönder" color={'#16084c'} onPress={handleSend} />
        </View>
      </Modal>
    </View>
  );
};

export default Messages;
