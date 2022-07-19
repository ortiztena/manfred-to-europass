import {
  Period,
  Position,
  WorkExperience,
  YearMonth,
} from "@/models/europass/learnerInfo/workExperience.model";
import { ManfredAwesomicCV, Role } from "@/models/manfred";

export const generateWorkExperienceList = (
  cv: ManfredAwesomicCV
): WorkExperience[] => [
  {
    period: mapPeriod(cv.experience.jobs), // [] funcion map
    position: cv.experience.jobs.map(generatePosition), // []
  },
];

const mapPeriod = (jobs) => {
  const roles = jobs.map((x) => x.roles[0]).map(generatePeriod);
  return roles;
};

const generatePeriod = (date): Period => ({
  from: generateDate(date.startDate),
  to: generateDate(date.finishDate),
  current: false, // date.current no data
});

const generateDate = (date: string): YearMonth => ({
  year: date.split("-")[0],
  month: date.split("-")[1],
});

const generatePosition = (experience): Position => ({
  code: experience.organization.name,
  label: experience.notes ? experience.notes : "", // optional in manfred, mandatory in Europass
});
