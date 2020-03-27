var apm = require('elastic-apm-node')

apm.start({
    // Override service name from package.json
    // Allowed characters: a-z, A-Z, 0-9, -, _, and space
    serviceName: 'thurs',
  
    // Use if APM Server requires a token
    secretToken: '',
  
    serviceVersion: '0.90',
    // Set custom APM Server URL (default: http://localhost:8200)
    serverUrl: 'http://localhost:8200',

  });


  apm.addFilter(function (payload) {
    // if (payload.context.request && payload.context.request.headers) {
    //   // redact sensitive data
    //   payload.context.request.headers['x-secret'] = '[REDACTED]'
    // }
  
    // console.log('[apm] payload', payload);

    // remember to return the modified payload
    return payload
  })

module.exports = apm;