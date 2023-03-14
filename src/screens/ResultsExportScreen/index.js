import React from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import CommonScreen from '../../components/CommonScreen';
import {StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Input} from '../../components/Input';
import {inputs} from './inputs';
import {theme} from '../../styles/globalStyles';

const LoginSchema = Yup.object().shape({
  format: Yup.string().required('Campo obrigatório'),
});

const ResultsExportScreen = ({navigation}) => {
  return (
    <CommonScreen navigation={navigation}>
      <Title>Seleciona o formato do arquivo de exportação</Title>
      <View style={styles.container}>
        <Formik
          initialValues={{
            format: '',
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
                  item={inputs[0].item}
                  label={inputs[0].label}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  errors={errors}
                  touched={touched}
                  options={inputs[0].options}
                />
              </View>

              <Button onPress={() => handleSubmit()}>Exportar</Button>
              <Button
                secondary
                onPress={() => navigation.navigate('Lista de resultados')}>
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
  form: {
    marginBottom: 20,
  },
});

export default ResultsExportScreen;
