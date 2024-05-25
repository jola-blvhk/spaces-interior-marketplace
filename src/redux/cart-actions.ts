import { useAppDispatch } from ".";
import { cartActions } from "./cart-slice";
import { notificationActions } from "./notification-slice";


// export const fetchData = () => {
//   return async (dispatch) => {
//     const fetchHandler = async () => {
//       const res = await fetch(
//         "https://redux-http-adc7f-default-rtdb.firebaseio.com/cartItems.json"
//       );
//       const data = await res.json();
//       return data;
//     };
//     try {
//       const cartData = await fetchHandler();
//       dispatch(cartActions.replaceData(cartData));
//     } catch (err) {
//       dispatch(
//         notificationActions.showNotification({
//           open: true,
//           message: "Sending Request to Fetch Data Failed",
//           type: "error",
//         })
//       );
//     }
//   };
// };
// export const sendCartData = (cart) => {
//   return async (dispatch) => {
//     const sendRequest = async () => {
//       // Send state as Sending request
//       dispatch(
//         notificationActions.showNotification({
//           open: true,
//           message: "Sending Request",
//           type: "warning",
//         })
//       );
//       const res = await fetch(
//         "https://redux-http-adc7f-default-rtdb.firebaseio.com/cartItems.json",
//         {
//           method: "PUT",
//           body: JSON.stringify(cart),
//         }
//       );
//       const data = await res.json;
//       // Send state as Request is successful
//       dispatch(
//         notificationActions.showNotification({
//           open: true,
//           message: "Sent Request to Database successfully",
//           type: "success",
//         })
//       );
//     };
//     try {
//       await sendRequest();
//     } catch (err) {
//       dispatch(
//         notificationActions.showNotification({
//           open: true,
//           message: "Sending Request Failed",
//           type: "error",
//         })
//       );
//     }
//   };
// };
