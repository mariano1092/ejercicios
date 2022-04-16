//let cadena = "A ver si ahora funciona"

/* FUNCIÓN PARA CONTAR CARACTERES

function contarCaracteres(cadena) {

    if (cadena !== String) {
        cadena = cadena.toString()
    }

    return cadena.length
}

console.log(contarCaracteres(cadena))
*/
/* FUNCIÓN PARA CORTAR CADENA
function cortarCadena(cadena, indice) {
   return cadena.slice(cadena, indice)
}

console.log(cortarCadena(cadena, 12))
*/

/* FUNCIÓN PARA CORTAR UNA CADENA MEDIANTE UN CARACTER 

function cortarCadenaPorCaracter(cadena, caracter) {
    console.log(cadena, caracter)
    return cadena.split(caracter)

}

console.log(cortarCadenaPorCaracter(cadena, " "))
*/

/* FUNCIÓN PARA REPETIR UNA CADENA
function repetirCadena(cadena, cantidad) {
    return cadena.repeat(cantidad)
}

console.log(repetirCadena(cadena, 2))
*/

/* FUNCIÓN INVERTIR CADENA

function invertirCadena(cadena) {
    let nuevaCadena = ""

    for (let i = cadena.length - 1; i >= 0; i--) {
        nuevaCadena += cadena[i]
    }
    return nuevaCadena
}

*/

/* FUNCION PARA CONTAR PALABRAS EN UN TEXTO

function contarPalabra(texto, palabra) {
    let contador = 0
    let nuevoTexto = texto.split(" ")
    console.log(nuevoTexto)

    if (!contador) return "No se encontraron coincidencias"

    for (let index = 0; index < nuevoTexto.length; index++) {
        if (nuevoTexto.includes(palabra)) {
            contador++
        }

        return contador
    }
}

console.log(contarPalabra("Hola como va Hola", " "))

*/

/*FUNCION PALÍNDROMO

function palindromo(palabra) {
    let nuevaPalabra = invertirCadena(palabra.toLowerCase())
    console.log(nuevaPalabra, palabra)

    if (!nuevaPalabra.includes(palabra.toLowerCase())) return "No hay coincidencia"
    return "Hay coincidencia"
}

*/

/* FUNCIÓN ELIMINAR UN PATRON


function eliminarPatron(palabras, patron) {
    let expresion = new RegExp(patron, "ig")

    return palabras.replace(expresion, "")

}

console.log(eliminarPatron("a abc abc abd abc abc", "a")
)
*/

/* FUNCION NUMERO ALEATORIO ENTRE 501 Y 600

function numeroAleatorio() {
    do {
        numero = Math.round(Math.random() * 1000)
    } while (numero < 500 || numero >= 600)
    return numero
}

console.log(numeroAleatorio())

*/

/* FUNCION NUMERO CAPICÚA

function numeroCapicua(numero) {
    let num = numero.toString()
    num = num.split("").reverse().join("")
    num = parseInt(num)
    console.log(num, numero)

    if (num === numero) return "Es Capicúa"
    return "No es Capicúa"

}

console.log(numeroCapicua(1225))

*/

/* FUNCION FACTORIAL
function factorial(numero) {
    let total = 1;
    for (let i = 1; i <= numero - 1; i++) {
        total = total * (i + 1)
    }
    return total
}

console.log(factorial(7))
*/

/* FUNCION NUMERO PRIMO

function numeroPrimo(num) {
    let primo = false
    for (let i = 0; i < num; i++) {
        if (num % i == 0) {
            primo = true;
            break;
        }

    }
    return true
}

console.log(numeroPrimo(7))
*/

/* FUNCION NUMERO PAR O IMPAR

function numeroPar(num) {
    console.log(num)
    num % 2 == 0
        ? console.log("Número primo")
        : console.log("El numero no es primo")
}


*/

/* FUNCION TEMPERATURA CELSIUS A FAHRENHEIT


function convertirTemperatura(grados, medida) {
    const celsius = 62;
    const fahrenheit = -17.22;

    (medida.toLowerCase() === "f")
        ? console.log(`${grados} Fº son ${grados * fahrenheit} Cº`)
        : medida.toLowerCase() === "c"
            ? console.log(`${grados} Cº son ${grados * celsius} Fº`)
            : console.error("Ingresó un valor erroneo")
}
convertirTemperatura(1, "c")

*/
/*FUNCION DE BINARIO A DECIMAL

function baseBinaria(num) {
  num = num.toString();
  num = num.split("").reverse();
  let total = 0;

  for (let i = 0; i < num.length; i++) {
    let numero = 0;

    if (num[i] === "1") {
      numero = parseInt(Math.pow(2, i));
      total = total + numero;
    }
  }

  return total;
}

console.log(baseBinaria(10101100));

*/

