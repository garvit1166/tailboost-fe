import './DashboardDataSection.css';
import React, { useEffect, useState } from 'react';
import StatsBar from '../StatsBar/StatsBar';
import LineChart from '../LineChart/LineChart';
import DoughnutChart from '../DoughnutChart/DoughnutChart';
import { GiPartyPopper } from 'react-icons/gi';
import StatsTile from '../StatsTile/StatsTile';
import { TbStackPop } from 'react-icons/tb';
import BarChart from '../BarChart/BarChart';

const xAxisData = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
];
const yAxisData = [[100, 200, 1500, 180, 250, 300, 400, 900]];
const dataLabels = ['Product A'];
const doughnutdata = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group D', value: 200 },
  { name: 'Group D', value: 200 },
  { name: 'Group D', value: 200 },
  { name: 'Group D', value: 200 },
  { name: 'Group D', value: 200 },
  { name: 'Group D', value: 200 },
  { name: 'Group D', value: 200 },
  { name: 'Group D', value: 200 },
  { name: 'Group D', value: 20 },
  { name: 'Group D', value: 200 },
  { name: 'Group D', value: 200 },
];
const xAxisBarData = [
  'Subcategory 1',
  'Subcategory 2',
  'Subcategory 3',
  'Subcategory 4',
  'Subcategory 5',
];
const yAxisBarData = [[1200, 1500, 800, 900, 1100]];
const barDataLabels = ['Sales'];
const colorsList = ['#007bff'];

function DashboardDataSection() {
  const [selectedYearOption, setSelectedYearOption] = useState('Monthly');
  const [lineChartData, setLineChartData] = useState({
    dataLabels: [],
    xAxisData: [],
    yAxisData: [],
  });
  const [doughnutChartData, setDoughnutChartData] = useState([]);
  const [lineChartFilter, setLineChartFilter] = useState('Yearly');
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [categoryOptions, setCategoryOptions] = useState([
    'Clothing',
    'Electonics',
    'Furnitutre',
  ]);
  const [stats, setStats] = useState([
    { label: 'Total Revenue', value: '500K' },
    { label: 'Total Profit', value: '500' },
    { label: 'Total Product', value: '100' },
    { label: 'Total Orders', value: '2000K' },
  ]);
  const [yearOptions, setYearOptions] = useState(['2018', '2019', '2017']);
  const [topCustomer, setTopCustomer] = useState({
    label: 'Top Customer',
    value: 'Priyanka',
  });
  const [topProduct, setTopProduct] = useState({
    label: 'Top Selling Product',
    value: 'Saree',
  });
  window.onresize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };
  const handleOptionChange = (option) => {
    setLineChartFilter(option);
    if (option === 'Yearly') {
      setSelectedYearOption('Monthly');
    }
  };

  // const fetchStats = async () => {
  //   const res = await xyz();
  //   setStats(res.stats);
  //   setYearOptions(res.yearOptions);
  //   setCategoryOptions(res.categoryOptions);
  //   setTopCustomer(res.topCustomer);
  //   setTopProduct(res.topProduct);
  // setDoughnutChartData(res.doughnutChartDatt)
  // };

  // const fetchSalesDistribution = async () => {
  //   const res = await abc(lineChartFilter);
  //   setLineChartData(res.data);
  // };

  // useEffect(() => {
  //   fetchStats();
  // }, []);

  // useEffect(() => {
  //   fetchSalesDistribution();
  // }, [lineChartFilter]);
  return (
    <div className="d-flex flex-column data-section">
      <StatsBar stats={stats} />
      <div className="px-4 row charts-section">
        <div className="col-md-8 col-sm-12 p-2 linechart">
          <div className="d-flex justify-content-between">
            <p
              className="text-start ps-2 mb-0 pb-0 fw-bold"
              style={{ color: '#52f5eb' }}
            >
              Sales Analysis
            </p>
            <div className="d-flex">
              <button
                className={`btn btn-outline-light me-4 btn-sm ${
                  lineChartFilter === 'Yearly' ? 'active' : ''
                }`}
                onClick={() => handleOptionChange('Yearly')}
              >
                Yearly
              </button>
              <select
                class={`form-select form-select-sm bg-transparent text-white chart-filter ${
                  lineChartFilter !== 'Yearly' ? 'active' : ''
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
                    <option className="text-dark" value={option}>
                      {option}
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
            colorsList={['#23cebf', '#6bcf73', '#a5cf6b', '#cf6bb1', '#cf6b6b']}
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="ms-4 w-100 doughnutchart">
            <DoughnutChart
              doughnutData={doughnutChartData}
              colors={[
                '#23cebf',
                '#6bcf73',
                '#a5cf6b',
                '#6c6bcf',
                '#cf6bb1',
                '#cf6b6b',
              ]}
            />
            <p
              className="text-center ps-2 mb-0 pb-0 fw-bold"
              style={{ color: '#52f5eb' }}
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
              style={{ color: '#52f5eb' }}
            >
              Sales By Sub-Category
            </p>
            <select
              class="form-select form-select-sm bg-transparent text-white  chart-filter"
              style={{ width: '20%' }}
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
            yAxisData={yAxisBarData}
            xAxisData={xAxisBarData}
            dataLabels={barDataLabels}
            colorsList={['#23cebf', '#6bcf73', '#a5cf6b', '#cf6bb1', '#cf6b6b']}
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardDataSection;
