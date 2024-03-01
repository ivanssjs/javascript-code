function compras() {
    const productos = [
      { nombre: 'Televisor', precio: 200000 },
      { nombre: 'Lavadora', precio: 100000 },
      { nombre: 'Microondas', precio: 80000 },
      { nombre: 'Aspiradora', precio: 15000 },
      { nombre: 'Nevera', precio: 350000 }
    ];
  
    let totalGastado = 0;
  
    alert("¡Bienvenido a ElectroHouse! ¿Qué producto desea adquirir hoy?");
  
    do {
      let opcion = parseInt(prompt(
        `Ingrese el número de la opción que desea comprar:
        1. Televisor - $200000
        2. Lavadora - $100000
        3. Microondas - $80000
        4. Aspiradora - $15000
        5. Nevera - $350000
        0. Salir`
      ));
  
      if (isNaN(opcion) || opcion < 0 || opcion > productos.length) {
        alert("Opción inválida. Por favor seleccione una opción entre 1 y " + productos.length + " para comprar y 0 para salir.");
        continue;
      }
  
      if (opcion === 0) {
        alert("Saliendo...");
        break;
      }
  
      let cantidad;
      do {
        cantidad = parseInt(prompt("Por favor, ingrese la cantidad de electrodomésticos que desea comprar:"));
        if (isNaN(cantidad) || cantidad < 0) {
          alert("Por favor, ingrese un número válido y mayor o igual a cero.");
        }
      } while (isNaN(cantidad) || cantidad < 0);
  
      const productoElegido = productos[opcion - 1];
      totalGastado += productoElegido.precio * cantidad;
      alert(`¡Felicidades! Ha comprado ${cantidad} ${productoElegido.nombre}(s) por $${productoElegido.precio * cantidad}`);
    } while (true);
  
    alert(`El total gastado es de $${totalGastado}.`);
    alert("¡Muchas gracias por elegirnos! Vuelva pronto.");
  }
  
  compras();
  
  