// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   orderHistory: [],
//   filteredOrderHistory: [],
// };

// const dataSlice = createSlice({
//   name: "data",
//   initialState,
//   reducers: {
//     setOrderHistory(state, action) {
//       state.orderHistory = action.payload;
//       state.filteredOrderHistory = action.payload; // Default to all data
//     },
//     filterDataByDays(state, action) {
//       const days = action.payload;
//       const currentDate = new Date();
//       state.filteredOrderHistory = state.orderHistory.filter((order) => {
//         const orderDate = new Date(order.openDate);
//         const timeDifference = (currentDate - orderDate) / (1000 * 60 * 60 * 24); // Difference in days
//         return timeDifference <= days;
//       });
//     },
//   },
// });

// export const { setOrderHistory, filterDataByDays } = dataSlice.actions;

// export const fetchData = () => (dispatch) => {
//   // Simulate fetching data
//   fetch("/data.json")
//     .then((response) => response.json())
//     .then((data) => dispatch(setOrderHistory(data.orderHistory)));
// };

// export default dataSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderHistory: [],
  filteredOrderHistory: [],
  aggregateData: [], // Add aggregate data state
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    // Set order history data
    setOrderHistory(state, action) {
      state.orderHistory = action.payload;
      state.filteredOrderHistory = action.payload; // Default to all data
    },
    // Filter order history data based on the number of days
    filterDataByDays(state, action) {
      const days = action.payload;
      const currentDate = new Date();
      state.filteredOrderHistory = state.orderHistory.filter((order) => {
        const orderDate = new Date(order.openDate);
        const timeDifference = (currentDate - orderDate) / (1000 * 60 * 60 * 24); // Difference in days
        return timeDifference <= days;
      });
    },
    // Set aggregate data (for the Aggregate Insight component)
    setAggregateData(state, action) {
      state.aggregateData = action.payload;
    },
  },
});

// Export actions
export const { setOrderHistory, filterDataByDays, setAggregateData } = dataSlice.actions;

// Fetch order history data from JSON (similar to previous implementation)
export const fetchData = () => (dispatch) => {
  fetch("/data.json")
    .then((response) => response.json())
    .then((data) => dispatch(setOrderHistory(data.orderHistory)));
};

// Fetch aggregate data from JSON (for aggregate insights)
export const fetchAggregateData = () => (dispatch) => {
  fetch("/data.json")
    .then((response) => response.json())
    .then((data) => dispatch(setAggregateData(data.aggregateData)));
};

export default dataSlice.reducer;
