// const { expect, it } = require('@jest/globals');
// const { rejects } = require('assert/strict');
// const { describe } = require('yargs');
const { describe, it, expect } = require('@jest/globals');
const { getUserName } = require('./exercise2.js');
// const { getRepos } = require('./exercise3.js');

describe('getUserName promise', () => {
  describe('when the user exists', () => {
    it('get user by id', async () => {
      expect.assertions(1);
      const data = await getUserName(4);
      expect(data).toBe('Mark');
    });
  });
  describe('when the user does not exist', () => {
    it('get error from nom existent user', async () => {
      expect.assertions(1);
      try {
        await getUserName(2);
      } catch (error) {
        expect(error).toEqual({ error: 'User with 2 not found.' });
      }
    });
  });
});

// describe('check if the function getRepos is working well', () => {
//   describe('check if it has the todo-list project', () => {
//     it('gets true if the project is found', async () => {
//       expect.assertions(1);
//       const data = await getRepos('https://api.github.com/orgs/tryber/repos')
//         .find
//     });
//   });
// });

// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));

// test('', () => console.log('1 - test'));

// describe('Scoped / Nested block', () => {
//   beforeEach(() => console.log('2 - beforeEach'));
//   afterEach(() => console.log('2 - afterEach'));

//   test('', () => console.log('2 - test'));
// });
