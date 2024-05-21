import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

const CustomerItem = ({ fullname, email, onPress }) => (
    <TouchableOpacity style={{borderRadius: 10, borderWidth:0.5, padding: 15, margin:10 }} onPress={onPress}>
      <Text style={{ fontSize: 20 }}>name: {fullname}</Text>
      <Text style={{ fontSize: 20, }}>email: {email}</Text>
    </TouchableOpacity>
  );

const Customers = ({ navigation }) => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const USERS = firestore().collection('USERS');

  useEffect(() => {
    const unsubscribe = USERS.where('role', '==', 'customer').onSnapshot((querySnapshot) => {
      const customerList = [];
      querySnapshot.forEach((doc) => {
        const { fullname, email, phone, role, address } = doc.data();
        if (role === 'customer') {
          customerList.push({
            id: doc.id,
            fullname,
            email,
            phone,
            address
          });
        }
      });
      setCustomers(customerList);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
        <Text
          style={{
            textAlign:"center",
            color:"tomato",
            fontSize: 30,
            fontWeight: 'bold',
          }}
        >
            Danh sách khách hàng
        </Text>
        <FlatList
            data={customers}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <CustomerItem fullname={item.fullname} email={item.email} onPress={() => navigation.navigate("CustomerDetail", item)}/>
            )}
        />
    </View>
  );
};

export default Customers;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
