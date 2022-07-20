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
    position: mapPosition(cv.experience.jobs), // []
  },
];

const mapPosition = (jobs): Position => jobs.map(generatePosition);

const mapPeriod = (jobs) => {
  const roles = jobs.map((x) => x.roles[0]).map(generatePeriod);
  return roles;
};

const generatePeriod = (date): Period => ({
  from: generateDate(date.startDate),
  to: date.finishDate
    ? generateDate(date.finishDate)
    : generateDate(new Date(Date.now()).toISOString().slice(0, 10)),
  current: date.finishDate ? true : false,
});

const generateDate = (date: string): YearMonth => ({
  year: date.split("-")[0],
  month: date.split("-")[1],
});

const generatePosition = (experience): Position => ({
  code: experience.organization.name,
  label: experience.notes ? experience.notes : "", // optional in manfred, mandatory in Europass
});
