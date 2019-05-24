import { taxonomiesReducer, taxonomiesInitialState } from './taxonomies.reducer';

describe('Taxonomies Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = taxonomiesReducer(taxonomiesInitialState, action);

      expect(result).toBe(taxonomiesInitialState);
    });
  });
});
