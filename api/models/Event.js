/**
 * Event.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  tableName: 'event',
  autoUpdatedAt: false,
  autoCreatedAt: true,
  attributes: {
    userId: {
      model: 'User'
    },
    title: {
      type: 'string',
      required: true
    },
    host: {
      type: 'string',
      required: true
    },
    venue: {
      type: 'string',
      required: true
    },
    eventDate: {
      type: 'date',
      required: true
    },
    invites: {
      collection: 'Invite',
      via: 'eventId'
    },
    createdAt: {
      type: 'date'
    }
  }
};
