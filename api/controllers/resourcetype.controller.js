'use strict';

var _ = require('lodash');

var controllerHelper = require('../helpers/controller.helper');
var messageHelper = require('../helpers/message.helper');


////////////////////////////////////////////////////////////////////////////////
// CONSTANTS
////////////////////////////////////////////////////////////////////////////////

// Module Name
const MODULE_NAME = '[ResourceType Controller]';

// Error Messages
const GS_CT_ERR_RESOURCETYPE_NOT_FOUND = 'ResourceType not found';

// Success Messages
const GS_CT_DELETED_SUCCESSFULLY = 'ResourceType deleted successfully';

const { ResourcesTypes } = require('../models/');

////////////////////////////////////////////////////////////////////////////////
// PUBLIC METHODS
////////////////////////////////////////////////////////////////////////////////

function getResourceType(req, res) {

  try {
    console.log("Get ResourceType...");
    console.log(ResourcesTypes);
    ResourcesTypes.findAll({
      /*include: [{model: orderstatus}]include: [{ all: true, nested: true }]*/
    })
    .then((consoles) => {
      console.log(consoles);
      res.status(200).send(consoles);
      //utils.writeJson(res, consoles);
    }, (error) => {
      res.status(500).send(error);
    });
  } catch (error) {
    controllerHelper.handleErrorResponse(MODULE_NAME, getResourceType.name, error, res);
  }
}

function createResourceType(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    
    try {
      console.log("params : ");
      var mytype = req.body;
      console.log("type name ... " + mytype.name);
      return ResourcesTypes.create({
        name: mytype.name
      }, {
      /* include: [{
        model: order_detail,
        as: 'orderdetail'}] */
         })
      .then((mytype) => {
        res.status(201).send(mytype);
      })
      .catch((error) => res.status(400).send(error));
    } catch (error) {
      console.log("Was an error");
      controllerHelper.handleErrorResponse(MODULE_NAME, createResourceType.name, error, res);
    }
}



module.exports = {
  getResourceType,
  createResourceType,
  GS_CT_ERR_RESOURCETYPE_NOT_FOUND,
  GS_CT_DELETED_SUCCESSFULLY,
  MODULE_NAME
}