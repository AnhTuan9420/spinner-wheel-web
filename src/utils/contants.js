import CONFIG from "config/config";

export const DEPOSIT = CONFIG.DEPOSIT;

export const REGEX_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const REGEX_PHONE_NUMBER = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

export const BASENAME = CONFIG.BASENAME;

export const BASENAMEcomming = CONFIG.BASENAME_COMING;

export const GENDERS = [
  {
    label: "Nam",
    value: 1,
  },
  {
    label: "Nữ",
    value: 0,
  },
  {
    label: "Khác",
    value: "",
  },
];
