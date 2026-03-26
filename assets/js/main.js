/*
Ejercicios

Consejos:
1. Para mostrar el resultado de cada ejercicio, escribí un console.log con el formato: console.log('Ex 1.', valor o función).
2. Investigá un poco sobre el uso de reduce.
3. Creá un archivo js llamado utils.js y colocá allí todas las funciones auxiliares. (Ej. 10 y 14)

1) Importar el array songs usando módulos.

2. Usar la función map para crear un nuevo array con el título de cada canción en letras mayúsculas.

3. Usar la función filter para crear un nuevo array con todas las canciones lanzadas antes de 1975.

4. Usar destructuring para crear una variable que almacene el título de la primera canción del array.

5. Usar la función find para obtener el objeto que representa la canción "Hotel California".

6. Usar el operador rest para crear una función que reciba cualquier cantidad de argumentos y devuelva su suma. (Consejo: usar reduce)

7. Usar la función map y template literals para crear un nuevo array con strings en el formato "Título - Artista (Año)" para cada canción.

8. Usar destructuring y la función filter para crear un nuevo array con los títulos de todas las canciones de The Beatles.

9. Usar arrow functions y la función reduce para calcular la cantidad total de años entre las fechas de lanzamiento de todas las canciones. (Consejo: usar reduce)

10. Crear un módulo que exporte una función para calcular el promedio del año de lanzamiento de las canciones del array de entrada. (Consejo: usar reduce)

11. Usar la función find para obtener el objeto que representa la canción con el título más largo.

12. Usar destructuring y template literals para mostrar en consola el título, artista y año del primer elemento del array.

13. Usar el operador rest para crear un nuevo array sin el primer elemento.

14. Importar la función filter() desde un módulo utils.js y usarla para crear un nuevo array con todas las canciones que tengan "Love" en el título.

15. Usar el método every() para verificar si todas las canciones tienen títulos de 5 o más caracteres.

16. Usar el método some() para verificar si hay alguna canción de los años 80.

17. Usar un template literal para crear un string que diga "The Beatles lanzó Let It Be en 1970."

18. Usar el método map() para crear un nuevo array solo con los nombres de los artistas.

19. Crear una función llamada randomSong que devuelva una canción del array songs de forma aleatoria. Mostrar en consola la llamada a esta función 3 veces.

20. Escribir tu propia función usando al menos 3 conceptos.

21. Generar una canción tomando un artista random, un año random y un título random.

22. Mostrar el mensaje 'El clima en [ciudad] es de [temperatura] [unidad]'

const clima = {
  ciudad: "buenos Aires",
  temperatura: 30,
  unidad: "Grados Centígrados",
};

const mostrarClima = () => {}


*/

//1) Importar el array songs usando módulos.

import songs from "./songs.js"

console.log(songs)

//2. Usar la función map para crear un nuevo array con el título de cada canción en letras mayúsculas.

const titulosMayusculas = songs.map(cancion => cancion.title.toUpperCase());

console.log(titulosMayusculas);

//3. Usar la función filter para crear un nuevo array con todas las canciones lanzadas antes de 1975.

const filtros=songs.filter(cancion=>cancion.year<1975)
console.log(filtros)

//4. Usar destructuring para crear una variable que almacene el título de la primera canción del array.

const { title } = songs[0];

console.log(title);

//5. Usar la función find para obtener el objeto que representa la canción "Hotel California".

const encontrar= songs.find(california=>california.title==="Hotel California")
console.log(encontrar)

//6. Usar el operador rest para crear una función que reciba cualquier cantidad de argumentos y devuelva su suma. (Consejo: usar reduce)

const sumar = (...numeros) =>
  numeros.reduce((acumulador, total) => acumulador + total, 0);

console.log(sumar(1, 2, 3, 4));

//7. Usar la función map y template literals para crear un nuevo array con strings en el formato "Título - Artista (Año)" para cada canción.

const nuevoArray=songs.map(string=>`${string.title}-${string.artist}-${string.year}`)

console.log(nuevoArray)

//8. Usar destructuring y la función filter para crear un nuevo array con los títulos de todas las canciones de The Beatles.

