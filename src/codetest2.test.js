import { stringItUp } from './codechallenges.js';
test ('stringItUp', () => {
      const input = [2, 5, 100]; // arrange
      const output = stringItUp(input); // act
      expect(output).toEqual(["2", "5", "100"]); // assert
});