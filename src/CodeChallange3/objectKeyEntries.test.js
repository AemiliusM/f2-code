import { capitalizeObjectKeys, sortedKeys } from '../CodeChallange3/objectKeyEntries.js';

test('it capitalizes the keys', () => {
  const dataObject = { name: 'Angelina Jolie', age: 80 };
  const output = capitalizeObjectKeys(dataObject); 
  expect(output).toEqual(['NAME', 'AGE']); 

});

test('it sorts the keys by shortest to longest', () => {
    const dataObject = { name: 'Spot', age: 3, isDog: true, friends: ['Rover', 'Steve', 'Fluffy'] }; //arrange
    const output = sortedKeys(dataObject); //act
    expect(output).toEqual(['age', 'name', 'isDog', 'friends']); //assert
  });