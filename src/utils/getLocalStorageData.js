const getLocalStorageData = (key) => {
  if (!key) return null;

  return JSON.parse(localStorage.getItem(key)) || null;
};
export default getLocalStorageData;
