export const state = () => ({
  menu: [
    {
      id: 0,
      name: 'Dashboard',
      link: '/',
      icon: 'dashboard',
      visible: true,
    }, {
      id: 1,
      name: 'Contacts',
      link: '/contacts',
      icon: 'user',
      visible: true,
    }
  ]
});

export const getters = {
  getMenu(state) {
    return state.menu;
  }
};

export const mutations = {
  CREATE_ITEM_MENU({ menu }, newItem) {
    menu.push(newItem);
  },
  UPDATE_ITEM_MENU({ menu }, upItem) {
    let item = menu.find(({ id }) => id === upItem.id);
    item = upItem;
  },
  DATELE_ITEM_MENU({ menu }, itemID) {
    menu.splice(itemID, 1);
  }
};

export const actions = {};
