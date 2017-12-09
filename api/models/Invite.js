/**
 * Invite.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  tableName: 'invite',
  autoUpdatedAt: false,
  autoCreatedAt: false,
  attributes: {
    eventId: {
      model: 'Event'
    },
    mobile: {
      type: 'number',
      required: true
    }
  }
};
