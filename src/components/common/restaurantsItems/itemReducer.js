export const reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      return {
        ...state, 
        items: state.items.filter((curElem) => {
          return curElem.id !== action.payload;
        }),
      };

    case "CLEAR_CART":
      return { ...state, items: [] };

    case "INCREMENT":
      const updatedCart = state.items.map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, quantity: Number(curElem.quantity) + 1 };
        }
        return curElem;
      });

      return { ...state, items: updatedCart };

    case "DECREMENT":
      const updateItem = state.items.map((currElm) => {
        if (currElm.id === action.payload) {
          if (currElm.quantity !== 0) {
            return { ...currElm, quantity: currElm.quantity - 1 };
          }
        }
        return currElm;
      });
      return { ...state, items: updateItem };
    case "GET_TOTAL":
      let { totalItems, totalAmount } = state.items.reduce(
        (accum, curVal) => {
          let { quantity, price } = curVal;

          let updatedTotalAmount = price * quantity;
          accum.totalAmount += updatedTotalAmount;

          accum.totalItems += Number(quantity);
          return accum;
        },
        {
          totalItems: 0,
          totalAmount: 0,
        }
      );
      return { ...state, totalItems, totalAmount };
    default : return state
  }
};
// if (action.type === "REMOVE_ITEM") {
//   return {
//     ...state,
//     items: state.items.filter((curElem) => {
//       return curElem.id !== action.payload;
//     }),
//   };
// }
