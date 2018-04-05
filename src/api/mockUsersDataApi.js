
// The mock API for fetching the list of users and saving a new user
const users = [
  {
    id: "1",
    name: "Captain America",
  },
  {
    id: "2",
    name: "Iron Man",
  },
  {
    id: "3",
    name: "Hulk",
  },
  {
    id: "4",
    name: "Thor",
  },
  {
    id: "5",
    name: "Black Widow",
  },
  {
    id: "6",
    name: "Clint Barton",
  },
];

const generateId = (user) => {
  return users.length + 1;
};

class UsersApi {
  static getAllUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], users));
      }, 2000);
    });
  }

  static saveUser(user) {
    user = Object.assign({}, user); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minUserNameLength = 1;
        if (user.name.length < minUserNameLength) {
          reject(`User name must have at least ${minUserNameLength} character.`);
        }

        if (user.id) {
          const existingUserIndex = user.findIndex(a => a.id === user.id);
          user.splice(existingUserIndex, 1, user);
        } else {
          user.id = generateId(user);
          users.push(user);
        }
        resolve(user);
      }, 0);
    });
  }
}

export default UsersApi;
