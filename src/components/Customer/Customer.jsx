import React ,{useEffect,useState} from 'react'
import Table from "../Table/Table"
import SearchBox from "../SearchBox/SearchBox"
import PropspectService from "../../Services/ProspectSetsServices"

export default function Customer() {
const [data,setData]=useState([])
    useEffect(() => {
        getAllCustoProspectSet();
      }, []);

    const getAllCustoProspectSet=async()=>{
        const res = await PropspectService.getProspectSet();
        setData(res.prospectSet)
        console.log(res)
    }
    return (
        <>
            <SearchBox style={{marginTop:"-10px"}}/>
            <Table data={data}/>
        </>
    )
}
