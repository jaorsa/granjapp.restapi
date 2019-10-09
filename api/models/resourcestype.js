'use strict';
module.exports = (sequelize, DataTypes) => {
  const ResourcesTypes = sequelize.define('ResourcesTypes', {
    name: DataTypes.STRING
  }, {});
  ResourcesTypes.associate = function(models) {
    // associations can be defined here
  };
  return ResourcesTypes;
};