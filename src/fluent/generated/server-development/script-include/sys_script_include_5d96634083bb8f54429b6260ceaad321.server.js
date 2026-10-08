var log = Class.create();
const INFO = 1;
const ERROR = 2;

log.prototype = {
  initialize: function({ enable = true }){
    if (enable){
      this.logs = [];
    } else {
      // overwrite the logging functions if logging is disabled
      // this allows for the functions to be called without errors
      this.info = function(){ return this; }
      this.error = function(){ return this; }
    }
  },

  info: function(message){
    return this.append(this.logs, message, log.INFO)
  },

  error: function(message){
    return this.append(this.logs, message, log.ERROR)
  },
  
  append: function(message, level){
    this.logs.push({ message, level })
    return this;
  },
  
  getLogs: function(){
    return this.logs;
  },
}
