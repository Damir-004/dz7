export default function reducer (state, action) {
  switch (action.type) {
    case "add":
      return [
        {
          pizza: {
            ...state[0].pizza,
            price: state[0].pizza.price + action.payload.price,
            ingredients: state[0].pizza.ingredients.map((obj) =>
              obj === action.payload ? { ...obj, total: obj.total + 1 } : obj
            ),
          },
        },
      ];
    case "del":
      return [
        {
          pizza: {
            ...state[0].pizza,
            price:
              action.payload.total >= 0
                ? state[0].pizza.price - action.payload.price
                : state[0].pizza.price,
            ingredients: state[0].pizza.ingredients.map((obj) =>
              obj === action.payload ? { ...obj, total: obj.total - 1 } : obj
            ),
          },
        },
      ];
    case "reset":
      return [
        {
          pizza: {
            ...state[0].pizza,
            price: 3,
            ingredients: state[0].pizza.ingredients.map((obj) => ({
              ...obj,
              total: 0,
            })),
          },
        },
      ];
  }
}