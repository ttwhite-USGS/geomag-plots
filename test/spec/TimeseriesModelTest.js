/* global before, chai, describe, it */
'use strict';

var expect = chai.expect,
    TimeseriesModel = require('TimeseriesModel'),
    Xhr = require('util/Xhr');

describe('TimeseriesModel Test', function () {
  describe('constructor', function () {
    it('is defined', function () {
      expect(TimeseriesModel).to.not.equal(null);
    });
  });

  describe('Test getGaps', function () {
    var response;

    before(function (done) {
      Xhr.ajax({
        url: 'observatory_data.json',
        success: function (data) {
          response = TimeseriesModel({
            times: data.times,
            values: data.data[4].values.H
          });
          done();
        }
      });
    });

    it('returns gaps in data', function () {
      expect(response.getGaps().length).to.equal(2);
    });

    it('returns start time for gap data', function () {
      var gap = response.getGaps()[0];

      expect(gap.start).to.equal(1429480440);
    });

    it('returns end time for gap data', function () {
      var gap = response.getGaps()[0];

      expect(gap.end).to.equal(1429481280);
    });
  });
});
