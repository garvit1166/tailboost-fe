import axios from "axios";

export const fetchTableData = async () => {
  const response = await axios.get(" https://tailboost-be-1.onrender.com/order");
  return response.data;
};

export const lineChartDataa = async (year) => {
  const response = await axios.get(
    `https://tailboost-be-1.onrender.com/order/yearWise?year=${year}`
  );
  console.log(response.data);
  return response.data;
};

export const barChartDataa = async (category) => {
  const response = await axios.get(
    ` https://tailboost-be-1.onrender.com/order/categoryWise?category=${category}`
  );
  //console.log(response.data);
  return response.data;
};
