import React, { useEffect, useRef, useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Modal, Image, FlatList, ScrollView } from 'react-native';
// import Headercomp from './Headercomp';
// import Back from '../assets/svg/back.svg';
import LinearGradient from 'react-native-linear-gradient';


const petcategory = [
    {
        id: 1,
        name: 'Puppy',
        check: 0
    },
    {
        id: 2,
        name: 'Adult Dog',
        check: 0
    },
]
const PetBreed = [
    {
        id: 1,
        name: 'Labrador',
        check: 0
    },
    {
        id: 2,
        name: 'German shepherd',
        check: 0
    },
    {
        id: 3,
        name: 'Dachshund',
        check: 0
    },
    {
        id: 4,
        name: 'Mudhol hound',
        check: 0
    },
    {
        id: 5,
        name: 'Beagle',
        check: 0
    },
    {
        id: 6,
        name: 'Golden Retriever',
        check: 0
    },
    {
        id: 7,
        name: 'Chihuahua',
        check: 0
    },
    {
        id: 8,
        name: 'Pug',
        check: 0
    },
    {
        id: 9,
        name: 'Indian Spitz',
        check: 0
    },
    {
        id: 10,
        name: 'Maltese',
        check: 0
    },
]
const ProductCategory = [
    {
        id: 1,
        name: 'Food',
        check: 0
    },
    {
        id: 2,
        name: 'Biscuits',
        check: 0
    },
    {
        id: 3,
        name: 'Shampoo',
        check: 0
    },
    {
        id: 4,
        name: 'Bowls',
        check: 0
    },
    {
        id: 5,
        name: 'Wet Food',
        check: 0
    },
    {
        id: 6,
        name: 'Brushes & Combs',
        check: 0
    },
    {
        id: 7,
        name: 'Dry Food',
        check: 0
    },
    {
        id: 8,
        name: 'Bone Broth',
        check: 0
    },
]
const PetAllergy = [
    {
        id: 1,
        name: 'Sneezing and runny nose',
        check: 0
    },
    {
        id: 2,
        name: 'Postnasal drip',
        check: 0
    },
    {
        id: 3,
        name: 'Cough',
        check: 0
    },
    {
        id: 4,
        name: 'Itchy, red or watery eyes',
        check: 0
    },
    {
        id: 5,
        name: 'Eczema',
        check: 0
    },
    {
        id: 6,
        name: 'Raised, red patches of skin',
        check: 0
    },
    {
        id: 7,
        name: 'Itchy skin',
        check: 0
    },
    {
        id: 8,
        name: 'Fever',
        check: 0
    },
]

