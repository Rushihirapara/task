import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLOR } from '../Utils/Theme';
  //-----------
export const Hline = (props) => { return (<View style={[cssclass.hline, props.style]}></View>) }
export const Row = (props) => { return (<View style={[cssclass.row, props.style]}>{props.children}</View>) }
export const Col = (props) => { return (<View style={[cssclass.col, props.style]}>{props.children}</View>) }
  //-----------
export const VHcenter = (props) => { return (<View style={[cssclass.vhCenter, props.style]}>{props.children}</View>) }
export const Shadowbox = (props) => { return (<View style={[cssclass.shodowBox, props.style]}>{props.children}</View>) }
  //-----------
export const H4 = (props) => { return (<Text style={[cssclass.h4, props.style]}>{props.children}</Text>) }
export const H5 = (props) => { return (<Text style={[cssclass.h5, props.style]}>{props.children}</Text>) }
export const H6 = (props) => { return (<Text style={[cssclass.h6, props.style]}>{props.children}</Text>) }
  //-----------
export const Label = (props) => { return (<Text style={[cssclass.Label, props.style]}>{props.children}</Text>) }
  //-----------
export const cssclass = StyleSheet.create({
   test: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      paddingHorizontal: 1,
      paddingVertical: 1,
      marginHorizontal: 1,
      marginVertical: 1,
      borderBottomWidth: 2,
      textAlign: "right",
      textTransform: "capitalize",
      fontStyle: 'italic',
      fontWeight: "600",
      fontSize: 18,
   },
   safeareaview: {
      flex: 1,
   },
   scrollView: {
      flex: 1,
      paddingVertical: 20,
      paddingHorizontal: 10,
   },
   //------------- row col
   row: {
      flexDirection: "row",
      marginHorizontal: -5,
      alignItems: "center",
   },
   col: {
      flex: 1,
      paddingHorizontal: 5,
   },
   //------------- heading
   h4: {
      marginBottom: 6,
      color: COLOR.White1,
      fontSize: 25,
      lineHeight: 30,
      fontWeight: "600",
   },
   h5: {
      marginBottom: 5,
      color: COLOR.White1,
      fontSize: 18,
      lineHeight: 20,
      fontWeight: "600",
   },
   h6: {
      marginBottom: 4,
      color: COLOR.White1,
      fontSize: 16,
      lineHeight: 18,
      fontWeight: "500",
   },
   //-------------------
   Label: {
      fontSize: 15,
      color: COLOR.White1,
   },
   //-----------------
   vhCenter: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
   //------------- alet not data
   nodataWrap: {
      paddingHorizontal: 20,
      paddingTop: 20,
   },
   nodata: {
      marginBottom: 6,
      paddingHorizontal: 10,
      paddingVertical: 10,
      color: COLOR.Black1,
      textAlign: "center",
      borderWidth: 1,
      borderColor: COLOR.info1,
      borderRadius: 3,
      backgroundColor: COLOR.info1,
      overflow: 'hidden',
   },
   //-------------
   shodowBox: {
      padding: 10,
      borderRadius: 10,
      backgroundColor: COLOR.White1,
      shadowColor: COLOR.Black1,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
   },
   hline: {
      height: 1,
      backgroundColor: COLOR.logoorange,
   },
   //------------- form
   input: {
      height: 50,
      fontSize: 15,
      lineHeight: 20,
      color: COLOR.dark1,
      paddingVertical: 3,
      paddingHorizontal: 10,
      borderColor: COLOR.dark1,
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 8,
   },
   input_sm: {
      height: 30,
      fontSize: 13,
      lineHeight: 15,
      color: COLOR.dark1,
      paddingVertical: 3,
      paddingHorizontal: 10,
      borderColor: COLOR.dark1,
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 8,
   },
   errormsg: {
      color: COLOR.Red,
   },
   //-------- button
   btn_primary_round: {
      paddingHorizontal: 15,
      paddingVertical: 10,
      fontSize: 18,
      color: COLOR.Black1,
      alignItems: "center",
      textTransform: 'uppercase',
      justifyContent: "center",
      textAlign: "center",
      borderRadius: 20,
      backgroundColor: COLOR.logoorange,
      overflow: 'hidden',
   },
   btn_denger_round: {
      paddingHorizontal: 15,
      paddingVertical: 10,
      fontSize: 18,
      color: COLOR.White1,
      alignItems: "center",
      textTransform: 'uppercase',
      justifyContent: "center",
      textAlign: "center",
      borderRadius: 20,
      backgroundColor: COLOR.Red,
      overflow: 'hidden',
   },
   btn_primary_round_outline: {
      paddingHorizontal: 15,
      paddingVertical: 10,
      fontSize: 18,
      color: COLOR.Black1,
      alignItems: "center",
      textTransform: 'uppercase',
      justifyContent: "center",
      textAlign: "center",
      borderRadius: 20,
      borderWidth: 1,
      borderColor: COLOR.logoorange,
      overflow: 'hidden',
   },
   btn_primary_round_sm: {
      paddingHorizontal: 15,
      paddingVertical: 5,
      fontSize: 16,
      color: COLOR.Black1,
      alignItems: "center",
      textTransform: 'uppercase',
      justifyContent: "center",
      textAlign: "center",
      borderRadius: 15,
      backgroundColor: COLOR.logoorange,
      overflow: 'hidden',
   },
   btn_dark_round_sm: {
      paddingHorizontal: 15,
      paddingVertical: 5,
      fontSize: 16,
      color: COLOR.Black1,
      alignItems: "center",
      textTransform: 'uppercase',
      justifyContent: "center",
      textAlign: "center",
      borderRadius: 15,
      backgroundColor: COLOR.dark1,
      overflow: 'hidden',
   },
});
