import { Country } from "entity/Country";
import { Currency } from "entity/Currency";

export interface Profile {
  "first"?: string,
  "lastname"?: string,
  "age"?: number,
  "currency"?: Currency,
  "country"?: Country,
  "city"?: string,
  "username"?: string,
  "avatar"?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
