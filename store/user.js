export const state = () => ({
  users: [{
    id: 1,
    login: 'test',
    password: 'test',
    name: 'Andy Kramer',
    email: 'andykramer@gmail.com',
    img: 'avatar.jpg',
  }]
});

export const getters = {
  getUsers(state) {
    return state.users;
  },
  getAuthUser(state, userID) {
    return state.users.find(({ id }) => id === 1);
  }
};

export const mutations = {
  CREATE_USER({ users }, newUser) {
    users.push(newUser);
  },
  UPDATE_USER({ users }, upUser) {
    let user = users.find(({ id }) => id === upUser.id);
    user = upUser;
  },
  DATELE_USER({ users }, userID) {
    users.splice(userID, 1);
  }
};

export const actions = {};
