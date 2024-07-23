import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const FilterView = ({ productName, selected, onPress }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity
            style={{ marginLeft: 10, marginRight: 10 }}
            onPress={onPress}
        >
            <Text style={{ color: selected ? '#4EC581' : '#a7a7a7' }}>{productName}</Text>
        </TouchableOpacity>
    </View>
);

const FilterProduct = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handlePress = (productName) => {
        setSelectedItem(productName === selectedItem ? null : productName);
    };

    return (
        <SafeAreaView style={{ padding: 5, paddingLeft: 15, paddingRight: 15 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <FilterView
                    productName="All"
                    selected={selectedItem === "All"}
                    onPress={() => handlePress("All")}
                />
                <FilterView
                    productName="Cam"
                    selected={selectedItem === "Cam"}
                    onPress={() => handlePress("Cam")}
                />
                <FilterView
                    productName="Táo"
                    selected={selectedItem === "Táo"}
                    onPress={() => handlePress("Táo")}
                />
                <FilterView
                    productName="Quýt"
                    selected={selectedItem === "Quýt"}
                    onPress={() => handlePress("Quýt")}
                />
                <FilterView
                    productName="Coffee"
                    selected={selectedItem === "WateCoffeermelon"}
                    onPress={() => handlePress("Coffee")}
                />
                <FilterView
                    productName="Hot Coffee"
                    selected={selectedItem === "Hot Coffee"}
                    onPress={() => handlePress("Hot Coffee")}
                />
                <FilterView
                    productName="Ice Coffee"
                    selected={selectedItem === "Ice Coffee"}
                    onPress={() => handlePress("Ice Coffee")}
                />
                {/* Add more products if needed */}
            </ScrollView>
        </SafeAreaView>
    );
};

export default FilterProduct;
