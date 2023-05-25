export const calculatePEF = (user, measuredPEF) => {
  let expectedPEF = 0;
  let percentMeasure = 0;
  let finalResult = '';
  const age = calculateAge(user.dateOfBirth);

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
  const birthDate = new Date(dateString);

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

export const prettyifyDate = date => {
  if (date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }
  return '';
};

// Função para formatar uma célula na tabela
function formatCell(value, width) {
  const formattedValue = value.toString().padEnd(width, ' ');
  return `| ${formattedValue} `;
}

// Função para criar uma linha de separação
function createSeparator(widths) {
  let separator = '+';
  widths.forEach(width => {
    separator += '-'.repeat(width + 2) + '+';
  });
  return separator;
}

export function generateTable(data) {
  // Obtendo as chaves do objeto para determinar as colunas
  const keys = Object.keys(data[0]);

  // Calculando as larguras das colunas
  const columnWidths = keys.map(key => key.length);
  data.forEach(item => {
    keys.forEach((key, index) => {
      const valueLength = item[key].toString().length;
      if (valueLength > columnWidths[index]) {
        columnWidths[index] = valueLength;
      }
    });
  });

  // Construindo a tabela formatada
  let table = '';
  table += createSeparator(columnWidths) + '\n';
  table +=
    keys.map((key, index) => formatCell(key, columnWidths[index])).join('') +
    '|\n';
  table += createSeparator(columnWidths) + '\n';
  data.forEach(item => {
    keys.forEach((key, index) => {
      table += formatCell(item[key], columnWidths[index]);
    });
    table += '|\n';
  });
  table += createSeparator(columnWidths);
  return table;
}
