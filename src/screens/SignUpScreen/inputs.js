const inputs = [
  {label: 'Nome completo', item: 'completeName'},
  {label: 'Data de nascimento', item: 'date'},
  {label: 'Altura', item: 'height'},
  {
    label: 'Sexo',
    item: 'gender',
    options: [
      {label: 'Masculino', value: 'masculino'},
      {label: 'Feminino', value: 'feminino'},
    ],
  },
  {label: 'E-mail', item: 'email'},
  {label: 'Senha', item: 'password'},
  {label: 'Confirmação de senha', item: 'passConfirm'},
];

export {inputs};
