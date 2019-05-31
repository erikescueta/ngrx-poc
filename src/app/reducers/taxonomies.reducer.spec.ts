import { FetchTaxonomies, FetchTaxonomiesDone } from './../actions/taxonomies.actions';
import { taxonomiesReducer, taxonomiesInitialState } from './taxonomies.reducer';

describe('Taxonomies Reducer', () => {

  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = taxonomiesReducer(taxonomiesInitialState, action);

      expect(result).toBe(taxonomiesInitialState);
    });
  });

  describe('Fetch Reducer', () => {
    it('should toggle loading state', () => {
      const action = new FetchTaxonomies();

      const result = taxonomiesReducer(taxonomiesInitialState, action);

      expect(result).toEqual({
        ...taxonomiesInitialState,
        loading: true
      });
    });
  });

  describe('Fetch Reducer Success', () => {
    it('should update the state', () => {
      const payload = ['taxonomy', 'taxonomy', 'taxonomy'];
      const action = new FetchTaxonomiesDone(payload);

      const result = taxonomiesReducer(taxonomiesInitialState, action);

      expect(result).toEqual({
        ...taxonomiesInitialState,
        taxonomiesList: payload,
        loading: false
      });
    });
  });
});
