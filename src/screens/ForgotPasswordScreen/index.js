import React from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import {Paragraph} from '../../components/Paragraph';
import ForgotPasswordImage from '../../assets/undraw_contact_us_re_4qqt.svg';
import CommonScreen from '../../components/CommonScreen';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Input} from '../../components/Input';
import {theme} from '../../styles/globalStyles';
import {resetPasswordEmail} from '../../services/auth';
import {auth} from '../../config/firebase';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
});

const ForgotPasswordScreen = ({navigation}) => {
  async function sendPasswordEmail(email) {
    const result = await resetPasswordEmail(email);
    if (result === 'error') {
      Alert.alert('Erro', 'Não foi possível enviar o e-mail.');
      return;
    }
    Alert.alert(
      'Sucesso',
      `E-mail para redefinição de senha enviado para ${email}.`,
    );
    if (auth.currentUser) {
      navigation.replace('Logado');
    } else {
      navigation.replace('Login');
    }
  }

  return (
    <CommonScreen navigation={navigation} isLoggedFeature={false}>
      <Title>Solicite aqui a uma nova senha</Title>
      <ForgotPasswordImage width={352} height={250} />
      <Text style={styles.info}>
        É obrigatório o preenchimento de todos os campos
      </Text>
      <Paragraph>
        Se você possuir uma conta conosco, você receberá um link no e-mail
        informado abaixo para poder criar uma nova senha.
      </Paragraph>
      <View style={styles.container}>
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={values => {
            sendPasswordEmail(values.email);
          }}>
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
                <Input
                  item="email"
                  label="E-mail"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  errors={errors}
                  touched={touched}
                />
              </View>

              <Button
                onPress={() => {
                  handleSubmit();
                }}>
                Enviar
              </Button>
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
  info: {
    marginTop: 20,
    fontSize: 12,
    textAlign: 'center',
  },
  form: {
    marginBottom: 20,
  },
});

export default ForgotPasswordScreen;
