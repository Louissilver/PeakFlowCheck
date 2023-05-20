const inputs = [
  {label: 'Nome completo', item: 'completeName'},
  {label: 'Data de nascimento', item: 'dateOfBirth'},
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
];

export {inputs};
