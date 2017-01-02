var React = require('react');
var expect = require('expect');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');
var CountdownForm = require('CountdownForm');

describe('Countdown Form', ()=> {

  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('jQuery exists', () => {
    expect($).toExist();
  });

  it('Test Utils exists', () => {
    expect(TestUtils).toExist();
  });

  it('should call onSetCountdown if valid seconds entered', () => {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
    //expect(1).toBe(1);

  });

    it('should not call onSetCountdown if invalid seconds entered', () => {
      var spy = expect.createSpy();
      var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
      var $el = $(ReactDOM.findDOMNode(countdownForm));

      countdownForm.refs.seconds.value = '109b';
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();
    });
}) ;
