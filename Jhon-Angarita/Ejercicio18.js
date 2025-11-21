let productos2 = [
  {nombre: "Papas", precio: 2},
  {nombre: "Carne", precio: 15},
  {nombre: "Leche", precio: 3}
];

let productosCaros = productos2
 .filter((producto) => producto.precio > 4)
  .map((producto) => producto.nombre);

console.log(productos2);
console.log(productosCaros);
