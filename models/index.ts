export interface IFormType {
  type:
    | 'text'
    | 'choice'
    | 'number'
    | 'boolean'
    /** l'id d'une person */
    | 'person'
    /** une liste d'ids de personnes */
    | 'persons'
    /** une liste d'ids de populations */
    | 'populations'
    /** l'id d'une population */
    | 'population'
    /** l'id d'un utilisateur */
    | 'user';
  selctOptions?: { text: string; value: any; default?: boolean }[];
  attributes?: {
    required?: boolean;
    min?: number;
    max?: number;
    [x: string]: any;
  };
}

export interface IFormtypes {
  [x: string]: IFormType;
}
