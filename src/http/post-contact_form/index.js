let arc = require('@architect/functions')

exports.handler = async function http(req) {
  let body = arc.http.helpers.bodyParser(req)
  console.table(body)
  return {
    body: `praise cage`
  }
}