//condicionais - if - else

// menores de 18 -> menor de idade (meia)
// entre 18 e 60 -> adulto (meia apenas com carteirinha)
// maiores de 60 anos -> idosos (meia)

// inteira = adulto e não tem carteirinha
// meia = o resto


const idade = 15;
const temCarteirinha = true;

const ehAdulto = idade >= 18 && idade <= 60;

if (ehAdulto && temCarteirinha === false) {
    console.log('inteira');

} else {
    console.log('meia');
}



const idade1 = 75;
const cart = true;

const eadulto = idade1 >= 18 && idade1 <= 60;

if (idade1 < 18 || idade1 > 60 || (eadulto && cart)){
    console.log('meia');

} else {
    console.log('inteira');
}


// e (and) | exp1 && exp2 = retorna vardeiro caso ambos as expressões forem verdadeira

// ou (or) | exp1 || exp2 = retorna verdadeira caso qualquer expressão seja verdadeira.ambos

// negação (not) !exp1 = retorna o oposto do valor de exp1. ou seja, retorna verdadeiro caso exp1, e vice versa 