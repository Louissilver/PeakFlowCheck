import React from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import {Paragraph} from '../../components/Paragraph';
import TermsOfUseImage from '../../assets/undraw_terms_re_6ak4.svg';
import {useNavigation} from '@react-navigation/core';
import CommonScreen from '../../components/CommonScreen';

const TermsOfUseScreen = ({navigation}) => {
  return (
    <CommonScreen navigation={navigation} isLoggedFeature={false}>
      <TermsOfUseImage width={352} height={250} />
      <Title>Termos de uso</Title>
      <Paragraph textAlign="justify">
        Este documento estabelece os termos e condições de uso do aplicativo
        [nome do aplicativo], doravante referido como "Aplicativo". Ao utilizar
        o Aplicativo, você concorda com estes termos e condições. Leia
        atentamente antes de prosseguir.
      </Paragraph>
      <Paragraph textAlign="justify">
        Cadastro de Usuário 1.1. Para utilizar o Aplicativo, você deve se
        cadastrar fornecendo as seguintes informações: Nome completo; Data de
        nascimento; Altura; Sexo; E-mail; Senha; Confirmação de senha. 1.2. Você
        deve fornecer informações precisas, completas e atualizadas durante o
        processo de cadastro. É responsabilidade do usuário manter suas
        informações atualizadas. 1.3. O Aplicativo permite apenas um cadastro
        por e-mail. Caso você já possua uma conta com o mesmo endereço de
        e-mail, não será possível criar um novo cadastro. 1.4. Ao se cadastrar,
        você deve aceitar os presentes Termos de Uso do Aplicativo. 1.5. O
        Aplicativo emitirá uma mensagem de sucesso após o cadastro ter sido
        realizado com êxito. 1.6. Caso algum dos dados fornecidos no cadastro
        esteja incompleto, inválido ou em branco, o Aplicativo emitirá mensagens
        de erro correspondentes.
      </Paragraph>
      <Paragraph textAlign="justify">
        Edição de Dados da Conta 2.1. O Aplicativo permite que você, como
        usuário logado, edite os dados do seu cadastro. 2.2. Para alterar
        qualquer informação, será necessário informar a senha atual. 2.3. Para
        redefinir a senha, um link será enviado para o seu e-mail, o qual
        permitirá que você a redefina em uma página no navegador. Após a
        redefinição, você será redirecionado para a tela de login.
      </Paragraph>
      <Paragraph textAlign="justify">
        Login 3.1. O Aplicativo permite o acesso dos usuários por meio do e-mail
        e senha cadastrados. 3.2. Caso você tenha esquecido sua senha, poderá
        ser redirecionado para uma nova tela para redefinição. 3.3. Se você não
        possui uma conta, poderá ser redirecionado para a tela de cadastro.
      </Paragraph>
      <Paragraph textAlign="justify">
        Redefinição de Senha 4.1. O Aplicativo permite a redefinição da senha
        através do seu e-mail. 4.2. Um link será enviado para o seu e-mail,
        redirecionando-o para uma tela de redefinição de senha no navegador.
        4.3. Após redefinir a senha, você será redirecionado para a tela de
        login.
      </Paragraph>
      <Paragraph textAlign="justify">
        Barra de Funcionalidades 5.1. O Aplicativo fornece uma barra de
        funcionalidades, posicionada na parte inferior da tela, para facilitar o
        acesso às funcionalidades essenciais.
      </Paragraph>
      <Paragraph textAlign="justify">
        Sistema de Lembrete 6.1. O Aplicativo permite que você configure
        lembretes recorrentes, que serão disparados de acordo com a configuração
        escolhida. 6.2. Você poderá selecionar apenas um tipo de recorrência:
        "Diário" ou "Uma vez". 6.3. É possível cadastrar mais de um lembrete.
      </Paragraph>
      <Paragraph textAlign="justify">
        Sistema de Localização 7.1. O Aplicativo permite que você visualize um
        mapa com instituições de saúde, como hospitais, clínicas e unidades de
        saúde. 7.2. Somente instituições com o status de atendimento "Aberto
        agora" serão listadas. 7.3. É possível visualizar informações
        adicionais, como número de telefone, endereço e nome da instituição.
      </Paragraph>
      <Paragraph textAlign="justify">
        Teste de Pico de Fluxo Respiratório (PFE) 8.1. O Aplicativo
        disponibiliza a funcionalidade de Teste de Pico de Fluxo Respiratório.
        8.2. O teste utiliza o microfone do dispositivo para captar um som. 8.3.
        O som captado é analisado e classificado de acordo com a frequência do
        áudio. 8.4. O valor de PFE calculado e a classificação são exibidos.
        8.5. É possível calcular o resultado ou descartar o áudio gravado para o
        teste. 8.6. Os resultados do teste de PFE são armazenados no banco de
        dados, contendo data, hora, classificação e valor do PFE calculado, bem
        como a porcentagem em relação ao PFE esperado. 8.7. A classificação é
        apresentada em três níveis diferentes, cada um com uma cor específica.
      </Paragraph>
      <Paragraph textAlign="justify">
        Listagem de Resultados dos Testes de PFE 9.1. O Aplicativo permite que
        você visualize uma lista dos resultados de Teste de PFE realizados
        anteriormente. 9.2. A lista exibe as informações de data, hora,
        classificação e valor do PFE calculado. 9.3. É possível exportar a lista
        de resultados em formato CSV ou TXT. 9.4. Se não houver nenhum teste
        realizado, será exibida a mensagem "Poxa, parece que não há nenhum
        resultado para mostrar ainda."
      </Paragraph>
      <Paragraph textAlign="justify">
        Gráfico de Progresso 10.1. O Aplicativo permite que você visualize um
        gráfico de progresso dos resultados dos testes de PFE. 10.2. O gráfico é
        exibido como a primeira tela após o login. 10.3. O gráfico é
        representado por uma linha. 10.4. Se não houver nenhum teste realizado,
        será exibida a mensagem "Poxa, parece que não há nenhum resultado para
        mostrar ainda."
      </Paragraph>
      <Paragraph textAlign="justify">
        Informações do Aplicativo 11.1. O Aplicativo fornece uma tela com
        informações sobre o objetivo, forma de uso, funcionalidades, permissões
        e quando procurar um especialista.
      </Paragraph>
      <Button>Iniciar</Button>
    </CommonScreen>
  );
};

export default TermsOfUseScreen;
