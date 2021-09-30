const { calcularPrecoPrazo } = require('correios-brasil');
const { response } = require('express');

class Correios {
  constructor() {}

  async calcularFreteAPI(data) {
    let items = data.items;
    let peso = 0;
    let comprimento = 0;
    let altura = 0;
    let largura = 0;

    items.forEach(item => {
      peso += parseFloat(item.ite_peso);
      altura += parseFloat(item.ite_altura);
      comprimento = (comprimento < item.ite_comprimento) ? item.ite_comprimento: comprimento;
      largura = (largura < item.ite_largura) ? item.ite_largura: largura;
    });
    altura += 2;

    let args = {
      // Não se preocupe com a formatação dos valores de entrada do cep, qualquer uma será válida (ex: 21770-200, 21770 200, 21asa!770@###200 e etc),
      sCepOrigem: '08770320',
      sCepDestino: data.fre_destino,
      nVlPeso: peso,
      nCdFormato: '1',
      nVlComprimento: comprimento,
      nVlAltura: altura,
      nVlLargura: largura,
      nCdServico: ['04014'], //Array com os códigos de serviço
      nVlDiametro: '0',
    };

    return calcularPrecoPrazo(args);
  }
}

module.exports = Correios;