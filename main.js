let f;
let c;

console.log(inputC)

function convFahrenheit() 
{
    let celsius = document.querySelector("#inputC").value;
    let campo = document.querySelector("#Fahrenheit");

    if (celsius === "") 
    {
        campo.innerHTML = " "
    }
    else 
    {
        f = (celsius * 1.8) + 32
        exibirValor(f, campo)
    }
}

function exibirValor(valor, campo) 
{
    limparCampo(campo)
    campo.append(`${valor}°`)
}

function convCelsius() 
{
    let fahrenheit = document.querySelector("#inputF").value;
    let campo = document.querySelector("#Celsius");

    if (fahrenheit === "") 
    {
        campo.innerHTML = " "
    }
    else 
    {
        c = (fahrenheit - 32) / 1.8;
        exibirValor(c, campo)
    }
}

console.log(convFahrenheit(36));
console.log(convCelsius(96.8));

function limparCampo(campo) 
{
    campo.innerHTML = " "
}

function maskGrau() {
    let celsius = document.querySelector("#inputC").value;
    return celsius.replace(/^(\d{1}).*/, "$1°");
}