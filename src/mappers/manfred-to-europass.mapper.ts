import {
  DocumentInfo,
  PrintingPreferences,
  SkillsPassport,
} from "@/models/europass";
import { LearnerInfo } from "@/models/europass/learnerInfo";
import {
  Address,
  ContactInfo,
  Country,
  Demographics,
  EMail,
  Identification,
  PersonName,
} from "@/models/europass/learnerInfo/identification.model";
import { ContactMean, Location, ManfredAwesomicCV } from "@/models/manfred";

const mapManfredToEuropass = (cv: ManfredAwesomicCV): SkillsPassport => ({
  documentInfo: generateEuropassDocumentInfo(),
  printingPreferences: generateEuropassPrintingPreferences(),
  learnerInfo: generateEuropassLearnerInfo(cv),
});

const generateEuropassDocumentInfo = (): DocumentInfo => ({
  documentType: "ECV",
  creationDate: new Date(Date.now()),
  lastUpdateDate: new Date(Date.now()),
  xsdVersion: "V3.0",
  generator: "EWA",
  comment: "Europass CV",
});

const generateEuropassPrintingPreferences = (): PrintingPreferences => ({
  type: "",
});

const generateEuropassLearnerInfo = (cv: ManfredAwesomicCV): LearnerInfo => ({
  identification: generateIdentification(cv),
  workExperienceList: [], // external function
  skills: [], // external function
});

const generateIdentification = (cv: ManfredAwesomicCV): Identification => ({
  personName: generatePersonName(cv.aboutMe.profile),
  contactInfo: generateContactInfo(cv.aboutMe.profile),
  demographics: generateDemographics(cv.aboutMe.profile.birthday),
});

const generatePersonName = (profile): PersonName => ({
  firstName: profile.name,
  surName: profile.surnames,
});

const generateDemographics = (birthday: string): Demographics => ({
  birthDate: new Date(birthday),
});

const generateContactInfo = (profile): ContactInfo => ({
  address: generateContactInfoAddress(profile.location),
  email: generateContactInfoEmail(profile.contact),
});

const generateContactInfoAddress = (location: Location): Address => ({
  addressLine: location.address,
  postalCode: location.postalCode,
  municipallity: location.municipality,
  country: generateContactInfoCountry(location.country),
});

const generateContactInfoCountry = (country: string): Country => ({
  label: country,
});

const generateContactInfoEmail = (email: ContactMean): EMail => ({
  contact: email.contactMails[0], // maybe external function to handle the email collection
});

export const manfredCv = (cv: ManfredAwesomicCV) =>
  cv ? mapManfredToEuropass(cv) : null;
