



const abc = 'abcdefghijklmnñopqrstuvwxyz';




 export const cifrarTexto= (texto)=> {
    // Definir las sustituciones
    const sustituciones = {
        'e': 'enter',
        'o': 'ober',
        'i': 'imes',
        'a': 'ai',
        'u': 'ufat'
    };

    const textoCifrado = texto.replace(/[eoiau]/g, letra => sustituciones[letra] || letra);
   
    return textoCifrado;
}

export const descifrarTexto = (textoCifrado) => {
    // Definir las sustituciones inversas
    const sustitucionesInversas = {
        'enter': 'e',
        'ober': 'o',
        'imes': 'i',
        'ai': 'a',
        'ufat': 'u'
    };

   
    const textoDescifrado = textoCifrado.replace(/(enter|ober|imes|ai|ufat)/g, palabra => sustitucionesInversas[palabra] || palabra);

    return textoDescifrado;
}
