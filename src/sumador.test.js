import sumar from "./sumador.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
});

describe("Sumar", () => {
  it("deberia sumar un numero negativo y un numero positvo se suma", () => {
    expect(sumar(-3, 2)).toEqual(-1);
  });
}); 

describe("Sumar",()=>{
  it("Deberia sumar un numero negativo con un casilla vacia",()=>{
    expect(sumar(8)).toEqual(NaN);
  });
});

describe("Sumar",()=>{
  it("Deberia sumar un numero negativo y un numero negativo",()=>{
    expect(sumar(-12,-1)).toEqual(-13);
  });
});

describe("Sumar",()=>{
  it("Deberia sumar cuando las casillas vacias",()=>{
    expect(sumar()).toEqual(NaN);
  });
});

describe("Sumar",()=>{
  it("Deberia sumar cuando un numero cero sumado con otro negativo",()=>{
    expect(sumar(0,-1)).toEqual(-1);
  });
});