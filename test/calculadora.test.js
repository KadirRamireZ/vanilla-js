import {
  sumar,
  restar,
  dividir,
  multiplicar,
  filtrarNumerosPares,
  filtrarNumerosQuintos,
} from "../src/calculadora.js";

describe("sumar", () => {
  test("sumar 1 + 2 es 3", () => {
    expect(sumar(1, 2)).toBe(3);
  });
});

describe("restar", () => {
  test("restar 6 - 2 es 4", () => {
    expect(restar(6, 2)).toBe(4);
  });
});

describe("dividir", () => {
  test("dividir 6 / 2 es 3", () => {
    expect(dividir(6, 2)).toBe(3);
  });
});

describe("multiplicar", () => {
  test("multiplicar 6 * 2 es 12", () => {
    expect(multiplicar(6, 2)).toBe(12);
  });
});

describe("filtrarNumerosPares", () => {
  test("filtrarNumerosPares % 2 === 0", () => {
    expect(filtrarNumerosPares([1, 2, 3, 4, 5, 6])).toStrictEqual([2, 4, 6]);
  });
});

describe("filtrarNumerosQuintos", () => {
  test("filtrarNumerosQuintos % 5 === 0", () => {
    expect(filtrarNumerosQuintos([5, 6, 7, 8, 9, 10])).toStrictEqual([5, 10]);
  });
});
