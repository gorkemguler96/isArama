import React, {useEffect, useState} from 'react';
import {View,Text,FlatList} from "react-native";
import axios from "axios";
import FlatListJob from "../../components/flatListJob/flatListJob";
import Loading from "../../components/Loading/Loading";


function Jobs({navigation}) {

    const [data,setData] = useState([])
    const [loading,setLoading]= useState(true)

    useEffect(()=>{
        deneme()
    },[])

    const deneme = async () => {
        const {data} = await axios.get('https://www.themuse.com/api/public/jobs?category=Accounting&page=1')
        setData(data.results)
        setLoading(false)
    }

    const categoriesRender = ({item}) => {
        return <FlatListJob navigation={navigation} item={item}/>
    }

    if(loading){
        return (<Loading/>)
    }

    return (
        <FlatList data={data} keyExtractor={(item)=> item.name} renderItem={categoriesRender}/>
    );
}

export default Jobs;
