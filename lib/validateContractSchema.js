async function schemaValidation(response, schema) {
  if (!response || !schema) {
    throw new Error("An API response and contract are required");
  }
  return schema.validateAsync(response, { abortEarly: false });
}

module.exports = {
  schemaValidation,
};
