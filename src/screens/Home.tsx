import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { PrimaryButton } from '../components';
import { logout } from '../store/reducers/authSlice';

const Home = () => {
  const { user } = useAppSelector(state => state.auth);

  const dispatch = useAppDispatch();

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <SafeAreaView style={styles.main_container}>
      <View style={styles.container}>
        <Text style={styles.header}>Welcome {user}</Text>
      </View>

      <View style={styles.btn_view}>
        <PrimaryButton buttonPress={logoutUser} label="Logout" />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 18,
    fontFamily: 'DMSans-Bold',
  },
  btn_view: {
    paddingHorizontal: 20,
  },
});
