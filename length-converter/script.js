function convert() {
    // Obtener los valores de entrada
    const amount = document.getElementById("amount").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    // Definir las relaciones de conversión
    const ratios = {
      m: 1,
      cm: 0.01,
      km: 1000,
      in: 0.0254,
      ft: 0.3048,
      yd: 0.9144,
      mi: 1609.34
    };

    // Convertir la entrada a metros
    const meters = amount * ratios[from];

    // Convertir a la unidad de salida
    const result = meters / ratios[to];

    // Mostrar el resultado
    document.getElementById("result").innerHTML = `${amount} ${from} = ${result.toFixed(4)} ${to}`;
}
