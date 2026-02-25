import flowersData from './monthlyFlowers.json';

export interface MonthlyFlower {
  month: string;
  flower: string;
  zh_month: string;
  zh_flower: string;
}

export const monthlyFlowers: MonthlyFlower[] = flowersData as MonthlyFlower[];
