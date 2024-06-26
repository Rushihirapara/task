import React from 'react'

import { Col, cssclass, H5, Label, Row } from '../Components/html'

import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { Propartyapi, PwSelector, updateState } from '../Store/Reducers/PwSlice';
import Carousel from 'react-native-snap-carousel';

export default function Home() {
    // ...
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { PropartyapiData ,LikePropartydata} = useSelector(PwSelector);

    const [isfilteron, setisfilteron] = React.useState(false)

    React.useEffect(() => {
        let data = {
            city: 'Gandhinagar',
            projectType: '["pgHostel"]',
            page: 1
        }
        dispatch(Propartyapi(data))
    }, [])
    const Hendlelikedata = (data) => {
        dispatch(updateState({ LikePropartydata: [...LikePropartydata, data] }));
    }
    const RenderItem = ({ item, }) => (
        <View style={{ padding: 5 }}>
            <Image source={{ uri: `https://logiqproperty.blr1.digitaloceanspaces.com/${item}` }} style={{ width: '100%', height: 150, }} />
        </View>
    )

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
                            <TouchableWithoutFeedback onPress={() => Hendlelikedata(property)}>
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
   
    //===========
    return (

        <SafeAreaView style={cssclass.safeareaview} edges={['left', 'right']}>
            <View>
                <Row>
                    <Col>
                        <TouchableWithoutFeedback onPress={() => setisfilteron(!isfilteron)}>
                            <View style={cssclass.btn_primary_round_outline}>
                                <Row>
                                    <Col style={{ flex: 0 }}>
                                        <View style={{ borderRadius: 20, backgroundColor: 'orange', width: 20, }}>
                                            <Text style={{ textAlign: 'center' }}>0</Text>
                                        </View>
                                    </Col>
                                    <Col style={{ flex: 0 }}>
                                        <Text>filter</Text>
                                    </Col>
                                    <Col>
                                        <MaterialIcons name='filter-list' color={'orange'} size={16} />
                                    </Col>
                                </Row>
                            </View>
                        </TouchableWithoutFeedback>
                    </Col>
                    <Col>
                        <View style={cssclass.btn_primary_round_outline}>
                            <Text>Typeof proparty</Text>
                        </View>
                    </Col>
                </Row>
                {isfilteron && (
                    <View style={{ padding: 5 }}>
                        <Row>
                            <Col>
                                <View style={cssclass.btn_primary_round_outline}>
                                    <Text>Apartment</Text>
                                </View>
                            </Col>
                            <Col>
                                <View style={cssclass.btn_primary_round_outline}>
                                    <Text>Bunglow/Vila</Text>
                                </View>
                            </Col>
                            <Col>
                                <View style={cssclass.btn_primary_round_outline}>
                                    <Text>Penthouse</Text>
                                </View>
                            </Col>
                        </Row>
                        <Row style={{ marginVertical: 5 }}>
                            <Col>
                                <View style={cssclass.btn_primary_round_outline}>
                                    <Text>Row house</Text>
                                </View>
                            </Col>
                            <Col>
                                <View style={cssclass.btn_primary_round_outline}>
                                    <Text>Farm house</Text>
                                </View>
                            </Col>
                        </Row>
                        <Row style={{ marginVertical: 5, width: 300, textAlign: "right", justifyContent: "flex-end", }}>
                            <Col>
                                <View style={cssclass.btn_primary_round_outline}>
                                    <Text>cancle</Text>
                                </View>
                            </Col>
                            <Col>
                                <View style={cssclass.btn_primary_round}>
                                    <Text>Apply</Text>
                                </View>
                            </Col>
                        </Row>
                    </View>
                )}
            </View>
            <View style={{ flex: 1, backgroundColor: '#fff', }}>
                <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ddd', }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', }}>{`${PropartyapiData.length} Results found for Buy in Gandhinagar`}</Text>
                </View>
                <FlatList
                    data={PropartyapiData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <PropertyCard property={item} />}
                    contentContainerStyle={{ padding: 16, }}
                />

            </View>
        </SafeAreaView>

    );
}
