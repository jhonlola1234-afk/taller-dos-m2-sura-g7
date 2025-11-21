let tablero = ["X", "O", "X"];

let nuevoTablero = tablero.map((valor, indice) => {
    if (indice === 1) {
        return "X";
    }
    return valor;
});

console.log(nuevoTablero);