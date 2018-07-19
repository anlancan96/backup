var mqtt = require('mqtt')


const emitControlCommand = function(clientId, status ,cb) {
  var options = {
    clientId: clientId,
    keepalive: 10,
    reschedulePings: false,
    protocolId: 'MQTT',
    username: 'anlancan',
    password: 'anlancan',
    protocolVersion: 4,
    clean: false,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    will: {
      topic: 'VNCQMS',
      payload: 'Connection Closed abnormally..!',
      qos: 0,
      retain: false
    },
    rejectUnauthorized: false
  }
  var host = 'mqtt://localhost:1883'
  
  var client = mqtt.connect(host, options)

  client.on('error', function (err) {
    console.log(err)
    client.end()
  })

  client.on('connect', function () {
    client.publish(clientId, status, { qos: 0, retain: false })
    client.end()
  })
}

exports.emitControlCommand = emitControlCommand;