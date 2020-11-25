import ajax from './ajax.js'

export const getTestDat = () => 
  ajax('', {}, 'POST')