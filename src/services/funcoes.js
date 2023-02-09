const formataData = (data) => {
  // Exemplo de data recebida: 2012-11-26
  const dataQuebrada = data.split("-");
  const dia = dataQuebrada[2]; // 26
  const mes = dataQuebrada[1]; // 11
  const ano = dataQuebrada[0]; // 2012
  //   console.log(data);
  //   console.log(dia, mes, ano);
  return `${dia}/${mes}/${ano}`;
};

export { formataData };
