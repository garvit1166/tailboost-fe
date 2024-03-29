import "./DashboardDataSection.css";
import React, { useEffect, useState } from "react";
import StatsBar from "../StatsBar/StatsBar";
import LineChart from "../LineChart/LineChart";
import DoughnutChart from "../DoughnutChart/DoughnutChart";
import { GiPartyPopper } from "react-icons/gi";
import StatsTile from "../StatsTile/StatsTile";
import { TbStackPop } from "react-icons/tb";
import BarChart from "../BarChart/BarChart";
import {
  barChartDataa,
  fetchTableData,
  lineChartDataa,
} from "../../libs/apis/data";
import useWebSocket from "react-use-websocket";

const WS_URL = "ws://localhost:3001";

function DashboardDataSection() {
  const [selectedYearOption, setSelectedYearOption] = useState("Monthly");
  const [lineChartData, setLineChartData] = useState({
    dataLabels: [],
    xAxisData: [],
    yAxisData: [],
  });
  const [selectedCategoryOption, setSelectedCategoryOption] =
    useState("Electronics");
  const [barChartData, setbarChartData] = useState({
    dataLabels: [],
    xAxisData: [],
    yAxisData: [],
  });

  const [doughnutChartData, setDoughnutChartData] = useState([]);
  const [lineChartFilter, setLineChartFilter] = useState("Yearly");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [categoryOptions, setCategoryOptions] = useState([
    "Clothing",
    "Electonics",
    "Furnitutre",
  ]);
  const [stats, setStats] = useState([
    { label: "Total Revenue", value: "500K" },
    { label: "Total Profit", value: "500" },
    { label: "Total Product", value: "100" },
    { label: "Total Orders", value: "2000K" },
  ]);
  const [yearOptions, setYearOptions] = useState(["2018", "2019", "2017"]);
  const [topCustomer, setTopCustomer] = useState({
    label: "Top Customer",
    value: "Priyanka",
  });
  const [topProduct, setTopProduct] = useState({
    label: "Top Selling Product",
    value: "Saree",
  });

  const { lastMessage } = useWebSocket(WS_URL, {
    onOpen: () => {
      console.log("WebSocket connection established.");
    },
  });
  useEffect(() => {
    if (lastMessage) {
      const message = JSON.parse(lastMessage.data);
      if (message.message === "refresh") {
        fetchStats();
        fetchSalesCategoryDistribution();
        fetchSalesDistribution();
      }
    }
  }, [lastMessage]);

  window.onresize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };
  const handleOptionChange = (option) => {
    if (option == "Monthly") {
      setLineChartFilter("Yearly");
    } else {
      setLineChartFilter(option);
    }

    if (option === "Yearly") {
      setSelectedYearOption("Monthly");
    }
  };

  const handleChange = (option) => {
    setSelectedCategoryOption(option);
  };

  const fetchStats = async () => {
    return fetchTableData().then((res) => {
      setStats(res.stats);
      setYearOptions(res.uniqueYears);
      setCategoryOptions(res.uniqueCategories);
      setTopCustomer(res.Top_Costumer[0]);
      setTopProduct(res.Top_Product[0]);
      setDoughnutChartData(res.stateWise);
    });
  };

  const fetchSalesDistribution = async () => {
    const res = await lineChartDataa(lineChartFilter);
    console.log(res.data);
    setLineChartData(res);
  };

  const fetchSalesCategoryDistribution = async () => {
    const res = await barChartDataa(selectedCategoryOption);
    console.log(res);
    setbarChartData(res);
  };
  useEffect(() => {}, []);

  useEffect(() => {
    fetchStats();
  }, []);

  useEffect(() => {
    fetchSalesDistribution();
  }, [lineChartFilter]);

  useEffect(() => {
    fetchSalesCategoryDistribution();
  }, [selectedCategoryOption]);
  return (
    <div className="d-flex flex-column data-section">
      <StatsBar stats={stats} />
      <div className="px-4 row charts-section">
        <div className="col-md-8 col-sm-12 p-2 linechart">
          <div className="d-flex justify-content-between">
            <p
              className="text-start ps-2 mb-0 pb-0 fw-bold"
              style={{ color: "#52f5eb" }}
            >
              Sales Analysis
            </p>
            <div className="d-flex">
              <button
                className={`btn btn-outline-light me-4 btn-sm ${
                  lineChartFilter === "Yearly" ? "active" : ""
                }`}
                onClick={() => handleOptionChange("Yearly")}
              >
                Yearly
              </button>
              <select
                class={`form-select form-select-sm bg-transparent text-white chart-filter ${
                  lineChartFilter !== "Yearly" ? "active" : ""
                }`}
                aria-label=".form-select-sm example"
                onChange={(e) => {
                  handleOptionChange(e.target.value);
                  setSelectedYearOption(e.target.value);
                }}
                value={selectedYearOption}
              >
                <option value="Monthly" selecte className="text-dark">
                  Monthly(Select Year)
                </option>
                {yearOptions ? (
                  yearOptions.map((option) => (
                    <option className="text-dark" value={option._id}>
                      {option._id}
                    </option>
                  ))
                ) : (
                  <div>Loading....</div>
                )}
              </select>
            </div>
          </div>
          <LineChart
            xAxisData={lineChartData.xAxisData}
            yAxisData={lineChartData.yAxisData}
            dataLabels={lineChartData.dataLabels}
            colorsList={["#23cebf", "#6bcf73", "#a5cf6b", "#cf6bb1", "#cf6b6b"]}
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="ms-4 w-100 doughnutchart">
            <DoughnutChart
              doughnutData={doughnutChartData}
              colors={[
                "#23cebf",
                "#6bcf73",
                "#a5cf6b",
                "#6c6bcf",
                "#cf6bb1",
                "#cf6b6b",
              ]}
            />
            <p
              className="text-center ps-2 mb-0 pb-0 fw-bold"
              style={{ color: "#52f5eb" }}
            >
              Region Distribution
            </p>
          </div>
        </div>
      </div>
      <div className=" row mt-4">
        <div className="col-md-4 col-sm-12">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-6">
              <StatsTile stat={topProduct} icon={GiPartyPopper} />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-6">
              <StatsTile stat={topCustomer} icon={TbStackPop} />
            </div>
          </div>
        </div>
        <div className="col-md-8 col-sm-12 barchart">
          <div className="d-flex justify-content-between mt-3">
            <p
              className="text-start ps-2 mb-0 pb-0 fw-bold"
              style={{ color: "#52f5eb" }}
            >
              Sales By Sub-Category
            </p>
            <select
              class="form-select form-select-sm bg-transparent text-white  chart-filter"
              style={{ width: "20%" }}
              onChange={(e) => {
                handleChange(e.target.value);
                setSelectedCategoryOption(e.target.value);
              }}
              aria-label=".form-select-sm example"
            >
              {categoryOptions ? (
                categoryOptions.map((option) => (
                  <option className="text-dark" value={option}>
                    {option}
                  </option>
                ))
              ) : (
                <div>Loading....</div>
              )}
            </select>
          </div>
          <BarChart
            yAxisData={barChartData.yAxisData}
            xAxisData={barChartData.xAxisData}
            dataLabels={barChartData.dataLabels}
            colorsList={["#23cebf", "#6bcf73", "#a5cf6b", "#cf6bb1", "#cf6b6b"]}
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardDataSection;
