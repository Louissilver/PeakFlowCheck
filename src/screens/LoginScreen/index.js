import React, {useState} from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import LoginImage from '../../assets/undraw_lost_online_re_upmy.svg';
import CommonScreen from '../../components/CommonScreen';
import {useNavigation} from '@react-navigation/core';
import {TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {theme} from '../../styles/globalStyles';
import {StyleSheet, Text, View} from 'react-native';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
});

const LoginScreen = () => {
  const navigation = useNavigation();
  const [emailFocused, setEmailFocused] = useState(false);
  const [senhaFocused, setSenhaFocused] = useState(false);

  return (
    <CommonScreen navigation={navigation} isLoggedFeature={false}>
      <Title>Bom te ver de novo!</Title>
      <LoginImage width={352} height={250} />
      <View style={styles.container}>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={LoginSchema}
          onSubmit={values => console.log(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <TextInput
                label="E-mail"
                mode="outlined"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={errors.email && touched.email}
                style={styles.input}
                outlineStyle={{borderRadius: 50, borderColor: 'transparent'}}
              />
              {errors.email && touched.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}

              <TextInput
                label="Senha"
                mode="outlined"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                error={errors.password && touched.password}
                secureTextEntry
                style={styles.input}
                outlineStyle={{
                  borderRadius: 50,
                  borderColor: 'transparent',
                }}
              />
              {errors.password && touched.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}

              <Button>Login</Button>
            </>
          )}
        </Formik>
      </View>
    </CommonScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: theme.background,
    width: '100%',
  },
  input: {
    borderRadius: 50,
    marginBottom: 10,
    height: 30,
    overflow: 'hidden',
    paddingLeft: 5,
    paddingVertical: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
});

export default LoginScreen;
