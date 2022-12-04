import _Table from 'components/shared-components/Table';
import React, { useEffect, useState } from 'react'
import ApiService from 'services/ApiService';

const columns = [ { title: 'Name', name:"name", sorter:'number'},{ title: 'Description', name:"description", sorter:'string'}]

const Home = () => {

	const [resultData, setResultData] = useState();
	const [dataActivity, setActivity] = useState();
    
	useEffect(()=>{
		ApiService.Get("Activity").then((dataR)=>setActivity(dataR));
	  },[])
	
 	  useEffect(()=>{
		ApiService.Get("Activity").then((dataR)=>setActivity(dataR));
	  },[resultData]) 

	return (
		<div>
			<_Table data={dataActivity} columns={columns} setResultData={setResultData}/>
		</div>
	)
}
export default Home
