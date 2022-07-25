export interface Skills {
  linguistic: Linguistic;
}

export interface Linguistic {
  motherTongueList: MotherTongue[];
}

export interface MotherTongue {
  description: Description;
}

export interface Description {
  code: string;
  label: string;
}
