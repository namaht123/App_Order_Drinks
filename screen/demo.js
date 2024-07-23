import { View, Text } from 'react-native'
import React from 'react'

const CompCon1 = (props)=> { // tham số props: dùng để truy cập thuộc tính của Comp
    GuiSang2 = ()=>{
    props.parentCallback("Dữ liệu trong Comp con 11111")
    }
    return (
        <View>
            <Text style={{fontSize:20}}> Dữ liệu gửi từ Con 2: {props.dulieu}</Text> 
            <Button title='Gửi sang 2' onPress={ GuiSang2} />
        </View>
    
    );
    }
    const CompCon2 = (props)=>{ // tham số props: dùng để truy cập thuộc tính của Comp 
        GuiSang1 = () => {
            props.parentCallback("Dữ liệu trong Comp con 222222")
    }
    return (
        <View>
            <Text style={{fontSize:20}}> Dữ liệu gửi từ Con 1: {props.dulieu}</Text>
            <Button title='Gửi sang 1' onPress={ GuiSang1 } />
        </View>
    );
    }
    // Component chính
    const CompCha = () => {
        const [dulieuTrungGian, setdulieuTrungGian] =useState(""); // dùng dạng chuỗi
        const callback_CompCon = (data_con)=>{
        // alert(data_con);
        setdulieuTrungGian(data_con)
        }
        return(
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <CompCon1 dulieu={dulieuTrungGian} parentCallback = {callback_CompCon} />
        <CompCon2 dulieu={dulieuTrungGian} parentCallback ={callback_CompCon} />
        </View>
        )
        }
        export default CompCha;
