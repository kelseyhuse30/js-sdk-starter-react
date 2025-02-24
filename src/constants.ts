const EVICTIONS = "Evictions"
const VACANCY = "Vacancy"
const OWNERSHIP = "Ownership"

const EVICTIONS_GROUP_LAYER_ID = "n5zmBsz8Rw2wis3xrwtNzB"
const VACANCY_GROUP_LAYER_ID = "4dr5K3ZrTCKK9AWb18v8MEB"
const OWNERSHIP_GROUP_LAYER_ID = "AoKl9AxdERg6pZVDObvxmjC"

export const THEMES = [
    EVICTIONS,
    VACANCY,
    OWNERSHIP,
];

export const THEME_TO_LAYER_MAP = new Map<string, string>([
    [EVICTIONS, EVICTIONS_GROUP_LAYER_ID],
    [VACANCY, VACANCY_GROUP_LAYER_ID],
    [OWNERSHIP, OWNERSHIP_GROUP_LAYER_ID],
  ]);
