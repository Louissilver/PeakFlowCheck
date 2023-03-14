import React from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import LoginImage from '../../assets/undraw_lost_online_re_upmy.svg';
import CommonScreen from '../../components/CommonScreen';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {theme} from '../../styles/globalStyles';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {TextLink} from '../../components/TextLink';
import {inputs} from './inputs';
import {Input} from '../../components/Input';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
});

const LoginScreen = ({navigation}) => {
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
              <View style={styles.form}>
                {inputs.map(({label, item}) => {
                  return (
                    <Input
                      key={item}
                      item={item}
                      label={label}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      values={values}
                      errors={errors}
                      touched={touched}
                    />
                  );
                })}
              </View>

              <TextLink
                onPress={() => navigation.navigate('Nova senha')}
                text="Esqueceu sua senha?"
                link="Clique aqui"
              />

              <Button
                onPress={() => {
                  handleSubmit();
                  navigation.navigate('Logado');
                }}>
                Login
              </Button>

              <TextLink
                onPress={() => navigation.navigate('Cadastro')}
                text="Ainda não tem um login?"
                link="Crie uma conta"
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
  form: {
    marginBottom: 20,
  },
});

export default LoginScreen;
