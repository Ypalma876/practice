//------------- 1 -------------//
/* Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided 
array will contain exactly 4 sub-arrays. */

function largestOfFour(arr) {
    // Inicializo un array vacío para ir guardando los valores más altos
    let largests = []
  
    // primer for para iterar el array de arrays
    for (let i = 0; i < arr.length; i++) {
      // Establezco la primera instancia de cada array como el mayor para compararlo con los siguientes
      let largest = arr[i][0] 

      for (let j = 1; j < arr[i].length; j++){ // 2do for para iterar cada subarray

        if (arr[i][j] > largest) {
          largest = arr[i][j]
        }
      }

      // pusheo el valor más alto de cada subarray
      largests.push(largest);
    }

    return largests;
}
  
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//------------- 2 -------------//
/* Check if a string (first argument, str) ends with the given target string (second argument, target). */

function confirmEnding(str, target) {
    return str.slice(-target.length) === target // cuando le paso un valor negativo a slice, corta de atrás hacia adelante
                                                // Acá comparo que el corte hecho por slice coincida con el target
  }
  
  confirmEnding("Bastian", "n");