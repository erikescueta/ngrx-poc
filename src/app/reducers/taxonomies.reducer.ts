import { Action } from '@ngrx/store';
import { Taxonomy, TaxonomySearchResult } from './../models/taxonomies';
import { TaxonomiesActionTypes, TaxonomiesActions } from './../actions/taxonomies.actions';

export interface TaxonomiesState {
  loading: boolean;
  searchTerm: string;
  searchResult: TaxonomySearchResult;
  newTaxonomy: Taxonomy;
  taxonomiesList: any;
}

export const taxonomiesInitialState: TaxonomiesState = {
  loading: false,
  searchTerm: '',
  searchResult: null,
  newTaxonomy: {
    businessStream: '',
    created: new Date(),
    lastModified: new Date(),
    taxonomyId: '',
    taxonomyName: '',
    taxonomyType: '',
    taxonomyStatus: '',
    descriptorValues: [],
    leaf: null
  },
  taxonomiesList: []
};

export function taxonomiesReducer(state = taxonomiesInitialState, action: TaxonomiesActions): TaxonomiesState {
  switch (action.type) {
    case TaxonomiesActionTypes.LoadTaxonomies: {
      return {
        ...state,
        loading: true
      };
    }
    case TaxonomiesActionTypes.SearchTaxonomies: {
      return {
        ...state,
        loading: true,
        searchTerm: action.taxonomyId
      };
    }
    case TaxonomiesActionTypes.SearchTaxonomiesDone: {
      return {
        ...state,
        loading: false,
        searchResult: action.payload
      };
    }
    case TaxonomiesActionTypes.FetchTaxonomies: {
      return {
        ...state,
        loading: true
      };
    }
    case TaxonomiesActionTypes.FetchTaxonomiesDone: {
      return {
        ...state,
        loading: false,
        taxonomiesList: action.payload
      };
    }
    case TaxonomiesActionTypes.AddTaxonomy: {
      return {
        ...state,
        loading: true,
        newTaxonomy: action.payload
      };
    }
    case TaxonomiesActionTypes.AddTaxonomyDone: {
      return {
        ...state,
        loading: false,
        taxonomiesList: action.payload
      };
    }
    default:
      return state;
  }
}
