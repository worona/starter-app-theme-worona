import * as deps from '../deps';

export const getThemeSettings = state => deps.selectorCreators.getSettings('starterTheme')(state);
