import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TaxonomiesService } from './taxonomies.service';
import { Taxonomy } from './../models/taxonomies';
import { of } from 'rxjs';

describe('TaxonomiesService', () => {

  let service: TaxonomiesService;
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        TaxonomiesService
      ]
    });
  });

  beforeEach(() => {
    service = TestBed.get(TaxonomiesService);
    backend = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fetchTaxonomies', () => {

    it('should send a GET request with the correct URL', () => {
      service.fetchTaxonomies().subscribe();
      const call: TestRequest = backend.expectOne('http://udccmap002:5000/taxonomies');
      expect(call.request.method).toBe('GET');
      expect(call.request.url).toMatch('http://udccmap002:5000/taxonomies');
      backend.verify();
    });

    it('should use the correct model', () => {
      const taxonomy: Taxonomy[] = [
        {
          businessStream: 'CIE',
          created: new Date('2016-01-15T12:50:51'),
          lastModified: new Date('2018-12-10T10:33:45'),
          taxonomyId: '6dd22e97-a28f-4470-831b-cdee94e98d9c',
          taxonomyType: 'Topic',
          taxonomyName: '0625 Physics',
          taxonomyStatus: null,
          descriptorValues: ['Core', 'General physics', 'Length and time', 'Speed, velocity and acceleration', 'Mass and weight', 'Density', 'Forces', 'Effects of forces', 'Turning effect', 'Conditions for equilibrium', 'Centre of mass', 'Energy, work and power', 'Energy', 'Energy resources', 'Work', 'Power', 'Pressure', 'Thermal physics', 'Simple kinetic molecular model of matter', 'States of matter', 'Molecular model', 'Evaporation', 'Pressure changes', 'Thermal properties', 'Thermal expansion of solids, liquids and gases', 'Measurement of temperature', 'Thermal capacity', 'Melting and boiling', 'Transfer of thermal energy', 'Conduction', 'Convection', 'Radiation', 'Consequences of energy transfer', 'Properties of waves, inc. light and sound', 'General wave properties', 'Light', 'Reflection of light', 'Refraction of light', 'Thin converging lens', 'Dispersion of light', 'Electromagnetic spectrum', 'Sound', 'Electricity and magnetism', 'Simple phenomena of magnetism', 'Electrical quantities', 'Electric charge', 'Current', 'Electromotive force', 'Potential difference', 'Resistance', 'Electric circuits', 'Circuit diagrams', 'Series and parallel circuits', 'Action and use of circuit components', 'Dangers of electricity', 'Electromagnetic effects', 'Electromagnetic induction', 'a.c. generator', 'Transformer', 'The magnetic effect of a current', 'Force on a current-carrying conductor', 'd.c. motor', 'Cathode-ray oscilloscopes', 'Cathode rays', 'Atomic physics', 'Radioactivity', 'Detection of radioactivity', 'Characteristics of the three kinds of emission', 'Radioactive decay', 'Half-life', 'Safety precautions', 'The nuclear atom', 'Atomic model', 'Nucleus', 'Supplement', 'General physics', 'Length and time', 'Speed, velocity and acceleration', 'Mass and weight', 'Density', 'Forces', 'Effects of forces', 'Turning effect', 'Scalars and vectors', 'Energy, work and power', 'Energy', 'Energy resources', 'Work', 'Power', 'Pressure', 'Thermal physics', 'Simple kinetic molecular model of matter', 'Molecular model', 'Evaporation', 'Pressure changes', 'Thermal properties', 'Thermal expansion of solids, liquids and gases', 'Measurement of temperature', 'Thermal capacity', 'Melting and boiling', 'Transfer of thermal energy', 'Conduction', 'Radiation', 'Properties of waves, inc. light and sound', 'General wave properties', 'Light', 'Reflection of light', 'Refraction of light', 'Thin converging lens', 'Electromagnetic spectrum', 'Sound', 'Electricity and magnetism', 'Electrical quantities', 'Electric charge', 'Current', 'Electromotive force', 'Resistance', 'Electrical energy', 'Electric circuits', 'Circuit diagrams', 'Series and parallel circuits', 'Action and use of circuit components', 'Digital electronics', 'Electromagnetic effects', 'Electromagnetic induction', 'Transformer', 'The magnetic effect of a current', 'Force on a current-carrying conductor', 'd.c. motor', 'Cathode-ray oscilloscopes', 'Simple treatment of cathode-ray oscilloscope', 'Atomic physics', 'Radioactivity', 'Characteristics of the three kinds of emission', 'The nuclear atom', 'Creating an Exisiting', 'Atomic model', 'Isotopes'],
          leaf: true
        }
      ];
      let response: Taxonomy[] = [];
      spyOn(service, 'fetchTaxonomies').and.returnValue(of(taxonomy));
      service.fetchTaxonomies().subscribe(res => {
        response = res;
      });
      expect(response).toEqual(taxonomy);
    });
  });
});
