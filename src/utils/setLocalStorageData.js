const setLocalStorageData = (key, data) => {
  if (!data) return null;
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(`LocalStorage save error: ${error}`);
    return null;
  }
  return data;
};

export default setLocalStorageData;
