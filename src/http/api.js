import fly from './config'
import qs from 'qs'

export const test = params => {
  return fly.get(`/ruleCenter/findRuleCenter`)
};




