export const addressSchema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Địa chỉ Việt Nam",
  "type": "object",
  "properties": {
    "province": {
      "type": "string",
      "title": "Tỉnh / Thành phố",
      "enum": ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng"]
    },
    "ward": {
      "type": "string",
      "title": "Phường / Xã"
    },
    "street": {
      "type": "string",
      "title": "Đường và số nhà"
    }
  },
  "required": ["province", "ward", "street"]
};
