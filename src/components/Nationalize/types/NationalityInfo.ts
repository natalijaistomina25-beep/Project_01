interface Country {
  country_id: string;
  probability: number;
}

export default interface NationalityInfo {
  count: number;
  name: string;
  country: Country[];
}