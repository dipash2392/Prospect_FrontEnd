import React ,{useEffect,useState} from 'react'
import Table from "../Table/Table"
import SearchBox from "../SearchBox/SearchBox"
import PropspectService from "../../Services/ProspectSetsServices"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Customer() {
const [data,setData]=useState([])
    useEffect(() => {
        getAllCustoProspectSet();
      }, []);

    const getAllCustoProspectSet=async()=>{
        const res = await PropspectService.getProspectSet();
        if(res.status===200){
            setData(res.prospectSet)
        }
        console.log(res)
    }

    const refreshData=async()=>{
        await getAllCustoProspectSet()
    }

    return (
        <>
        <ToastContainer/>
            <SearchBox style={{marginTop:"-10px"}}/>
            <Table prospectdata={data} refreshData={refreshData}/>
        </>
    )
}
