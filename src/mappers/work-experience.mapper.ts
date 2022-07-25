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

const mapPeriod = (jobs): Period =>
  jobs.map((job) => job.roles[0]).map(generatePeriod);

const generatePeriod = (date: Role): Period => ({
  from: generateDate(date.startDate),
  to: date.finishDate
    ? generateDate(date.finishDate)
    : generateDate(new Date(Date.now()).toISOString().slice(0, 10)),
  current: date.finishDate ? false : true,
});

const generateDate = (date: string): YearMonth => ({
  year: date.split("-")[0],
  month: date.split("-")[1],
});

const generatePosition = (experience): Position => ({
  //add types to experience
  code: experience.organization.name,
  label: mapLabel(experience.roles), // optional in manfred, mandatory in Europass
});

const mapLabel = (roles): string =>
  roles ? generatePositionLabel(roles[0]) : generatePositionLabel(false);

const generatePositionLabel = (rol): string => (rol ? rol.name : "");
