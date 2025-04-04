import type { Filters } from "@feltmaps/js-sdk";

export const FELT_MAP_ID = "p9CPdaItsRQm9COaGzgt17WB"

export const EXPLORE = "Explore"
const EVICTIONS = "Evictions"
const VACANCY = "Vacancy"
const OWNERSHIP = "Ownership"

const EVICTIONS_GROUP_LAYER_ID = "n5zmBsz8Rw2wis3xrwtNzB"
const VACANCY_GROUP_LAYER_ID = "4dr5K3ZrTCKK9AWb18v8MEB"
const OWNERSHIP_GROUP_LAYER_ID = "AoKl9AxdERg6pZVDObvxmjC"

const EVICTIONS_PARCEL_LAYER_ID = "PlRKU27xT5O9Btg66aI3uhD"
const VACANCY_PARCEL_LAYER_ID = "r5slc7q8TYi4U5Ts29AyMBB"
const OWNERSHIP_PARCEL_LAYER_ID = "vJqTqosmS1GOhuvwue9AcfC"

export const FILTERED_PARCEL_LAYER_ID = "VHBjOKqIQBuydqkCtCw9AWD"

export const THEMES = [
  EXPLORE,
  EVICTIONS,
  VACANCY,
  OWNERSHIP,
];

export const THEME_TO_GROUP_LAYER_MAP = new Map<string, string>([
  [EVICTIONS, EVICTIONS_GROUP_LAYER_ID],
  [VACANCY, VACANCY_GROUP_LAYER_ID],
  [OWNERSHIP, OWNERSHIP_GROUP_LAYER_ID],
]);

export const THEME_TO_PARCEL_LAYER_MAP = new Map<string | null, string>([
  [EVICTIONS, EVICTIONS_PARCEL_LAYER_ID],
  [VACANCY, VACANCY_PARCEL_LAYER_ID],
  [OWNERSHIP, OWNERSHIP_PARCEL_LAYER_ID],
  [EXPLORE, FILTERED_PARCEL_LAYER_ID],
]);

export const PARCEL_LAYERS_ZOOM_LEVEL = 14.8;

const RECENT_SALE = "Sale last 6 months"
const RECENT_EVICTION = "Eviction last 6 months"
const RECENT_VACANCY = "Vacant last 6 months"
const INVESTOR_OWNED = "Investor Owned"

export const FILTER_BUTTON_WIDTH = 145;

export const FILTERS = [
  RECENT_SALE,
  RECENT_EVICTION,
  RECENT_VACANCY,
  INVESTOR_OWNED
];

export const MIN_YEAR = 1883
export const CURRENT_YEAR = new Date().getFullYear();
export const DEFAULT_BUILT_YEAR_FILTERS = [MIN_YEAR, CURRENT_YEAR];

const RECENT_SALE_FILTER: Filters = ["sales_1yr", "gt", 0];
const RECENT_EVICTION_FILTER: Filters = ["evict_6mo", "gt", 0];
const RECENT_VACANCY_FILTER: Filters = ["long_term_vacancy", "eq", 1];
const INVESTOR_OWNED_FILTER: Filters = ["owner_occupied", "eq", "N"];

export const MIN_YEAR_BUILT_FILTER: Filters = ["dwel_yrblt", "ge", 1950];
export const MAX_YEAR_BUILT_FILTER: Filters = ["dwel_yrblt", "le", CURRENT_YEAR];

export const LAND_USE_CATEGORY_FILTER: Filters = ["lu_category", "in", []]

export const FILTERS_TO_FELT_FILTER = new Map<string, Filters>([
  [RECENT_SALE, RECENT_SALE_FILTER],
  [RECENT_EVICTION, RECENT_EVICTION_FILTER],
  [RECENT_VACANCY, RECENT_VACANCY_FILTER],
  [INVESTOR_OWNED, INVESTOR_OWNED_FILTER],
]);

export const THEME_TO_DEFAULT_FILTER_MAP = new Map<string, string>([
  [EVICTIONS, RECENT_EVICTION],
  [VACANCY, RECENT_VACANCY],
  [OWNERSHIP, INVESTOR_OWNED],
]);

const VACANT = "Vacant";
const RESIDENTIAL = "Residential";
const COMMERCIAL = "Commercial";
const INDUSTRIAL = "Industrial";
const INSTITUTIONAL = "Institutional";
const RECREATIONAL = "Recreational";
const EXEMPT = "Exempt";
const OTHER = "Other";

export const LAND_USE_CATEGORIES = [VACANT, RESIDENTIAL, COMMERCIAL, INDUSTRIAL, INSTITUTIONAL, RECREATIONAL, EXEMPT, OTHER];

const COUNCIL_DISTRICT = "City Council District"
const COUNCIL_DISTRICT_OPTIONS = ["1", "2", "3", "4", "5", "6", "7"]
const SUPER_COUNCIL_DISTRICT = "Super Council District"
const SUPER_COUNCIL_DISTRICT_OPTIONS = ["8", "9"]
const ZIPCODE = "Zipcode"
const ZIPCODE_OPTIONS = [
  "37501",
  "37544",
  "38101",
  "38103",
  "38104",
  "38105",
  "38106",
  "38107",
  "38108",
  "38109",
  "38111",
  "38112",
  "38113",
  "38114",
  "38115",
  "38116",
  "38117",
  "38118",
  "38119",
  "38120",
  "38122",
  "38124",
  "38125",
  "38126",
  "38127",
  "38128",
  "38130",
  "38131",
  "38132",
  "38133",
  "38134",
  "38135",
  "38136",
  "38137",
  "38138",
  "38139",
  "38141",
  "38145",
  "38148",
  "38150",
  "38151",
  "38152",
  "38157",
  "38159",
  "38161",
  "38163",
  "38166",
  "38167",
  "38168",
  "38173",
  "38174",
  "38175",
  "38177",
  "38181",
  "38182",
  "38184",
  "38186",
  "38187",
  "38188",
  "38190",
  "38193",
  "38194",
 " 38197"
];
const COUNTY_COMMISSION = "Shelby County Commission";
const COUNTY_COMMISSION_OPTIONS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];

export const GEOGRAPHIC_FILTER_MAP = new Map<string | null, Array<string | number>>([
  [COUNCIL_DISTRICT, COUNCIL_DISTRICT_OPTIONS],
  [SUPER_COUNCIL_DISTRICT, SUPER_COUNCIL_DISTRICT_OPTIONS],
  [ZIPCODE, ZIPCODE_OPTIONS],
  [COUNTY_COMMISSION, COUNTY_COMMISSION_OPTIONS],
]);

const CITY_COUNCIL_FILTER: Filters = ["council_district", "in", []];
const SUPER_COUNCIL_FILTER: Filters = ["council_super_district", "in", []];
const ZIPCODE_FILTER: Filters = ["zipcode", "in", []];
const COUNTY_COMMISSION_FILTER: Filters = ["commission", "in", []]

export const GEOGRAPHIC_FELT_FILTER_MAP = new Map<string, Filters>([
  [COUNCIL_DISTRICT, CITY_COUNCIL_FILTER],
  [SUPER_COUNCIL_DISTRICT, SUPER_COUNCIL_FILTER],
  [ZIPCODE, ZIPCODE_FILTER],
  [COUNTY_COMMISSION, COUNTY_COMMISSION_FILTER],
]);

