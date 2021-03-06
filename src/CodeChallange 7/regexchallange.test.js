import { sortByChildren, containsW } from './regexchallange.js'
describe('Testing challenge 1', () => {
    test('It should sort the characters by number of children', () => {
        let characters = [
            {
              name: 'Eddard',
              spouse: 'Catelyn',
              children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
              house: 'Stark'
            },
            {
              name: 'Jon A.',
              spouse: 'Lysa',
              children: ['Robin'],
              house: 'Arryn'
            },
            {
              name: 'Cersei',
              spouse: 'Robert',
              children: ['Joffrey', 'Myrcella', 'Tommen'],
              house: 'Lannister'
            },
            {
              name: 'Daenarys',
              spouse: 'Khal Drogo',
              children: ['Drogon', 'Rhaegal', 'Viserion'],
              house: 'Targaryen'
            },
            {
              name: 'Mace',
              spouse: 'Alerie',
              children: ['Margaery', 'Loras'],
              house: 'Tyrell'
            },
            {
              name: 'Euron',
              spouse: null,
              children: [],
              house: 'Greyjoy'
            },
            {
              name: 'Jon S.',
              spouse: null,
              children: [],
              house: 'Snow'
            }
          ];
      expect(sortByChildren(characters)[0].name).toStrictEqual('Euron');
      expect(sortByChildren(characters)[0].children.length).toStrictEqual(0);
    });
  });

  describe('Testing challenge 2', () => {
    test('if string contains lowercase w', () => {
      expect(containsW('hello world')).toStrictEqual(true);
      expect(containsW('Hello World')).toStrictEqual(false);
      expect(containsW('hello everyone')).toStrictEqual(false);
    });
  });
  