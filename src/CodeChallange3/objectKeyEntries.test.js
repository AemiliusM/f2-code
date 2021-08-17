import { capitalizeObjectKeys, sortedKeys, getFilteredKey, getArrayOfKeysAndValues, sortedArraysByValuesLength} from '../CodeChallange3/objectKeyEntries.js';

test('it capitalizes the keys', () => {
  const dataObject = { name: 'Angelina Jolie', age: 80 };
  const output = capitalizeObjectKeys(dataObject); 
  expect(output).toEqual(['NAME', 'AGE']); 

});

test('sorts keys by shortest to longest', () => {
    const dataObject = { name: 'Spot', age: 3, isDog: true, friends: ['Rover', 'Steve', 'Fluffy'] }; 
    const output = sortedKeys(dataObject); 
    expect(output).toEqual(['age', 'name', 'isDog', 'friends']); 
  });

test('to see if function filters out age key', () => {
    const dataObject = { name: 'Angelina Jolie', isSpot: false, age: 80, };
  const output = getFilteredKey(dataObject); 
  expect(output).toEqual(['age']); 
});

test('take an object and return a new array of arrays key vaule pairs', () => {
  const dataObject = { name: 'Angelina Jolie', age: 80 }; //arrange
  const output = getArrayOfKeysAndValues(dataObject); //act
  expect(output).toEqual([['name', 'Angelina Jolie'], ['age', 80]]); //assert
});

test('to give back an array of arrays of key value pairs sorted longest to shortest by values length', () => {
  const dataObject = { name: 'Bob', friend: 'Tom Hanks', location: 'Los Angeles' }; //arrange
  const output = sortedArraysByValuesLength(dataObject); //act
  expect(output).toEqual([['location', 'Los Angeles'], ['friend', 'Tom Hanks'], ['name', 'Bob']]); //assert
});

