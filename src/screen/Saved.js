import React from 'react'

import { Col, cssclass, H5, Label, Row } from '../Components/html'

import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { useDispatch, useSelector } from 'react-redux';
import { Propartyapi, PwSelector, updateState } from '../Store/Reducers/PwSlice';
import Carousel from 'react-native-snap-carousel';


export default function Saved() {

    const { LikePropartydata } = useSelector(PwSelector);
    React.useEffect(() => {
        console.log("LikePropartydata>>>", LikePropartydata)
    }, [LikePropartydata])
    const Hendledislikedata = (data) => {
        let newdata = LikePropartydata.filter((i) => i.id != data.id)
        dispatch(updateState({ LikePropartydata: newdata }));
    }
    const PropertyCard = ({ property }) => {
        return (
            <View style={{ backgroundColor: '#f9f9f9', borderRadius: 8, overflow: 'hidden', marginBottom: 16, elevation: 2, }}>
                <View>
                    <Carousel
                        layout="default"
                        data={property.images}
                        renderItem={RenderItem}
                        sliderWidth={(Dimensions.get('window').width) - 20}
                        itemWidth={(Dimensions.get('window').width) - 50}
                        activeSlideAlignment="center"
                    />
                    <View>
                        <Text style={{ textAlign: 'center' }}>{`1/${property.images.length}`}</Text>
                    </View>
                </View>
                <View style={{ padding: 16, }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', }}>{property.name}</Text>
                    <Row>
                        <Col style={{ flex: 1 }}>
                            <Text style={{ color: '#ff6347', fontSize: 16, marginVertical: 8, }}><FontAwesome name="rupee" size={14} color={"#000"} />{property.displayPrice.fixedPrice}</Text>
                        </Col>
                        <Col style={{ flex: 0 }}>
                            <TouchableWithoutFeedback onPress={() => Hendledislikedata(property)}>
                                <View>
                                    <AntDesign name="hearto" size={24} color={"red"} />
                                </View>
                            </TouchableWithoutFeedback>
                        </Col>
                    </Row>
                    <Text >{property.price}</Text>
                    <Text style={{ fontSize: 14, color: '#555', }}>{property.address.fullAddress}</Text>
                    <Text style={{ fontSize: 14, color: '#555', }}>Property Type:{property.propertyType.type}</Text>
                </View>
            </View>
        );
    };
    return (

        <SafeAreaView style={cssclass.safeareaview} edges={['left', 'right']}>
            <View style={{ flex: 1, backgroundColor: '#fff', }}>

                <FlatList
                    data={LikePropartydata}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <PropertyCard property={item} />}
                    contentContainerStyle={{ padding: 16, }}
                />

            </View>

        </SafeAreaView>

    )
}
