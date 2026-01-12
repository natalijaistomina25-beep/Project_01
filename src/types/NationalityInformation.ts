export interface CountryItem {
  country_id: string;
  probability: number;
}


export interface NationalityInformation {
  name: string;
  country: CountryItem[];
}