const getLocalStorageData = (key) => {
  if (!key) return null;

  return JSON.parse(localStorage.getItem(key)).reverse() || null;
};
export default getLocalStorageData;
