import capitalNames from './codechallenges.js'

test('capNames', () => {
    const input = ["john", "JACOB", "jinGleHeimer", "schmidt"]; // arrange
    const output = capitalNames(input); // act
    expect(output).toEqual(["John", "Jacob", "Jingleheimer", "Schmidt"]); // assert
  });