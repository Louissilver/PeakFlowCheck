import React from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import NewAlarmImage from '../../assets/undraw_time_management_re_tk5w.svg';
import CommonScreen from '../../components/CommonScreen';
import {StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Input} from '../../components/Input';
import {inputs} from './inputs';
import {theme} from '../../styles/globalStyles';

const LoginSchema = Yup.object().shape({
  hour: Yup.string().required('Campo obrigatório'),
  minute: Yup.string().required('Campo obrigatório'),
  recurrence: Yup.string().required('Campo obrigatório'),
});

const NewAlarmScreen = ({navigation}) => {
  return (
    <CommonScreen navigation={navigation}>
      <Title>Novo alarme</Title>
      <NewAlarmImage width={352} height={250} />
      <Text style={styles.info}>
        É obrigatório o preenchimento de todos os campos
      </Text>
      <View style={styles.container}>
        <Formik
          initialValues={{
            hour: '',
            minute: '',
            recurrence: '',
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
                <View style={styles.clockContainer}>
                  <Input
                    item={inputs[0].item}
                    label={inputs[0].label}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    errors={errors}
                    touched={touched}
                    options={inputs[0].options}
                  />
                  <View style={{marginHorizontal: 10}} />
                  <Input
                    item={inputs[1].item}
                    label={inputs[1].label}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    errors={errors}
                    touched={touched}
                    options={inputs[1].options}
                  />
                </View>
                <Input
                  item={inputs[2].item}
                  label={inputs[2].label}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  errors={errors}
                  touched={touched}
                  options={inputs[2].options}
                />
              </View>

              <Button onPress={() => handleSubmit()}>Salvar</Button>
              <Button
                secondary
                onPress={() => navigation.navigate('Meus alarmes')}>
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
  clockContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
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

export default NewAlarmScreen;
