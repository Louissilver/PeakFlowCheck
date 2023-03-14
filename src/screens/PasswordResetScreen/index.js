import React from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import PasswordResetImage from '../../assets/undraw_my_password_re_ydq7.svg';
import CommonScreen from '../../components/CommonScreen';
import {StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Input} from '../../components/Input';
import {theme} from '../../styles/globalStyles';

const LoginSchema = Yup.object().shape({
  password: Yup.string().required('Campo obrigatório'),
  passConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
    .required('A confirmação de senha é obrigatória'),
});

const PasswordResetScreen = ({navigation}) => {
  return (
    <CommonScreen navigation={navigation} isLoggedFeature={false}>
      <Title>Redefina aqui a sua senha</Title>
      <PasswordResetImage width={352} height={250} />
      <Text style={styles.info}>
        É obrigatório o preenchimento de todos os campos
      </Text>
      <View style={styles.container}>
        <Formik
          initialValues={{
            password: '',
            passConfirm: '',
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
              <View style={styles.form}>
                <Input
                  item="password"
                  label="Nova senha"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  errors={errors}
                  touched={touched}
                />
                <Input
                  item="passConfirm"
                  label="Confirmação de senha"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  errors={errors}
                  touched={touched}
                />
              </View>

              <Button onPress={() => handleSubmit()}>Redefinir senha</Button>
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

export default PasswordResetScreen;
