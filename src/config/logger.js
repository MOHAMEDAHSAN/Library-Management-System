const pino = require('pino');
const pretty = require('pino-pretty');

const logLevel = process.env.LOG_LEVEL || 'info';

const logger = pino(
  {
    level: logLevel,
    base: undefined, // Remove pid, hostname
    timestamp: pino.stdTimeFunctions.isoTime,
  },
  pretty({
    colorize: true,
    translateTime: 'SYS:standard',
    ignore: 'pid,hostname',
    singleLine: false,
    indent: 2,
  })
);

// Config for sensitive headers to hash or mask
const loggerConfig = {
  sensitiveHeaders: ['authorization', 'cookie', 'set-cookie'],
};

module.exports = { logger, loggerConfig };
