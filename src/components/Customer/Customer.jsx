import React, { useEffect, useState } from "react";
import Table from "../Table/Table";
import SearchBox from "../SearchBox/SearchBox";
import PropspectService from "../../Services/ProspectSetsServices";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProspectSetsServices from "../../Services/ProspectSetsServices";

export default function Customer() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    getAllCustoProspectSet();
  }, []);

  const getAllCustoProspectSet = async () => {
    const res = await PropspectService.getProspectSet();
    if (res.status === 200) {
      setData(res.prospectSet);
      setFilterData(res.prospectSet);
    }
    console.log(res);
  };

  const refreshData = async () => {
    await getAllCustoProspectSet();
  };
//   const filterOnChange = (inputValue) => {
//     console.log(inputValue);
//     if (inputValue === "") {
//       setFilterData(data);
//     } else {
//       let value = inputValue;
//       let prospectSet = data;
//       let result = [];
//       result = prospectSet.filter((prospect) => {
//         console.log(prospect);
//         if (
//           prospect.prospectName.toLowerCase().search(value.toLowerCase()) !== -1
//         ) {
//           return prospect;
//         }
//       });
//       setFilterData(result);
//     }
//   };

const searchProspectByName = async (inputValue) => {
    console.log(inputValue);
    if (inputValue === "") {
      toast.error("Please enter value to search!");
    } else {
      let result = await ProspectSetsServices.searchProspectSetByName(inputValue);
      console.log(result);
      setFilterData([result]);
    }
  };




  return (
    // <div className="container">
    <>
      <ToastContainer />
      <SearchBox
        style={{ marginTop: "-10px" }}
        // filterOnChange={filterOnChange}
        refreshData={refreshData}
        filterOnChange={searchProspectByName}
      />
      <Table prospectdata={filterData} refreshData={refreshData} />
      </>
    // </div>
  );
}
