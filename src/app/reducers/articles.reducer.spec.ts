import { articlesReducer, articlesInitialState } from './articles.reducer';

describe('Articles Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = articlesReducer(articlesInitialState, action);

      expect(result).toBe(articlesInitialState);
    });
  });
});
