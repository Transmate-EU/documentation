const convert = require("@openapi-contrib/json-schema-to-openapi-schema");
const fs = require("fs");
const $RefParser = require("@apidevtools/json-schema-ref-parser");

const shipmentSchema = require("../../transmateSchemas/restAPI/requests/shipmentRequest.json");
const partnerSchema = require("../../transmateSchemas/restAPI/requests/accountRequest.json");
const invoiceSchema = require("../../transmateSchemas/restAPI/requests/invoiceRequest.json");
const invoicesSchema = require("../../transmateSchemas/restAPI/requests/invoicesRequest.json");
const schemas = { shipmentSchema, partnerSchema, invoiceSchema, invoicesSchema };



async function writeRequestSchema(name) {

  console.log("build schema for ", name);
  let parser = new $RefParser();
  let schema = await parser.bundle(schemas[name]);

  const convertedSchema = await convert(schema, { dereference: true });
  fs.writeFileSync(
    "schemas/" + name + ".json",
    JSON.stringify(convertedSchema)
  );
}
Object.keys(schemas).forEach(key => writeRequestSchema(key))
// writeRequestSchema("partnerSchema");
// writeRequestSchema("shipmentSchema");
