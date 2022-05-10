import React, {useEffect, useState} from 'react';
import {View,Text,FlatList} from "react-native";
import axios from "axios";
import flatListJob from '../../components/flatListJob/flatListJob'
import FlatListJob from "../../components/flatListJob/flatListJob";


function Jobs(props) {

    const [data,setData] = useState([])

    useEffect(()=>{
        deneme()
    },[])

    const deneme = async () => {
        const {data} = await axios.get('https://www.themuse.com/api/public/jobs?category=Accounting&page=1')
        setData(data.results)
        console.log(data.results.map((x)=>x))
    }

    const categoriesRender = ({item}) => {
        return <FlatListJob item={item}/>
    }

    return (
        <FlatList data={data} keyExtractor={(item)=> item.name} renderItem={categoriesRender}/>
    );
}

export default Jobs;
