const {calculate} = require('./calculate');

describe('calculate', () => {
  it(`given two strings representing numbers and a string of '+', returns the sum of those numbers`, () => {
    expect(calculate('+', '3', '5')).toBe(8)
  });

  it(`given two strings representing numbers and a string of '-', returns the second number subtracted from the first number`, () => {
    expect(calculate( '-', '3', '5')).toBe(-2)
  });

  it(`given two strings representing numbers and a string of 'x', returns the second number subtracted from the first number`, () => {
    expect(calculate('x', '3', '5')).toBe(15)
  });

  it(`given two strings representing numbers and a string of '/', returns the first number divided by the second number`, () => {
    expect(calculate('/', '15', '5')).toBe(3)
  });

  it(`given two strings representing numbers and a string of '%', returns the result of a modulus operation of the first number by the second number`, () => {
    expect(calculate('%', '15', '4')).toBe(3)
  });

  it(`given a string that doesn't match one of our operations, gives us a nice error message`, () => {
    expect(calculate('2', '3', 'troogle')).toBe(`Sorry, that's not a mathematical operation!`)
  })

  it(`allows for the word 'plus' in addition`, () => {
    expect(calculate('plus', '3', '5')).toBe(8)
  })

  it(`allows for the word 'minus' in subtraction`, () => {
    expect(calculate('minus', '3', '5')).toBe(-2)
  })

  it(`allows for the word 'times' in multiplication`, () => {
    expect(calculate('times', '3', '5')).toBe(15)
  })

  it(`allows for an upper case 'X' in multiplication`, () => {
    expect(calculate('X', '3', '5')).toBe(15)
  })

  it(`allows for the word 'modulus' in a modulus operation`, () => {
    expect(calculate('modulus', '15', '4')).toBe(3)
  })
  
  it(`allows for the shortening 'mod' in a modulus operation`, () => {
    expect(calculate('mod', '15', '4')).toBe(3)
  })
});