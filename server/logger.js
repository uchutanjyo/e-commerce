const winston = require('winston')

const logConfiguration = {
  'transports': [
    
      new winston.transports.Console()
  ],
  level: 'info',
  format: winston.format.simple(),
};

const logger = winston.createLogger(logConfiguration);

module.exports = logger;
