export const getStringFromQueryParam = (queryParam: string | string[]) => {
  return Array.isArray(queryParam) ? queryParam[0] : queryParam;
};
