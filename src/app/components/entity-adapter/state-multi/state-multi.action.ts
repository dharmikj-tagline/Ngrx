import { createAction, props } from "@ngrx/store";

export const loadInternationalTeam = createAction('load-international-team');
export const loadInternationalTeamSuccess = createAction('load-international-team-success', props<{ internationalTeam: any }>());