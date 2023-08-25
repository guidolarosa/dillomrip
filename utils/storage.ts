const setToLocalStorage = (key : string, value : any) => {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value))
    } else localStorage.removeItem(key)
  };
  
  const getFromLocalStorage = (key : string) => {
    let response = ''
    try {
      const value = localStorage.getItem(key)
      response = value ? JSON.parse(value) : ''
    } catch (error) {
      response = ''
    }
  
    return response
  };

  export { setToLocalStorage, getFromLocalStorage }
  