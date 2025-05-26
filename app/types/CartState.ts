export default interface CartState {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
  setQuantity: (value: number) => void;
}