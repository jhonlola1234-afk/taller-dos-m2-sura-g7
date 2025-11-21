let grupos = [["Ana", "Luis"], ["Maria", "Juan"], ["Pedro"]];

let listaPlana = grupos.reduce((acumulado, grupo) => acumulado.concat(grupo), []);

console.log("Grupos:", grupos);
console.log("Lista plana:", listaPlana);