const superBeatles=songs.filter(({artist})=>artist ==="The Beatles").map(artist => artist.title)
console.log(superBeatles)

//9-Usar arrow functions y la función reduce para calcular la cantidad total de años entre las fechas de lanzamiento de todas las canciones. (Consejo: usar reduce)


const reducir=songs.reduce((acumulador,total)=>acumulador+total.year,0)
console.log(reducir)

//10. Crear un módulo que exporte una función para calcular el promedio del año de lanzamiento de las canciones del array de entrada. (Consejo: usar reduce).

import { averageYear } from "./utils.js"; 
const resultado = averageYear(songs); 
console.log(resultado);

// 11 . Usar la función find para obtener el objeto que representa la canción con el título más largo.

const maxLength = Math.max(...songs.map(song => song.title.length));

const tituloLargo = songs.find(song => song.title.length === maxLength);

console.log(tituloLargo);

//12.Usar destructuring y template literals para mostrar en consola el título, artista y año del primer elemento del array.

const {title:titulo,artist,year}=songs[0]

console.log(`Título: ${titulo}, Artista: ${artist}, Año: ${year}`);

//13.Usar el operador rest para crear un nuevo array sin el primer elemento.

const [primero, ...nuevoArray13] = songs;

console.log(nuevoArray13);

//14.Importar la función filter() desde un módulo utils.js y usarla para crear un nuevo array con todas las canciones que tengan "Love" en el título.

import { filter } from "./utils.js"; 

const nuevoArray14 = filter(songs, (cancion) =>cancion.title.includes("Love"));

console.log(nuevoArray14);

//15Usar el método every() para verificar si todas las canciones tienen títulos de 5 o más caracteres.

//* Devuelve true si todos los elementos lo cumplen
const recorrer=songs.every(letras=>letras.title.length>=5)
console.log(recorrer)

//16. Usar el método some() para verificar si hay alguna canción de los años 80.

//* Devuelve true si al menos 1 cumple
const añosOchenta=songs.some(verificarSome=>verificarSome.year>=1980&&verificarSome.year<=1989)
console.log(añosOchenta)

//17.Usar un template literal para crear un string que diga "The Beatles lanzó Let It Be en 1970."

const {title:titulo2,artist:artista2,year:año2}=songs[8]
const mensaje = `${artista2} lanzó ${titulo2} en ${año2}.`;

console.log(mensaje);

//18.Usar el método map() para crear un nuevo array solo con los nombres de los artistas.

const nombresArtistas=songs.map(array18=>array18.artist)
console.log(nombresArtistas)

//19.Crear una función llamada randomSong que devuelva una canción del array songs de forma aleatoria. Mostrar en consola la llamada a esta función 3 veces.

function randomSong(){
  const indice=Math.floor(Math.random() * songs.length);
  return songs[indice]
}

console.log(randomSong());
console.log(randomSong());
console.log(randomSong());

//20.Escribir tu propia función usando al menos 3 conceptos.

const buscarCancion = (nombre) => {
  const cancion = songs.find(buscando => buscando.title === nombre);

  if (!cancion) {
    return "Canción no encontrada";
  }else{
      const { title, artist, year } = cancion;
      return `${artist} lanzó "${title}" en ${year}.`;
    }

  
};

console.log(buscarCancion("Let It Be"));


//21.Generar una canción tomando un artista random, un año random y un título random.

const randomIndex1 = Math.floor(Math.random() * songs.length);
const randomIndex2 = Math.floor(Math.random() * songs.length);
const randomIndex3 = Math.floor(Math.random() * songs.length);

const titulo21=songs[randomIndex1].title
const artista21 = songs[randomIndex2].artist;
const year21 = songs[randomIndex3].year;

console.log(`Título: ${titulo21}, Artista: ${artista21}, Año: ${year21}`)

//22.Mostrar el mensaje 'El clima en [ciudad] es de [temperatura] [unidad]'

const clima2 = {
  ciudad: "buenos Aires",
  temperatura: 30,
  unidad: "Grados Centígrados",
};

const mostrarClima = () => {
  const { ciudad, temperatura, unidad } = clima;
  return `El clima en${ciudad} es de ${temperatura} ${unidad}.`;
}

console.log(mostrarClima());