/* FUNCION CONTAR VOCALES Y CONSONANTES

function contarVocalesYConsonantes(texto) {
  let vocales = 0;
  let consonantes = 0;
  texto = texto.split(" ").join("");
  console.log(texto);

  for (let i = 0; i < texto.length; i++) {
    if (
      texto[i] === "a" ||
      texto[i] === "e" ||
      texto[i] === "i" ||
      texto[i] === "o" ||
      texto[i] === "u"
    ) {
      vocales++;
    } else {
      consonantes++;
    }
  }

  return `El texto contiene ${vocales} vocales y ${consonantes} consonantes`;
}

*/

/* FUNCION CONTAR VOCALES Y CONSONANTES CON EXPRESIONES REGULARES

const contarVocalesConsonantes = (texto) => {
  let vocales = 0;
  let consonantes = 0;

  texto = texto.toLowerCase();

  for (const letra of texto) {
    if (/[aeiouáéíóú]/.test(letra)) vocales++;
    if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
  }

  return {
    texto,
    vocales,
    consonantes,
  };
};

console.log(contarVocalesYConsonantes("Hola como estas"));
console.log(contarVocalesConsonantes("Hola como estas?"));

*/
/* FUNCION PARA VALIDAR NOMBRE 
function validarNombre(nombre = '') {
  if (!nombre) return 'No ingresaste un nombre.'
  if (typeof nombre !== 'string') return 'El tipo ingresado no es una palabra'

  let expReg = /^[A-Za-zñÑÁÉÍÓÚáéíóú]+$/g.test(nombre)

  return expReg ? console.log('Nombre válido') : console.log('Nombre inválido')
}

validarNombre('Marinao')

*/

/* FUNCION PARA VALIDAR EMAIL

function validarCorreo(correo) {
  let expReg =
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
      correo
    )

  return expReg
    ? console.log('Es un correo válido')
    : console.log('No es un correo válido')
}

validarCorreo('mariano1092@gmail.com')
*/

/* FUNCION PARA ELEVAR UN NUMERO

function elevarNumero(array) {
  let array2 = []
  if (!array) return console.log('Ingresó un Array vacio')

  for (let i = 0; i < array.length; i++) {
    array2.push(array[i] * array[i])
  }
  return console.log(array2)
}

elevarNumero([1, 4, 5])

// OTRA SOLUCIÓN CON MAP

function elevarNumero2(array) {
  let nuevoArray = array.map(n => n*n)
  return nuevoArray
}

*/

/* FUNCION PARA ORDER UN ARRAY Y MOSTRAR EL MAYOR Y MENOR

function numeroMasGrandes(array = undefined) {
  if (!(array instanceof Array)) return console.log('No es un Array')
  if (!(array === 'undefined')) return console.log('Ingresó un Array vacio')

  array.sort((num1, num2) => num1 - num2)

  let numMenor = array[0]
  let numMayor = array[array.length - 1]

  return console.log(
    `El número más pequeño es ${numMenor} y el número mayor es ${numMayor}.`
  )
}

numeroMasGrandes([])

*/

/* FUNCION NUMERO PAR E IMPAR

function numeroParEImpar(array = undefined) {
  if (array === undefined) return console.log('No ingresaste un arreglo de números.')
  if (!(array instanceof Array)) return console.log('No es un Array')
  if(array.length === 0) return console.error("El array está vacio.")

  for(let num of array){
    if(typeof num !== "number") return console.error('${num} no es un número.')
  }

  let arrayPar = []
  let arrayImpar = []

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arrayPar.push(array[i])
    } else {
      arrayImpar.push(array[i])
    }
  }

  return console.log({ arrayPar, arrayImpar })
}

numeroParEImpar([1, 2, 3, 4, 5, 6, 8, 2, 6, 4, 2, 3])

*/

/* FUNCION ORDENAR ASCENDENTE Y DESCENDENTE

function ordenarAscendenteYDescendente(array) {
  array.sort((num1, num2) => num1 - num2)
  let array2 = [...array].reverse()
  return {
    asc: array,
    des: array2,
  }
}

console.log(ordenarAscendenteYDescendente([5.6, 4, 2, 7, 5, 3]))

*/

/* FUNCION ELIMINAR DUPLICADO

function eliminarDuplicado(array) {
  let array2 = []
  array.forEach(caracter => {
    if (!array2.includes(caracter)) array2.push(caracter)
  })

  return array2
}

console.log(eliminarDuplicado([1, 2, 3, 2, 1, 'x', 'a', 'a', 'b', 'ab']))

*/

/* FUNCION SACAR PROMEIO

function sacarPromedio(array) {
  let total = 0
  let divisor = array.length
  array.forEach(digito => {
    total += digito
  })

  return (total /= divisor)
}

console.log(sacarPromedio([1, 2, 3, 4, 10]))
*/

