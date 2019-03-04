const getPath = require('./getPath')

const schemaToObj = schema => {
  if (typeof schema === 'object' || typeof schema === 'string') {
    return schema
  }
  if (typeof schema === 'function' && !schema.type) {
    return schema.toString()
  }
  return {
    type: schema.type,
    extra: schema.extra
  }
}

module.exports = (value, schema, ...parents) => {
  const path = getPath(parents)
  return {
    value,
    ['invalidValue'+(path && '.'+path)]: schemaToObj(schema),
  }
}