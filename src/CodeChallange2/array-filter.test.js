import { fiveAndGreaterOnly, evensOnly, fiveCharactersOrFewerOnly, peopleWhoBelongToTheIlluminati, ofAge } from './array-filter.js';

test('Five and greater only', () => {
  const input = [3, 6, 8, 2]; 
  const output = fiveAndGreaterOnly(input); 
  expect(output).toEqual([6, 8]); 
});

test('Evens only', () => {
    const input = [3, 6, 8, 2]; 
    const output = evensOnly(input); 
    expect(output).toEqual([6, 8, 2]); 
  });

  test('Five characters or fewer', () => {
    const input = [ 'by', 'dog', 'wolf', 'family', 'eaten', 'camping']; 
    const output = fiveCharactersOrFewerOnly(input); 
    expect(output).toEqual(['by', 'dog', 'wolf', 'eaten']); 
  });
  
  test('people who are Illuminati', () => {
    const input = [
        { name: 'Angelina Jolie', member: true },
        { name: 'Eric Jones', member: false },
        { name: 'Paris Hilton', member: true },
        { name: 'Kayne West', member: false },
        { name: 'Bob Ziroll', member: true }
    ]; 
  const output = peopleWhoBelongToTheIlluminati(input); 
    expect(output).toEqual([ 
        { name: 'Angelina Jolie', member: true }, 
        { name: 'Paris Hilton', member: true }, 
        { name: 'Bob Ziroll', member: true } 
    ]); 
});

test('people old enough to see The Matrix', () => {
    const input = [
        { name: 'Angelina Jolie', age: 80 },
        { name: 'Eric Jones', age: 2 },
        { name: 'Paris Hilton', age: 5 },
        { name: 'Kayne West', age: 16 },
        { name: 'Bob Ziroll', age: 100 }
    ]; 
  const output = ofAge(input); 
    expect(output).toEqual([ 
        { name: 'Angelina Jolie', age: 80 },
        { name: 'Bob Ziroll', age: 100 } 
    ]); 
});

