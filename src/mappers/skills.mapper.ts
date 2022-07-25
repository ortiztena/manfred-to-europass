import {
  Description,
  Linguistic,
  MotherTongue,
  Skills,
} from "@/models/europass/learnerInfo/skills.model";
import { Language, ManfredAwesomicCV } from "@/models/manfred";

export const generateSkills = (manfred: ManfredAwesomicCV): Skills => ({
  linguistic: generateMotherTongueList(manfred.knowledge.languages),
});

const generateMotherTongueList = (languages: Language[]): Linguistic => ({
  motherTongueList: languages.map(generateMotherTongue),
});

const generateMotherTongue = (language: Language): MotherTongue => ({
  description: generateDescription(language),
});

const generateDescription = (language: Language): Description => ({
  code: language.name,
  label: language.level ? language.level : "Level not defined",
});
