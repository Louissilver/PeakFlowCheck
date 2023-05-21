export const calculatePEF = (user, measuredPEF) => {
  let expectedPEF = 0;
  let percentMeasure = 0;
  let finalResult = '';
  const age = calculateAge(user.dateOfBirth);
  console.log('Age: ', age);
  console.log('Gender: ', user.gender);
  console.log('Height: ', user.height);

  // Cálculo do Pico de Fluxo Expiratório esperado

  if (age > 15) {
    if (user.gender == 'masculino') {
      expectedPEF = (user.height * 5.48 + 1.58 - age * 0.041) * 60;
    } else {
      expectedPEF = (user.height * 3.72 + 2.24 - age * 0.03) * 60;
    }
  } else {
    expectedPEF = (user.height * 100 - 100) * 5 + 100;
  }

  // Porcentagem medido/esperado

  percentMeasure = (measuredPEF / expectedPEF) * 100;

  // Definição do resultado de acordo com %

  if (percentMeasure >= 80) {
    finalResult = 'Sinal verde';
  } else if (percentMeasure < 80 && percentMeasure >= 50) {
    finalResult = 'Sinal amarelo';
  } else {
    finalResult = 'Sinal vermelho';
  }

  const results = {
    resultPercent: percentMeasure.toFixed(2),
    resultClass: finalResult,
    expectedPeakflow: expectedPEF.toFixed(2),
    measuredPeakflow: measuredPEF.toFixed(2),
  };

  return results;
};

export const calculateAge = dateString => {
  const today = new Date();
  const [day, month, year] = dateString.split('/');

  const birthDate = new Date(`${year}-${month}-${day}`);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};
