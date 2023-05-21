import React from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import CommonScreen from '../../components/CommonScreen';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {theme} from '../../styles/globalStyles';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {TextLink} from '../../components/TextLink';
import {CheckBox} from 'react-native-elements';
import {inputs} from './inputs';
import {parse} from 'date-fns';
import {Input} from '../../components/Input';
import {Paragraph} from '../../components/Paragraph';
import {register} from '../../services/auth';

const LoginSchema = Yup.object().shape({
  completeName: Yup.string().required('Campo obrigatório'),
  dateOfBirth: Yup.date()
    .required('A data de nascimento é obrigatória')
    .transform(function (value, originalValue, context) {
      if (context.isType(value)) {
        return value;
      }
      return parse(originalValue, 'dd/MM/yyyy', new Date());
    }),
  height: Yup.number()
    .required('A altura é obrigatória')
    .typeError('A altura deve ser um número')
    .min(0.5, 'A altura mínima é de 50 cm'),
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

const SignUpScreen = ({navigation}) => {
  async function execRegister(values) {
    const result = await register(values);
    if (result === 'error') {
      Alert.alert('Erro', 'Não foi possível cadastrar o usuário.');
      return;
    }
    navigation.replace('Logado');
  }

  return (
    <CommonScreen navigation={navigation} isLoggedFeature={false}>
      <Title>Bem vindo!</Title>
      <Paragraph>
        Lörem ipsum ninde låra huruvida gur för plakell el. Mädose smartboard.{' '}
      </Paragraph>
      <Text style={styles.info}>
        É obrigatório o preenchimento de todos os campos
      </Text>
      <View style={styles.container}>
        <Formik
          initialValues={{
            termsOfUse: false,
            completeName: '',
            dateOfBirth: '',
            height: '',
            gender: '',
            email: '',
            password: '',
            passConfirm: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={values => {
            execRegister(values);
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <>
              <View style={styles.form}>
                {inputs.map(({label, item, options, secureTextEntry}) => {
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
                      options={options}
                      secureTextEntry={secureTextEntry}
                    />
                  );
                })}
              </View>

              <View style={styles.checkboxContainer}>
                <CheckBox
                  containerStyle={styles.checkbox}
                  value={values.termsOfUse}
                  checked={values.termsOfUse}
                  size={30}
                  center
                  onPress={() => {
                    setFieldValue('termsOfUse', !values.termsOfUse);
                  }}
                />
                <TextLink
                  onPress={() => navigation.navigate('Termos de uso')}
                  text="Concordo que li e aceito os"
                  link="termos."
                />
              </View>
              {errors.termsOfUse && touched.termsOfUse && (
                <Text style={styles.error}>{errors.termsOfUse}</Text>
              )}

              <Button
                onPress={() => {
                  handleSubmit();
                }}>
                Cadastrar
              </Button>

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
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  checkbox: {
    marginTop: 10,
  },
  info: {
    fontSize: 12,
    textAlign: 'center',
  },
  form: {
    marginBottom: 20,
  },
});

export default SignUpScreen;
