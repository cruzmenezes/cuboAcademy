# Problema
Você, desenvolvedor sênior do UFC, maior evento de artes maciais mistas (MMA) do mundo, deve desenvolver um programa que indique à organização do novo evento que sua empresa vai fazer se dois lutadores podem ou não lutar.

Os lutadores serão divididos em cinco categorias:

Peso leve: lutadores com peso mais leve que 55 kg;

Peso meio-médio:  categoria mais pesada que a anterior e com pesos mais leves que 65 kg;

peso médio: categoria mais pesada que a anterior e com pesos mais leves que 75 kg;

Peso meio-pesado: categoria mais pesada que a anterior e com pesos mais leves que 85 kg;

Peso pesado: pesos maiores ou iguais a 85 kg.

A regra do evento é: os lutadores só podem lutar com lutadores da mesma categoria.

Entrada
A entrada do seu programa será composta por duas variáveis:

peso1: variável numérica que armazena o peso de um dos lutadores;

peso2: variável numérica que armazena o peso do outro lutador.

Saída
Você deve retornar:

PODEM LUTAR: se os lutadores forem da mesma categoria;

NAO PODEM LUTAR: se os lutadores forem de categorias diferentes.

Exemplo
Entrada 1
peso1 = 60

peso2 = 64

Saída 1
PODEM LUTAR

Explicação 1
Um dos lutadores pesa 60 kg e o outro pesa 64 kg. Como ambos são da categoria dos pesos meio-médios, eles podem lutar.

Entrada 2
peso1 = 55

peso2 = 54

Saída 1
NAO PODEM LUTAR

Explicação 1
Um dos lutadores pesa 55 kg e o outro pesa 5 kg. O primeiro lutador citado é da categoria dos pesos meio-médios, o outro é da categoria dos pesos leves. Como ambos são de categorias diferentes, eles não podem lutar

Veja os três principais erros que você pode está cometendo ao passar seu código para a nossa plataforma:
Você está esquecendo de trocar o console.log pelo return;
Você não está retornando o que é pedido. Lembre-se que a mensagem a ser retornada tem que ser exatamente a solicitada no exercício, sem espaços em branco a mais e com as letras maiúsculas. Se a questão estiver pedindo, por exemplo, para retornar um número, não retorne nenhuma mensagem antes, retorne APENAS o número;
Você está atribuindo valores às variáveis de entrada.
Para maiores informações, veja a PARTE PRÁTICA DO MINICURSO.

CASO VOCÊ TENHA DELETADO A FUNÇÃO "solucao", COLE O CÓDIGO ABAIXO:
function solucao(peso1, peso2) {

      // seu codigo aqui

}