class Pelicula {
  constructor({ id, titulo, director, año, pais, generos, calificacion }) {
    this.id = id
    this.titulo = titulo
    this.director = director
    this.año = año
    this.pais = pais
    this.generos = generos
    this.calificacion = calificacion

    this.validarIMDB(id)
    this.validarDirector(director)
    this.validarTitulo(titulo)
    this.validarPais(pais)
    this.validarGeneros(generos)
    this.validarCalificacion(calificacion)
  }

  static get listaGeneros() {
    return [
      'Action',
      'Adult',
      'Adventure',
      'Animation',
      'Biography',
      'Comedy',
      'Crime',
      'Documentary',
      'Drama',
      'Family',
      'Fantasy',
      'Film Noir',
      'Game-Show',
      'History',
      'Horror',
      'Musical',
      'Music',
      'Mystery',
      'News',
      'Reality-TV',
      'Romance',
      'Sci-Fi',
      'Short',
      'Sport',
      'Talk-Show',
      'Thriller',
      'War',
      'Western',
    ]
  }

  static mostrarGeneros() {
    return console.info(
      `lista de Géneros Aceptados: ${Pelicula.listaGeneros.join(', ')}`
    )
  }

  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" está vacia.`)
    if (typeof valor !== 'string')
      return console.warn(`${propiedad} "${valor}" No es una cadena de texto.`)

    return true
  }

  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" está vacío.`)
    if (typeof valor !== 'number')
      return console.warn(`${propiedad} "${valor}" no es un número.`)
    return true
  }

  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" está vacío.`)
    if (!(valor instanceof Array))
      return console.warn(`${propiedad} "${valor}" no es un Arreglo.`)
    if (valor.length === 0)
      return console.warn(`${propiedad} "${valor}" no tiene datos.`)

    for (let caracter of valor) {
      if (typeof caracter !== 'string')
        return console.warn(`${caracter} no es una cadena de texto.`)
    }

    return true
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.warn(
        `${propiedad} "${valor}" excedió el largo permitido de caracteres. (${longitud})`
      )

    return true
  }

  validarIMDB(id) {
    if (this.validarCadena('IMDB id', id))
      if (!/^([a-z]){2}([0-9]){7}$/.test(id))
        return console.warn(
          `El IMDB id: "${id}" es incorrecto. Debe tener nueve caracteres y debe empezar con dos letras minúsculas seguido de siete números.`
        )
  }

  validarTitulo(titulo) {
    if (this.validarCadena('IMDB título', titulo))
      this.validarLongitudCadena('Título', titulo, 100)
  }

  validarDirector(director) {
    if (this.validarCadena('IMDB Director', director))
      this.validarLongitudCadena('Director', director, 100)
  }

  validarAño(año) {
    if (this.validarNumero('Año de Estreno', año))
      if (!/^([0-9]){4}$/.test(año))
        return console.warn(
          `Año de Estreno: "${año}" es incorrecto. Debe tener 4 números enteros.`
        )
  }

  validarPais(pais) {
    this.validarArreglo('Pais', pais)
  }

  validarGeneros(generos) {
    if (this.validarArreglo('Géneros', generos)) {
      for (let genero of generos) {
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(
            `Genero(s) Incorrecto(s) "${genero}" no está incluida en la lista.`
          )
          Pelicula.mostrarGeneros()
        }
      }
    }
  }
  validarCalificacion(calificacion) {
    if (this.validarNumero('Calificación:', calificacion)) {
      return calificacion < 0 || calificacion > 10
        ? console.warn('La calificación tiene que ser entre 0 y 10')
        : (this.calificacion = calificacion.toFixed(1))
    }
  }

  mostrarFicha({ id, titulo, director, año, pais, generos, calificacion }) {
    console.info(
      `Título: ${titulo} \nDirector: ${director} \nAño: ${año} \nPaises: ${pais.join(
        ' - '
      )} \nGéneros: ${generos.join(
        ' - '
      )} \nCalificación: ${calificacion} \nID IMDB: ${id}`
    )
  }
}

const peliculasFavoritas = [
  {
    id: 'tt1234567',
    titulo: 'Señor de los Anillos',
    director: 'Peter Jackson',
    año: 2010,
    pais: ['Nueva Zelanda'],
    generos: ['Comedy', 'Action'],
    calificacion: 9,
  },
  {
    id: 'jh1234456',
    titulo: 'Captain America: The Winter Soldier',
    director: 'Pepito',
    año: 2012,
    pais: ['EE.UU'],
    generos: ['Action', 'Comedy'],
    calificacion: 8.5,
  },
  {
    id: 'jh1234456',
    titulo: 'Equilibrium',
    director: 'Pepito',
    año: 2000,
    pais: ['EE.UU', 'Germany'],
    generos: ['Action', 'Comedy'],
    calificacion: 8.5,
  },
]

peliculasFavoritas.forEach(element => {
  new Pelicula(element).mostrarFicha(element)
})
