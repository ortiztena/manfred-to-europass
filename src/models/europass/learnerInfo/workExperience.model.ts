export interface WorkExperience {
  period: Period;
  position: Position;
}

export interface Period {
  from: YearMonth;
  to: YearMonth;
  current: boolean;
}

export interface YearMonth {
  year: string;
  month: string;
}

export interface Position {
  code: string;
  label: string;
}
