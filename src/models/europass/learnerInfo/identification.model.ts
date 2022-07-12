export interface Identification {
  personName: PersonName;
  contactInfo: ContactInfo;
  demographics: Demographics;
}

export interface PersonName {
  firstName: string;
  surName: string;
}

export interface ContactInfo {
  address: Address;
  email: EMail;
}

export interface Address {
  addressLine: string;
  postalCode: string;
  municipallity: string;
  country: Country;
}

export interface Country {
  label: string;
}

export interface EMail {
  contact: string;
}

export interface Demographics {
  birthDate: Date;
}
