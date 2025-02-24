import multiplicar from "./multiplicador.js";

describe("Multiplicar", () => {
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(3, 2)).toEqual(6);
  });
});

describe("Multiplicar", () => {
  it("deberia multiplicar un numero negativo y un numero positvo se suma", () => {
    expect(multiplicar(-3, 3)).toEqual(-9);
  });
}); 

describe("Multiplicar",()=>{
  it("Deberia multiplicar un numero negativo con un casilla vacia",()=>{
    expect(multiplicar(-8)).toEqual(NaN);
  });
});

describe("Multiplicar",()=>{
  it("Deberia multiplicar un numero negativo y un numero negativo",()=>{
    expect(multiplicar(-12,-12)).toEqual(144);
  });
});

describe("Multiplicar",()=>{
  it("Deberia multiplicar cuando las casillas vacias",()=>{
    expect(multiplicar()).toEqual(NaN);
  });
});

describe("multiplicar",()=>{
  it("Deberia multiplicar cuando un numero cero sumado con otro negativo",()=>{
    expect(multiplicar(0,-12)).toBeCloseTo(0);
  });
});