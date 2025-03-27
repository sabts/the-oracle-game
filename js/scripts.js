//📌 Ejercicio Completo - "El Juego del Oráculo"
// Te encuentras frente a un viejo ordenador que parece estar conectado a un sistema de seguridad avanzado. Para desbloquearlo, debes resolver un reto planteado por un misterioso oráculo digital. El desafío consiste en lo siguiente:

//🔍 Generación de Nombre de Usuario Aleatorio
// Debes crear un nombre de usuario aleatorio combinando:
// Una letra al azar del string "BCDFGHJKLMNPRSTVWXYZ" (consonantes).
// Una letra al azar del string "AEIOU" (vocales).
// Un número aleatorio entre 1 y 99.
// El resultado debe mostrarse en el siguiente formato: "ConsonanteVocalNúmero" (Ej: "MA12").

const randomUsernameGenerator = () =>{
    const consonants = "BCDFGHJKLMNPRSTVWXYZ";
    const vowels = "AEIOU";
    const numbers = Math.floor(Math.random()*99+1);

    const firstConsonant = consonants.charAt(Math.floor(Math.random()*consonants));
    const firstVowel = vowels.charAt(Math.floor(Math.random()*vowels));

    return firstConsonant + firstVowel +numbers;
}
randomUsernameGenerator()

//🔍 Creación de Códigos de Seguridad
// Debes crear una lista de cinco códigos de seguridad siguiendo estas instrucciones:
// Cada código debe ser un número aleatorio entre 1000 y 9999.
// Todos los códigos generados deben almacenarse en un array.
// El array completo debe mostrarse por consola.
const securityCodeCreator = () =>{
    const savedCodes = [];
    
    const code1 = Math.floor(Math.random()*(9999 - 1000)+1000);
    const code2 = Math.floor(Math.random()*(9999 - 1000)+1000);
    const code3 = Math.floor(Math.random()*(9999 - 1000)+1000);
    const code4 = Math.floor(Math.random()*(9999 - 1000)+1000);
    const code5 = Math.floor(Math.random()*(9999 - 1000)+1000);

    savedCodes.push(code1, code2, code3, code4, code5)

   return savedCodes;
}
securityCodeCreator()

//🔍 Verificación de Códigos Válidos
// Debes determinar si al menos uno de los códigos generados es divisible por 7.
// Si al menos un código cumple esta condición, debes imprimir: "Código válido encontrado: X" (donde X es el primer número que cumple la condición).
// Si ninguno es divisible por 7, debes imprimir: "No se encontró ningún código válido."
const validCodeVerification = (secretCodes) => {
if(secretCodes[0] % 7 === 0){
   return 'Código válido encontrado:'+ secretCodes[0];
} 
if(secretCodes[1] % 7 === 0){
   return  'Código válido encontrado:'+ secretCodes[1];
} 
if(secretCodes[2] % 7 === 0){
    return 'Código válido encontrado:'+ secretCodes[2]
} 
if(secretCodes[3] % 7 === 0){
    return 'Código válido encontrado:'+ secretCodes[3];
} 
if(secretCodes[4] % 7 === 0){
    return 'Código válido encontrado:'+ secretCodes[4]
} else{
    return "No se encontró ningún código válido."
}
}
validCodeVerification(securityCodeCreator)

//🔍 Desencriptar un Mensaje
// El oráculo te presenta un mensaje cifrado.
// ["Fuego", "Infectados", "Refugio", "Munición", "Suministros"]
// Tu tarea es:
// Obtener la primera, tercera y última letra de la palabra obtenida en un solo string.
const extractLetters = word => {
    const lettersExtractor1 = word.charAt(0);
    const lettersExtractor3 = word.charAt(2);
    const lettersExtractorlast = word.charAt(word.length -1);

    return lettersExtractor1 + lettersExtractor3 + lettersExtractorlast;
}

const decryptMessage = () =>{
    const messages =["Fuego", "Infectados", "Refugio", "Munición", "Suministros"];

   const word1 = extractLetters(messages[0])
   const word2 = extractLetters(messages[1])
   const word3 = extractLetters(messages[2])
   const word4 = extractLetters(messages[3])
   const word5 = extractLetters(messages[4])

   return word1 + word2 + word3 + word4 + word5

}
decryptMessage()

//🔍 Combinar todas las piezas
// Finalmente, debes imprimir un resumen que incluya:
// El nombre de usuario generado.
// El array de códigos de seguridad generados.
// La verificación sobre si se encontró o no un código válido.
// El mensaje desencriptado.
 const finalcombination =()=> {
    const username = randomUsernameGenerator();
    const securityCode = securityCodeCreator();
    const validCode = validCodeVerification(securityCodeCreator);
    const secretMessage = decryptMessage(["Fuego", "Infectados", "Refugio", "Munición", "Suministros"]);

    console.log(`Usuario generado: ${username}
        Códigos de seguridad generados: ${securityCode}
        Códigos válidos encontrados: ${validCode}
        Mensaje desencriptado: ${secretMessage}`)
 }
finalcombination()


//console.log('Usuario generado:'+ username +
//    'Códigos de seguridad generados:' + securityCode +
//    'Códigos válidos encontrados:' + validCode +
//    'Mensaje desencriptado:' + secretMessage)