const FilterScreen = (props,{navigation}) => {

    const [petcategorydata, setpetcategorydata] = useState(petcategory)
    const [PetBreeddata, setPetBreeddata] = useState(PetBreed)
    const [ProductCategorydata, setProductCategorydata] = useState(ProductCategory)
    const [PetAllergydata, setPetAllergydata] = useState(PetAllergy)

    const changvaluefun = (name) => {
        let newvalue = petcategorydata.filter((item) => {
            if (item.name == name) {
                if (item.check == 0) {
                    item.check = 1;
                }
                else {
                    item.check = 0;
                }
            }
            return item;
        })
        setpetcategorydata(newvalue);
    }
    const changvaluebreedfun = (name) => {
        let newvalue = PetBreeddata.filter((item) => {
            if (item.name == name) {
                if (item.check == 0) {
                    item.check = 1;
                }
                else {
                    item.check = 0;
                }
            }
            return item;
        })
        setPetBreeddata(newvalue);
    }
    const changvaluepcatfun = (name) => {
        let newvalue = ProductCategorydata.filter((item) => {
            if (item.name == name) {
                if (item.check == 0) {
                    item.check = 1;
                }
                else {
                    item.check = 0;
                }
            }
            return item;
        })
        setProductCategorydata(newvalue);
    }
    const changvalueallergyfun = (name) => {
        let newvalue = PetAllergydata.filter((item) => {
            if (item.name == name) {
                if (item.check == 0) {
                    item.check = 1;
                }
                else {
                    item.check = 0;
                }
            }
            return item;
        })
        setPetAllergydata(newvalue);
    }

    return <View >
        <Modal animationType="fade" transparent={true} visible={true}>
            <View style={{ height: '100%', marginTop: 'auto', position: "relative", backgroundColor: '#0e0e0e61', zIndex: 999999 }}>
                <TouchableOpacity style={{ position: 'absolute', bottom: 0, width: '100%', height: "100%" }} 
                   
                >
                    <View  ></View>
                </TouchableOpacity>
                <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, borderTopRadius: 50, height: '100%', backgroundColor: "#ffffff", }}>
                    <View style={{ padding: 13, flexDirection: "row", justifyContent: "space-between", paddingLeft: 15, paddingRight: 15 }}>
                        <View style={{ flexDirection: "row" }}>
                             {/* <TouchableOpacity onPress={() => {
                                props.closeimagepopup(1, '')
                            }}>
                                <Back height={40} width={40} /> 
                            </TouchableOpacity>  */}
                            <View style={{ alignSelf: "center", marginLeft: 15 }}>
                                <Text style={{ color: "#2D2E43", fontSize: 20, fontWeight: "700" }}>
                                    Advance Filter
                                </Text>
                            </View>
                        </View>
                    </View>
                    <ScrollView>


                        <View style={{ paddingLeft: 15, paddingRight: 15 }}>
                            <View>
                                <Text style={{ color: '#888888', fontSize: 17, fontWeight: '500' }} >Pet Category</Text>
                            </View>
                            <FlatList
                                numColumns={3}
                                contentContainerStyle={{
                                    marginTop: 0
                                }}
                                data={petcategory}
                                renderItem={({ item }) => <Item item={item} changvaluefun={changvaluefun} />}
                                keyExtractor={(item, index) => index}
                            />
                        </View>
                        <View style={{ paddingLeft: 15, paddingRight: 15, marginTop: 10 }}>
                            <View>
                                <Text style={{ color: '#888888', fontSize: 17, fontWeight: '500' }} >Pet Breed</Text>
                            </View>
                            <FlatList
                                numColumns={3}
                                contentContainerStyle={{
                                    marginTop: 0
                                }}
                                data={PetBreed}
                                renderItem={({ item }) => <Item1 item={item} changvaluebreedfun={changvaluebreedfun} />}
                                keyExtractor={(item, index) => index}
                            />
                        </View>
                        <View style={{ paddingLeft: 15, paddingRight: 15, marginTop: 10 }}>
                            <View>
                                <Text style={{ color: '#888888', fontSize: 17, fontWeight: '500' }} >Product Category</Text>
                            </View>
                            <FlatList
                                numColumns={3}
                                contentContainerStyle={{
                                    marginTop: 0
                                }}
                                data={ProductCategory}
                                renderItem={({ item }) => <Item2 item={item} changvaluepcatfun={changvaluepcatfun} />}
                                keyExtractor={(item, index) => index}
                            />
                        </View>
                        <View style={{ paddingLeft: 15, paddingRight: 15, marginTop: 10 }}>
                            <View>
                                <Text style={{ color: '#888888', fontSize: 17, fontWeight: '500' }} >Pet’s Allergy</Text>
                            </View>
                            <FlatList
                                numColumns={2}
                                contentContainerStyle={{
                                    marginTop: 0
                                }}
                                data={PetAllergy}
                                renderItem={({ item }) => <Item3 item={item} changvalueallergyfun={changvalueallergyfun} />}
                                keyExtractor={(item, index) => index}
                            />
                        </View>
                    </ScrollView>
                    <View style={{ flexDirection: "row", paddingRight: 15, paddingLeft: 15, padding: 10 }}>
                        <TouchableOpacity style={{ borderWidth: 1, flex: 1, padding: 10, borderRadius: 8, borderColor: "#F5F5F5" }} onPress={() => {
                            props.closeimagepopup(1, '')
                        }}>
                            <Text style={{ fontSize: 18, fontWeight: "700", color: "#1F272D", textAlign: "center" }}>
                                Clear
                            </Text>
                        </TouchableOpacity>
                        <View style={{ flex: 0.1 }} />
                        <TouchableOpacity style={{  flex: 1, }} onPress={()=>navigation.navigate('CartScreen')}>
                            <LinearGradient
                                angle={10}
                                useAngle={true}
                                colors={['#F14647', '#F96D20']}
                                style={{
                                    padding: 10, borderRadius: 8, 
                                }}>
                                <Text style={{ fontSize: 18, fontWeight: "700", color: "#ffffff", textAlign: "center", }}>
                                Apply Filter
                            </Text>
                            </LinearGradient>
                            
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </Modal>
    </View>
}
const Item = ({ item, changvaluefun }) => (

    (item.check == 1) ? (

        <TouchableOpacity onPress={() => { changvaluefun(item.name) }} >

            <LinearGradient
                angle={10}
                useAngle={true}
                colors={['#F14647', '#F96D20']}
                style={{
                    margin: 5,
                    padding: 10,
                    backgroundColor: "#F96D20",
                    borderRadius: 4,
                    alignItems: "center",
                    justifyContent: "center", paddingLeft: 15, paddingRight: 15, marginTop: 10,
                    width: 'auto'
                }}>
                <Text style={{
                    color: '#ffffff',
                    lineHeight: 20,
                    fontSize: 12,
                    fontWeight: '500'

                }} >{item.name}</Text>
            </LinearGradient>

        </TouchableOpacity>

    ) : (
        <TouchableOpacity onPress={() => { changvaluefun(item.name) }} style={{
            margin: 5,
            padding: 10,
            backgroundColor: "#F7F8F9",
            borderRadius: 4,
            alignItems: "center",
            justifyContent: "center", paddingLeft: 15, paddingRight: 15, marginTop: 10,width: 'auto'
        }} >
            <Text style={{
                color: '#1F272D',
                lineHeight: 20,
                fontSize: 12,
                fontWeight: '500'

            }} >{item.name}</Text>
        </TouchableOpacity>
    )


);
const Item1 = ({ item, changvaluebreedfun }) => (

    (item.check == 1) ? (

        <TouchableOpacity onPress={() => { changvaluebreedfun(item.name) }}>

            <LinearGradient
                angle={10}
                useAngle={true}
                colors={['#F14647', '#F96D20']}
                style={{
                    margin: 5,
                    padding: 10,
                    backgroundColor: "#F96D20",
                    borderRadius: 4,
                    alignItems: "center",
                    justifyContent: "center", paddingLeft: 15, paddingRight: 15, marginTop: 10,
                    width: 'auto'
                }}>
                <Text style={{
                    color: '#ffffff',
                    lineHeight: 20,
                    fontSize: 12,
                    fontWeight: '500'

                }} >{item.name}</Text>
            </LinearGradient>

        </TouchableOpacity>

    ) : (
        <TouchableOpacity onPress={() => { changvaluebreedfun(item.name) }} style={{
            margin: 5,
            padding: 10,
            backgroundColor: "#F7F8F9",
            borderRadius: 4,
            alignItems: "center",
            justifyContent: "center", paddingLeft: 15, paddingRight: 15, marginTop: 10,
            width: 'auto'
        }} >
            <Text style={{
                color: '#1F272D',
                lineHeight: 20,
                fontSize: 12,
                fontWeight: '500'

            }} >{item.name}</Text>
        </TouchableOpacity>
    )


);
const Item2 = ({ item, changvaluepcatfun }) => (

    (item.check == 1) ? (

        <TouchableOpacity onPress={() => { changvaluepcatfun(item.name) }} >
            <LinearGradient
                angle={10}
                useAngle={true}
                colors={['#F14647', '#F96D20']}
                style={{
                    margin: 5,
                    padding: 10,
                    backgroundColor: "#F96D20",
                    borderRadius: 4,
                    alignItems: "center",
                    justifyContent: "center", paddingLeft: 15, paddingRight: 15, marginTop: 10,
                    width: 'auto'
                }}>
                <Text style={{
                    color: '#ffffff',
                    lineHeight: 20,
                    fontSize: 12,
                    fontWeight: '500'

                }} >{item.name}</Text>
            </LinearGradient>

        </TouchableOpacity>

    ) : (
        <TouchableOpacity onPress={() => { changvaluepcatfun(item.name) }} style={{
            margin: 5,
            padding: 10,
            backgroundColor: "#F7F8F9",
            borderRadius: 4,
            alignItems: "center",
            justifyContent: "center", paddingLeft: 15, paddingRight: 15,marginTop: 10,
            width: 'auto'
        }} >
            <Text style={{
                color: '#1F272D',
                lineHeight: 20,
                fontSize: 12,
                fontWeight: '500'

            }} >{item.name}</Text>
        </TouchableOpacity>
    )


);
const Item3 = ({ item, changvalueallergyfun }) => (

    (item.check == 1) ? (

        <TouchableOpacity onPress={() => { changvalueallergyfun(item.name) }} >
            <LinearGradient
                angle={10}
                useAngle={true}
                colors={['#F14647', '#F96D20']}
                style={{
                    margin: 5,
                    padding: 10,
                    backgroundColor: "#F96D20",
                    borderRadius: 4,
                    alignItems: "center",
                    justifyContent: "center", paddingLeft: 15, paddingRight: 15,marginTop: 10,
                    width: 'auto'
                }}>
                <Text style={{
                    color: '#ffffff',
                    lineHeight: 20,
                    fontSize: 12,
                    fontWeight: '500'

                }} >{item.name}</Text>
            </LinearGradient>



        </TouchableOpacity>

    ) : (
        <TouchableOpacity onPress={() => { changvalueallergyfun(item.name) }} style={{
            margin: 5,
            padding: 10,
            backgroundColor: "#F7F8F9",
            borderRadius: 4,
            alignItems: "center",
            justifyContent: "center", paddingLeft: 15, paddingRight: 15, marginTop: 10,
            width: 'auto'
        }} >
            <Text style={{
                color: '#1F272D',
                lineHeight: 20,
                fontSize: 12,
                fontWeight: '500'

            }} >{item.name}</Text>
        </TouchableOpacity>
    )
);
export const StylesFirst = StyleSheet.create({
    footerdv: {
        width: "100%",
        height: 60,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottomButtons: {
        width: "20%",
        alignItems: 'center',
    },
    footerText: {
        color: '#000000',
        fontWeight: 'bold',
        alignItems: 'center',
        fontFamily: 'Poppins-Regular', fontSize: 20,
    },
    photoview: {
        flexDirection: 'row-reverse',
        paddingTop: 25,
        paddingBottom: 25,
        justifyContent: "space-around"
        // alignSelf:"center"
    },
    photosec: {
        // width:"50%",
        // height:"100%",
        // alignItems:"center"
    },
    photoicon: {
        width: 60,
        height: 60,
    },
    phottext: {
        color: "#000000",
        fontSize: 20,
        fontWeight: "500",
        textAlign: "center"
    },
})


export default FilterScreen;