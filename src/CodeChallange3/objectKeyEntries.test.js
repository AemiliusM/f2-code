import { capitalizeObjectKeys, sortedKeys, getFilteredKey} from '../CodeChallange3/objectKeyEntries.js';

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

