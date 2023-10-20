const getUserDataFromLocalStorage = () => {
  const userData = localStorage.getItem("users");
  console.log("getUserDataFromLocalStorage userData", userData);
  return userData ? JSON.parse(userData) : [];
};

let userList = getUserDataFromLocalStorage();

const addUser = (email, password) => {
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = existingUsers.some((user) => user.email === email);

  if (userExists) {
    return false;
  }

  const newUser = {
    email: email,
    password: password,
  };
  existingUsers.push(newUser);
  localStorage.setItem("users", JSON.stringify(existingUsers));
  return true;
};

const authenticateUser = (email, password) => {
  const user = userList.find(
    (user) => user.email === email && user.password === password
  );
  return user ? user : null;
};

export { addUser, authenticateUser };
