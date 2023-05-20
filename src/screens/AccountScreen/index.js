import React, {useEffect, useState} from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import CommonScreen from '../../components/CommonScreen';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {theme} from '../../styles/globalStyles';
import {StyleSheet, Text, View, Image, Alert} from 'react-native';
import {TextLink} from '../../components/TextLink';
import {inputs} from './inputs';
import {parse} from 'date-fns';
import {Input} from '../../components/Input';
import loadingAnimation from '../../assets/loading.gif';
import {
  getUserInformation,
  updateUserInformation,
} from '../../services/userInformation';
import {auth} from '../../config/firebase';

const AccountSchema = Yup.object().shape({
  completeName: Yup.string().required('Campo obrigatório'),
  dateOfBirth: Yup.date()
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
});

const AccountScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    completeName: '',
    dateOfBirth: '',
    height: '',
    gender: '',
    email: '',
  });

  async function getUserData() {
    setLoading(true);
    const userInfo = await getUserInformation();
    setUserData(userInfo);
    setLoading(false);
  }

  async function updateUserData(values) {
    const result = await updateUserInformation(values);
    if (result == 'error') {
      Alert.alert('Não foi possível atualizar os dados do usuário.');
      return;
    }
    auth.signOut();
    setTimeout(() => {
      navigation.replace('Login');
    }, 1000);
  }

  useEffect(() => {
    const resetResult = navigation.addListener('focus', () => {
      getUserData();
    });
    return resetResult;
  }, [navigation]);

  if (loading) {
    return (
      <View style={styles.animationContainer}>
        <Image source={loadingAnimation} style={styles.image} />
      </View>
    );
  } else {
    return (
      <CommonScreen navigation={navigation}>
        <Title>Altere aqui os dados da sua conta</Title>
        <Text style={styles.info}>
          É obrigatório o preenchimento de todos os campos
        </Text>
        <View style={styles.container}>
          <Formik
            initialValues={{
              completeName: userData.completeName,
              dateOfBirth: userData.dateOfBirth,
              height: userData.height,
              gender: userData.gender,
              email: userData.email,
            }}
            validationSchema={AccountSchema}
            onSubmit={values => {
              console.log(values);
              updateUserData(values);
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

                <TextLink
                  onPress={() => navigation.navigate('Nova senha')}
                  text="Quer redefinir sua senha?"
                  link="Clique aqui"
                />

                <Button
                  onPress={() => {
                    handleSubmit();
                  }}>
                  Salvar
                </Button>
                <Button secondary onPress={() => navigation.goBack()}>
                  Cancelar
                </Button>
              </>
            )}
          </Formik>
        </View>
      </CommonScreen>
    );
  }
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
  animationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default AccountScreen;
