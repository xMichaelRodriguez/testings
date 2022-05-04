const PI = 3.1416;
const form = document.getElementById("form");
const radio = document.getElementById("inputRadio");
const result = document.getElementById("result");


form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const value = radio.value;
  if (value <= 0) return alert("escribe un radio");

  const { area, perimetro } = calcular(value);

  result.innerHTML = `
    <div class="alert alert-primary" role="alert">
    <p>El area es: ${area}</p>
    <p>El perimetro es: ${perimetro}</p>
    </div>
    `;
}

function calcular(radio) {
    
  const area = (PI * Math.pow(radio, 2)).toFixed(2)
  const perimetro = (2 * PI * radio).toFixed(2)

  return {
    area,
    perimetro,
  };
}
