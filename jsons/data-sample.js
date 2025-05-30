export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Customer",
  "type": "object",
  "properties": {
    "Index": {
      "type": "integer"
    },
    "CustomerId": {
      "type": "string"
    },
    "FirstName": {
      "type": "string"
    },
    "LastName": {
      "type": "string"
    },
    "Company": {
      "type": "string"
    },
    "City": {
      "type": "string"
    },
    "Country": {
      "type": "string"
    },
    "Phone1": {
      "type": "string"
    },
    "Phone2": {
      "type": "string"
    },
    "Email": {
      "type": "string",
      "format": "email"
    },
    "SubscriptionDate": {
      "type": "string",
      "format": "date"
    },
    "Website": {
      "type": "string",
      "format": "uri"
    }
  },
  "required": [
    "Index",
    "CustomerId",
    "FirstName",
    "LastName",
    "Company",
    "City",
    "Country",
    "Phone1",
    "Email",
    "SubscriptionDate"
  ]
};