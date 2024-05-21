import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Button, HelperText, TextInput } from 'react-native-paper';

const AddNewService = ({ navigation }) => {
  const [service, setService] = useState('');
  const [prices, setPrices] = useState('');
  const [detail, setDetail] = useState('');
  const SERVICES = firestore().collection('SERVICES');

  const hasErrorService = () => service === '';
  const hasErrorPrices = () => prices === '';

  const addService = async () => {
    const newService = {
      title: service,
      prices,
      detail,
    };
    await SERVICES.add(newService);
    navigation.navigate('Services', { newService });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Thêm dịch vụ mới</Text>
      <TextInput
        label="Tên dịch vụ"
        style={styles.input}
        value={service}
        onChangeText={setService}
      />
      <HelperText type="error" visible={hasErrorService()}>
        Tên dịch vụ không được để trống
      </HelperText>
      <TextInput
        label="Giá"
        style={styles.input}
        value={prices}
        onChangeText={setPrices}
      />
      <HelperText type="error" visible={hasErrorPrices()}>
        Giá không được để trống
      </HelperText>
      <TextInput
        label="Mô tả"
        style={styles.input}
        value={detail}
        onChangeText={setDetail}
      />
      <Button style={styles.button} onPress={addService}>
        <Text style={styles.textButton}>Thêm</Text>
      </Button>
    </View>
  );
};

export default AddNewService;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'tomato',
    marginBottom: 30,
  },
  input: {
    borderRadius: 10,
    width: '90%',
    margin: 10,
    borderWidth: 0.5,
  },
  button: {
    backgroundColor: 'tomato',
    width: '90%',
    height: '7%',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 20,
  },
  textButton: {
    fontSize: 20,
    color: 'white',
  },
});

