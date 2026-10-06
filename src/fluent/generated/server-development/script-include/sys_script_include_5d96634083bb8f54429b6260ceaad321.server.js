// @ts-nocheck
var log = Class.create();
const INFO = 1;
const ERROR = 2;

log.prototype = {
  initialize: function(){
    this.logs = [];
  },
  
  info: function(message){
    appendLog(this.logs, message, log.INFO)
  },
  error: function(message){
    appendLog(this.logs, message, log.ERROR)
  },
  
  getLogs: function(){
    return this.logs;
  },
}

function appendLog(logs, message, level){
  return logs.push({ message, level })
}
