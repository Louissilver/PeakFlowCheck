export const calculatePEF = (user, measuredPEF) => {
  let expectedPEF = 0;
  let percentMeasure = 0;
  let finalResult = '';

  // Cálculo do Pico de Fluxo Expiratório esperado

  if (user.age > 15) {
    if (user.gender == 'Male') {
      expectedPEF = (user.height * 5.48 + 1.58 - user.age * 0.041) * 60;
    } else {
      expectedPEF = (user.height * 3.72 + 2.24 - user.age * 0.03) * 60;
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
    resultExpectedPEF: expectedPEF.toFixed(2),
  };

  return results;
};
