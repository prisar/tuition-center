/**
 * TutionCenter controller
 */

const httpStatus = require('http-status-codes')
const TutionCenterService = require('../services/TutionCenterService')

const createTutionCenter = async (req, res) => {
    res.json(await TutionCenterService.p(req.body))
  }
