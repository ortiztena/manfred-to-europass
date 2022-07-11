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

interface Country {
  label: string;
}

interface EMail {
  contact: string;
}

interface Demographics {
  birthDate: Date;
}
