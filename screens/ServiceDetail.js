import { useState } from "react";
import { StyleSheet, View } from "react-native"
import { Button, Text, TextInput } from "react-native-paper"
import firestore from '@react-native-firebase/firestore';

const ServiceDetail = ({navigation, route}) =>{
    const { id, title: initialTitle, prices: initialPrices, detail: initialDetail } = route.params;
    const [title, setTitle] = useState(initialTitle);
    const [prices, setPrices] = useState(initialPrices);
    const [detail, setDetail] = useState(initialDetail);

    const handleUpdate = async () => {
        await firestore().collection('SERVICES').doc(id).update({
            title,
            prices,
            detail,
        });
        navigation.navigate('Services');
    };
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Chi tiết dịch vụ</Text>
          <TextInput
            label="Tên dịch vụ"
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            label="Giá"
            style={styles.input}
            value={prices}
            onChangeText={setPrices}
          />
          <TextInput
            label="Mô tả"
            style={styles.input}
            value={detail}
            onChangeText={setDetail}
          />
          <Button style={styles.button} onPress={handleUpdate}>
            <Text style={styles.textButton}>Cập nhật</Text>
          </Button>
        </View>
      );
    };
    
    export default ServiceDetail;
    
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