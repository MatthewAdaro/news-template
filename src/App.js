import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import design from "./css/App.module.css";
import Navbar from "./components/Navbar";
import Business from "./components/Business";
import Lifestyle from "./components/Lifestyle";
import Technology from "./components/Technology";
import HealthAndWellness from "./components/HealthAndWellness";
import Events from "./components/Events";
import Travel from "./components/Travel";
import DataCard from "./components/DataCard";

import PaginationComponent from "./components/PaginationComponent";

function App() {
  const dataVal = [
    {
      title: "Enchanted Kingdom Opens Gate to Alcatraz",
      category: ["Lifestyle", "Events"],
    },
    {
      title: "Lazer Mission 2.0 Comes Back Stronger and Bigger",
      category: ["Lifestyle", "Events"],
    },
    {
      title: "EK to launch new girl group SMS at P-Pop Day",
      category: ["Lifestyle", "Events"],
    },
    {
      title: "Rekindle Enchanted Kingdom's 27 Years of Magical Experiences",
      category: ["Lifestyle", "Events"],
    },
    {
      title: "Subways's Secret Recipe Spices Up Foodies' Word of Mouth",
      category: ["Business", "Food"],
    },
    {
      title:
        "Pag-IBIG home loan releases grow 27% to record-high P83.31 B in Q3 2022",
      category: "Business",
    },
    {
      title:
        "UBX: Success in digital transformation should be rooted in customer-centric approach",
      category: "Business",
    },
    {
      title: "Emirates SkyCargo and United Cargo announce landmark agreement",
      category: "Business",
    },
    {
      title:
        "CitySavings celebrates growth as leading motorcycle lender in the Philippines",
      category: "Business",
    },
    {
      title:
        "UnionBank teams up with Noel Bazaar creator to help participating merchants digitize transactions",
      category: "Business",
    },
    {
      title: "Steps towards stronger cybersecurity in the Philippines",
      category: "Technology",
    },
    {
      title:
        "Emirates Skywards rings in the festive season with thousands of Miles on offer",
      category: "Business",
    },
    {
      title:
        "Xendit partners with China Bank to Provide convenient cash-in on Maya app",
      category: "Business",
    },
    {
      title:
        'LOOK: All your "Ihaw-Sarap" favorites are now in Mang Inasal Family Fiesta!',
      category: ["Business", "Food"],
    },
    {
      title: "How to Make the Most of Galaxy Z Flip 4 at Every Angle",
      category: "Technology",
    },
    {
      title:
        "NHMFC Pres. Tobias keynotes OSHDP Affordable Housing Summit 2022, enjoins collaboration in addressing house crisis",
      category: "Business",
    },
    {
      title: "Get fiery with Subway's Chicken Mala Sub!",
      category: ["Business", "Food"],
    },
    {
      title:
        "Nissan reinforces Blue Switch at the 10th Philippine Electric Vehicle Summit",
      category: ["Business", "Motoring"],
    },
    {
      title: "CSMC bags top award for MIS training program at PMAP Awards 2022",
      category: "Business",
    },
    {
      title:
        "Pag-IBIG Fund finances homes of more than 13,000 low-wage earners in Jan-Sep 2022",
      category: "Business",
    },
    {
      title:
        "How the weaker peso is affecting remittances-and three ways Filipinos can take advantage",
      category: "Business",
    },
    {
      title:
        "DITO Telecommunity launches its Flagship Experience Store at SM Megamall",
      category: "Technology",
    },
    {
      title: "CitySavings, DAR sign Government Employee Loan Agreement",
      category: "Business",
    },
    {
      title:
        "UBX leads multi-sectoral initiative to drive accelerated digital transformation in PH government",
      category: "Business",
    },
    {
      title:
        "ENEOSMotorOil unviels complete product line up for cars and motorcycles",
      category: "Motoring",
    },
    {
      title:
        "UBX sets up advocacy body to champion development of inclusive open finance framework in PH",
      category: "Business",
    },
    {
      title:
        "Samsung joins the biggest construction tradeshow in the Philippines",
      category: ["Technology", "Events"],
    },
    {
      title:
        "Emirates Boarding Pass Unlocks Hundreds of Offers in Dubai this Winter",
      category: "Business",
    },
    {
      title:
        "Pag-IBIG Calamity Loan ready for members affected by Typhoon Paeng",
      category: "Business",
    },
    {
      title: "First Emirates A380 rolls in for full cabin refresh and refit",
      category: "Business",
    },
    {
      title:
        "UnionDigital Banks 1.73-M Customers in Four Months, Onboards PDAX as First Corporate Account Customer",
      category: "Business",
    },
    {
      title: "SM Cares celebrates World Cerebral Palsy Day at SM City Rosario",
      category: "Health and Wellness",
    },
    {
      title: "Can health insurance be sustainable? 44% of Filipinos agree",
      category: "Business",
    },
    {
      title:
        "Emirates and Air Canada Activate Codeshare Partnership to Extend Global Networks and Enhance Customer Experience",
      category: "Business",
    },
    {
      title: "Mang Inasal supports farmer livelihood initiative",
      category: "Business",
    },
    {
      title: "BiyaheKo joins hands with JuanHand",
      category: "Business",
    },
    {
      title:
        "SM Cares brings back SM Bears of Joy to help you share the love with children in need this season",
      category: "Health and Wellness",
    },
    {
      title: "JuanHand partners with Lazada",
      category: "Business",
    },
    {
      title:
        "Emirates Group announces record half-year performance for 2022-23",
      category: "Business",
    },
  ];

  console.log(dataVal);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/business" element={<Business />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/healthandwellness" element={<HealthAndWellness />} />
        <Route path="/events" element={<Events />} />
        <Route path="/travel" element={<Travel />} />
      </Routes>
      <div className={design.content}>
        {dataVal.map((news, index) => {
          return (
            <DataCard key={index} title={news.title} category={news.category} />
          );
        })}
      </div>
      <div className={design.pagination}>
        <PaginationComponent />
      </div>
    </div>
  );
}

export default App;
