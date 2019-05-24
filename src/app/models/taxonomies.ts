export interface ITaxonomy {
    businessStream: string;
    created: Date;
    lastModified: Date;
    taxonomyId: string;
    taxonomyName: string;
    taxonomyType: string;
    taxonomyStatus: string;
    descriptorValues: any[];
    leaf: boolean;
}

export class Taxonomy implements ITaxonomy {
    businessStream: string;
    created: Date;
    lastModified: Date;
    taxonomyId: string;
    taxonomyName: string;
    taxonomyType: string;
    taxonomyStatus: string;
    descriptorValues: any[];
    leaf: boolean;
}

export interface ISubDescriptor {
    descriptorId: string;
    descriptorValue: string;
    invalidatedBy: string;
    isValid: string;
    parentID: string;
    taxonomyID: string;
    sequence: number;
    descriptor: [];
    leaf: boolean;
}

export class SubDescriptor implements ISubDescriptor {
    descriptorId: string;
    descriptorValue: string;
    invalidatedBy: string;
    isValid: string;
    parentID: string;
    taxonomyID: string;
    sequence: number;
    descriptor: [];
    leaf: boolean;
}

export interface IDescriptor {
    descriptorId: string;
    descriptorValue: string;
    invalidatedBy: string;
    isValid: string;
    parentID: string;
    taxonomyID: string;
    sequence: number;
    descriptor: Array<SubDescriptor>;
}

export class Descriptor implements IDescriptor {
    descriptorId: string;
    descriptorValue: string;
    invalidatedBy: string;
    isValid: string;
    parentID: string;
    taxonomyID: string;
    sequence: number;
    descriptor: Array<SubDescriptor>;
}

export interface ITaxonomySearchResult {
    businessStream: string;
    taxonomyId: string;
    taxonomyName: string;
    taxonomyType: string;
    descriptor: Array<IDescriptor>;
}

export class TaxonomySearchResult implements ITaxonomySearchResult {
    businessStream: string;
    taxonomyId: string;
    taxonomyName: string;
    taxonomyType: string;
    descriptor: Array<Descriptor>;
}
