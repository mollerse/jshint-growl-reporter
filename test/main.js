require('mocha');

var expect = require('chai').expect;
var sinon = require('sinon');
var requireSubvert = require('require-subvert')(__dirname);

describe('jshint-growl-reporter', function () {
  'use strict';

  var growlStub, growlReporter;
  beforeEach(function () {
    growlStub = sinon.stub();
    requireSubvert.subvert('growl', growlStub);
    growlReporter = requireSubvert.require('../').reporter;
  });

  it('should call not growl when there are no errors', function () {
    growlReporter();
    expect(growlStub.callCount).to.equal(0);
  });

  it('should call growl with summary when there are multiple errors', function () {
    growlReporter([{file: 'a.js'}, {file: 'b.js'}]);
    expect(growlStub.calledOnce).ok;
    expect(growlStub.calledWith('2 erros across 2 files'));
  });

  it('should call growl with summery with correct file count when there are multiple errors', function () {
    growlReporter([{file: 'a.js'}, {file: 'b.js'}, {file: 'a.js'}]);
    expect(growlStub.calledOnce).ok;
    expect(growlStub.calledWith('3 erros across 2 files'));
  });

  it('should call growl with specific error when there is one error', function () {
    growlReporter([{file: 'a.js', error: {
      line: 1,
      character: 5,
      reason: 'derp'
    }}]);
    expect(growlStub.calledOnce).ok;
    expect(growlStub.calledWith('a.js(1:5): derp'));
  });

  it('should not truncate filename', function () {
    growlReporter([{file: 'path/to/a.js', error: {
      line: 1,
      character: 5,
      reason: 'derp'
    }}]);
    expect(growlStub.calledOnce).ok;
    expect(growlStub.calledWith('path/to/a.js(1:5): derp'));
  });
});