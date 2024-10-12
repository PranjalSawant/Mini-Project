// Function to set a cookie with path '/'
export const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};
// Function to get a cookie value by name
export const getCookie = (name) => {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
};

// Function to store an object in localStorage
export const storeObjectInLocalStorage = (key, object) => {
  localStorage.setItem(key, JSON.stringify(object));
};

// Function to retrieve an object from localStorage
export const getObjectFromLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

// Function to remove an object from localStorage
export const removeObjectFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};
