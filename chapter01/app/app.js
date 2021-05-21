/**
 * Carregando módulos
 */
const hello = require('./hello.js');
const human = require('./human.js');

/**
 * Executando função modular
 */
hello('Olá Mundo!');

/**
 * Executando objeto com funções modulares
 */
human.hello('Olá Pessoal!');
human.sum(10, 5);
