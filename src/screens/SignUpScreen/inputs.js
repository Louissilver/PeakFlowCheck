const inputs = [
  {label: 'Nome completo', item: 'completeName'},
  {label: 'Altura', item: 'height'},
  {
    label: 'Sexo',
    item: 'gender',
    options: [
      {label: 'Selecione...', value: ''},
      {label: 'Masculino', value: 'masculino'},
      {label: 'Feminino', value: 'feminino'},
    ],
  },
  {label: 'E-mail', item: 'email'},
  {label: 'Senha', item: 'password', secureTextEntry: true},
  {label: 'Confirmação de senha', item: 'passConfirm', secureTextEntry: true},
];

export {inputs};
