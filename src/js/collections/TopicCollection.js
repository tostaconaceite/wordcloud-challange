/**
 * @author: 	Jose Luis Medina Burgos
 * @module 		topicCollection
 * @description topic collection is a set of topic models
 */
var AmpersandCollection = require('ampersand-rest-collection');
var TopicModel = require('../models/TopicModel.js');

module.exports = AmpersandCollection.extend({
	/**
	* fetch/sync url
	*/
	url: '../src/data/topics.json',
	/**
	* model
	*/
	model: TopicModel,
	/**
	* initialize the collection
	*/
	initialize: function () {},
	/**
	* parse the attributes before storing them
	*/
	parse: function (res) {
		var topics = res.topics;
		var maxVolume = 0;

		topics.forEach(function (topic) {
			maxVolume = Math.max(maxVolume, topic.volume);
		});

		topics.forEach(function (topic) {
			topic.maxVolume = maxVolume;
		});

		return topics;
	}
});