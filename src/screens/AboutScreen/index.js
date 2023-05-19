import React from 'react';
import {Title} from '../../components/Title';
import {Paragraph} from '../../components/Paragraph';
import AppTargetImage from '../../assets/undraw_target_re_fi8j.svg';
import AppPermissionsImage from '../../assets/undraw_subscriptions_re_k7jj.svg';
import AppFeaturesImage from '../../assets/undraw_diet_ghvw.svg';
import AppHowToTestImage from '../../assets/undraw_scientist_3ow3.svg';
import AppCallADoctorImage from '../../assets/undraw_doctor_kw-5-l.svg';
import CommonScreen from '../../components/CommonScreen';
import {View, Text, StyleSheet} from 'react-native';
import {theme} from '../../styles/globalStyles';

const AboutScreen = ({navigation}) => {
  return (
    <CommonScreen navigation={navigation}>
      <Title>Qual o objetivo do aplicativo</Title>
      <Paragraph textAlign={'justify'}>
        Esse aplicativo tem como principal objetivo auxiliar no monitoramento da
        asma através da realização do teste de Pico de Fluxo Expiratório. Para
        isso o aplicativo conta com um equipamento auxiliar chamado Apito de
        Vórtice, que serve como um espirômetro (equipamento para testes de sopro
        e validação pulmonar). Ao soprar o apito, o som gerado terá uma
        frequência sonora relativa ao fluxo passando pelo tubo do equipamento.
        Quando for utilizada a funcionalidade "Teste de PFE" em conjunto do
        apito, será possível obter o resultado do PFE alcançado, porém, o
        aplicativo somente fornecerá um resultado preciso se for utilizado em
        conjunto com o apito, caso contrário não será possível realizar o exame.{' '}
      </Paragraph>
      <AppTargetImage width={352} height={250} />
      <Title>Permissões necessárias</Title>
      <Paragraph textAlign={'justify'}>
        Ao realizar o exame pela primeira vez, será solicitada a permissão de
        uso do microfone do smartphone do usuário. Somente será possível a
        realização do teste se a permissão for dada, caso contrário não será
        possível realizar a verificação do som gerado pelo apito de vórtice.{' '}
      </Paragraph>
      <AppPermissionsImage width={352} height={250} />
      <Title>Principais funcionalidades</Title>
      <Paragraph textAlign={'justify'}>
        Esse aplicativo conta com diversas funcionalidades para a melhor
        experiência do usuário, sendo elas:{' '}
      </Paragraph>
      <Paragraph textAlign={'justify'}>Início</Paragraph>
      <Text style={styles.list}>
        A funcionalidade de início do aplicativo é responsável por exibir o
        gráfico de desempenho dos resultados de testes de PFE realizados. Nela
        será possível visualizar se de um teste para outro houve melhora ou
        piora do quadro do usuário.
      </Text>
      <Paragraph textAlign={'justify'}>Dados da conta</Paragraph>
      <Text style={styles.list}>
        A funcionalidade de início do aplicativo é responsável por exibir o
        gráfico de desempenho dos resultados de testes de PFE realizados. Nela
        será possível visualizar se de um teste para outro houve melhora ou
        piora do quadro do usuário.
      </Text>
      <Paragraph textAlign={'justify'}>Alarmes</Paragraph>
      <Text style={styles.list}>
        É uma funcionalidade utilizada para auxiliar o usuário a manter a
        regularidade na realização do exame. O usuário conseguirá cadastrar seus
        alarmes com dois tipos de recorrência. A primeira é do tipo diária, ou
        seja, será definido um horário e esse alarme será disparado diariamente
        no mesmo horário. O segundo formato permite ao usuário cadastrar um
        alarme para ser executado uma única vez, e após executado esse alarme
        será desabilitado.
      </Text>
      <Paragraph textAlign={'justify'}>Teste de PFE</Paragraph>
      <Text style={styles.list}>
        É a funcionalidade principal do aplicativo. Para realizar o teste de PFE
        é necessário possuir o Apito de Vórtice, que é o equipamento responsável
        por gerar o sinal que o aplicativo utiliza para calcular o PFE do
        usuário.
      </Text>
      <Text style={styles.list}>
        A primeira tela da funcionalidade é para realizar uma gravação de áudio.
        Quando iniciar a gravação, o usuário terá exatamente 3 segundos para
        soprar o apito com força máxima. Realizada a gravação, serão dadas três
        opções para o usuário: Gerar o resultado, Reproduzir o áudio (para
        verificar se foi captado som) e Descartar o áudio, para o caso de o
        usuário não querer realizar o teste ou para o caso de haver problema com
        o áudio gravado. Após descartar o áudio, o usuário é redirecionado para
        a primeira tela.
      </Text>
      <Text style={styles.list}>
        Após gerar o resultado, o usuário conseguirá visualizar a porcentagem
        alcançada do PFE com base no resultado esperado vs resultado obtido,
        sendo indicado qual a faixa que o usuário está.
      </Text>
      <Text style={styles.list}>
        Para usuários que alcançarem 80% ou mais de resultado, será exibido o
        "Sinal verde", indicando que está tudo bem.
      </Text>
      <Text style={styles.list}>
        Para usuários que obtiverem um resultado entre 50% e 80% será exibido o
        "Sinal amarelo", indicando que os brônquios e as vias respiratórias
        podem estar um pouco obstruídas e é necessário manter atenção.
      </Text>
      <Text style={styles.list}>
        Caso o usuário obtenha resultado abaixo de 50%, então significa que as
        vias estão muito obstruídas e é necessário procurar ajuda, pois foi
        obtido sinal de alerta!
      </Text>
      <Paragraph textAlign={'justify'}>Lista de resultados</Paragraph>
      <Text style={styles.list}>
        Após gerar cada resultado, ele é armazenado contendo as informações de
        "Porcentagem atingida", "PFE obtido", "Data de realização do teste" e
        "Faixa atingida". Esses resultados são exibidos em uma lista com os
        mesmos dados.
      </Text>
      <AppFeaturesImage width={352} height={250} />
      <Title>Como fazer um teste de PFE</Title>
      <Paragraph textAlign={'justify'}>
        Para realizar o teste de PFE é necessário ter o Apito de Vórtice. Acesse
        a funcionalidade "Teste de PFE" e na primeira tela aperte o botão
        "Iniciar gravação". Após isso você terá exatamente 3 segundos para
        soprar o apito com força máxima. Para isso fique a pelo menos 10
        centímetros de distância do microfone do seu celular e procure não
        utilizar fones de ouvido.
      </Paragraph>
      <AppHowToTestImage width={352} height={250} />
      <Title>Quando procurar um especialista</Title>
      <Paragraph textAlign={'justify'}>
        Se ao gerar o resultado do Teste de PFE você obtiver uma porcentagem
        abaixo de 80%, é importante manter a atenção e seguir realizando o teste
        com mais frequência para ver se o resultado melhora. Caso a porcentagem
        atingida seja abaixo de 50%, procure um especialista imediatamente, pois
        você já está na faixa de alerta.
      </Paragraph>
      <AppCallADoctorImage width={352} height={250} />
    </CommonScreen>
  );
};

const styles = StyleSheet.create({
  list: {
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: 'normal',
    textAlign: 'justify',
    color: theme.textContrastBackground,
    opacity: 0.8,
    letterSpacing: 1,
    paddingHorizontal: 18,
    marginBottom: 5,
    minWidth: '100%',
  },
});

export default AboutScreen;
