const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("readList");

  if (storedBookSTR) {
    const storeBookData = JSON.parse(storedBookSTR);
    return storeBookData;
  } else {
    return [];
  }
};

const addStoredDB = (id) => {
  const storeBookData = getStoredBook();

  if (storeBookData.includes(id)) {
    alert("vai data already exist");
  } else {
    storeBookData.push(id);
    const data = JSON.stringify(storeBookData);
    localStorage.setItem("readList", data);
  }
};

export { addStoredDB, getStoredBook };