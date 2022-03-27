let initialState = {
  productDetails: [],
  isLoading: true,
  isError: false,
  cart: [],
  sizes: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "INITIALISE":
      let sizes = action.payload.reduce((acc, product) => {
        return new Set([...product.sizes, ...acc]);
      }, new Set([]));
      return {
        ...state,
        productDetails: action.payload,
        isLoading: false,
        isError: false,
        sizes: [...sizes],
      };
    case "ERROR":
      return { ...state, productDetails: [], isLoading: false, sError: true };
    default:
      return state;
  }
}
