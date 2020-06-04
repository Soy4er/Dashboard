export const state = () => ({
    columns: [
        {
            id: 1,
            name: 'name',
            label: 'Name',
            visible: true,
            order: 1,
        }, {
            id: 2,
            name: 'email',
            label: 'Email',
            visible: true,
            order: 2,
        }, {
            id: 3,
            name: 'role',
            label: 'Role',
            visible: true,
            order: 3,
        }, {
            id: 4,
            name: 'company-name',
            label: 'Company name',
            visible: true,
            order: 4,
        }, {
            id: 5,
            name: 'registration-date',
            label: 'Registration date',
            visible: true,
            order: 5,
        }
    ]
  });
  
  export const getters = {
    getColumns(state) {
      return state.columns;
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
  