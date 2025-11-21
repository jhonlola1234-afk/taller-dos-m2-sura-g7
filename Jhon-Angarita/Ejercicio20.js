let puntuaciones = [50, 85, -10, 100, 0, 30];

let validas = puntuaciones.filter((puntuacion) => puntuacion >= 0);

let bonificadas = validas.map((puntuacion) => puntuacion + 10);

let totalPuntos = bonificadas.reduce((acumulado, valor) => acumulado + valor);

console.log(puntuaciones);
console.log(validas);
console.log(bonificadas);
console.log(totalPuntos);