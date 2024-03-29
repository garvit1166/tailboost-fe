import axios from "axios";

export const fetchTableData = async () => {
  const response = await axios.get(" http://localhost:3001/order");
  return response.data;
};

export const lineChartDataa = async (year) => {
  const response = await axios.get(
    ` http://localhost:3001/order/yearWise?year=${year}`
  );
  console.log(response.data);
  return response.data;
};

export const barChartDataa = async (category) => {
  const response = await axios.get(
    ` http://localhost:3001/order/categoryWise?category=${category}`
  );
  //console.log(response.data);
  return response.data;
};
