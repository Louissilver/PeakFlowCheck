import React, {useState} from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import SplashscreenImage from '../../assets/undraw_medicine_b-1-ol.svg';
import CommonScreen from '../../components/CommonScreen';
import {useNavigation} from '@react-navigation/core';
import {TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {theme} from '../../styles/globalStyles';
import {StyleSheet, Text, View} from 'react-native';
import {TextLink} from '../../components/TextLink';
import DateInput from '../../components/DateInput';

const LoginSchema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  date: Yup.string()
    .required('A data de nascimento é obrigatória')
    .transform(function (value, originalValue) {
      const [day, month, year] = originalValue.split('/');
      const date = new Date(`${year}-${month}-${day}`);
      return date.toISOString().split('T')[0];
    })
    .max(new Date(), 'Data de nascimento inválida'),
  height: Yup.number()
    .required('A altura é obrigatória')
    .min(50, 'A altura mínima é de 50 cm'),
  gender: Yup.string()
    .required('O sexo é obrigatório')
    .oneOf(
      ['masculino', 'feminino'],
      'O sexo deve ser "masculino" ou "feminino"',
    ),
  email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
  passConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
    .required('A confirmação de senha é obrigatória'),
  termsOfUse: Yup.boolean()
    .oneOf([true], 'Você precisa aceitar os termos')
    .required('Você precisa aceitar os termos'),
});

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <CommonScreen navigation={navigation} isLoggedFeature={false}>
      <SplashscreenImage width={352} height={250} />
      <Title>Cadastro</Title>
      <View style={styles.container}>
        <Formik
          initialValues={{
            name: '',
            date: '',
            height: '',
            gender: '',
            email: '',
            password: '',
            passConfirm: '',
            termsOfUse: false,
          }}
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
                label="Nome completo"
                mode="outlined"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                error={errors.name && touched.name}
                style={styles.input}
                outlineStyle={{borderRadius: 50, borderColor: 'transparent'}}
              />
              {errors.name && touched.name && (
                <Text style={styles.error}>{errors.name}</Text>
              )}

              <DateInput
                label="Data de Nascimento"
                value={values.date}
                error={errors.date}
                touched={touched.date}
                onChangeText={handleChange('date')}
                onBlur={handleBlur('date')}
              />

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

              <TextLink
                onPress={() => navigation.navigate('Termos de uso')}
                text="Concordo que li e aceito os"
                link="termos."
              />

              <Button>Cadastrar</Button>

              <TextLink
                onPress={() => navigation.navigate('Login')}
                text="Ja possui uma conta?"
                link="Faça login"
              />
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
    paddingVertical: 20,
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

export default SignUpScreen;
