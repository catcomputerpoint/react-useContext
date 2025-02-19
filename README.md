# useContext Examples

### Exercise - 1:

- Create 2 components : Cart & ProductListing

### Exercise - 2:

- Create a Context & wrap the components in ContextProvider (cart-context.js) where App is rendered

### Exercise - 3:

- Consume the context in Cart component and update the code to display the items in cart!


### Exercise - 4:

- Passing a function to the component via Provider
- Here we just pass a logger function

### Exercise - 5:

#### Code Refactor

- Extract the CartContextProvider and refactor the code
- Use `<CartProvider>` and provide it `<App>` as a children.

### Exercise - 6

- Make the CartContext as a customHook - `useCart()`

### Exercise - 7

- Pass state & setState values instead of static values