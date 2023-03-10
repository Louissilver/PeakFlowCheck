import React from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import CommonScreen from '../../components/CommonScreen';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {theme} from '../../styles/globalStyles';
import {StyleSheet, Text, View} from 'react-native';
import {TextLink} from '../../components/TextLink';
import {inputs} from './inputs';
import {parse} from 'date-fns';
import {Input} from '../../components/Input';

const LoginSchema = Yup.object().shape({
  completeName: Yup.string().required('Campo obrigatório'),
  date: Yup.date()
    .required('A data de nascimento é obrigatória')
    .transform(function (value, originalValue, context) {
      if (context.isType(value)) return value;
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
});

const AccountScreen = ({navigation}) => {
  return (
    <CommonScreen navigation={navigation}>
      <Title>Altere aqui os dados da sua conta</Title>
      <Text style={styles.info}>
        É obrigatório o preenchimento de todos os campos
      </Text>
      <View style={styles.container}>
        <Formik
          initialValues={{
            completeName: '',
            date: '',
            height: '',
            gender: '',
            email: '',
            password: '',
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
                {inputs.map(({label, item, options}) => {
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
                    />
                  );
                })}
              </View>

              <TextLink
                onPress={() => navigation.navigate('Nova senha')}
                text="Quer redefinir sua senha?"
                link="Clique aqui"
              />

              <Button onPress={() => handleSubmit()}>Salvar</Button>
              <Button secondary onPress={() => navigation.goBack()}>
                Cancelar
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
    fontSize: 12,
    textAlign: 'center',
  },
  form: {
    marginBottom: 20,
  },
});

export default AccountScreen;
