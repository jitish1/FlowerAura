import { StyleSheet, Dimensions } from 'react-native';
const size = Dimensions.get('window').width;
import colors from '../config/Colors';

export default StyleSheet.create(
    {

        fontSize16: {
            fontSize: 16
        },
        container: {
            flex: 1,
        },
        imagesliderContainer: {
            width: size,
            height: size
        },
        separator: {
            height: 12,
            width: "100%",
            backgroundColor: colors.greyColor
        },
        namingContainer: {
            flex: 1,
            padding: 10
        },
        title: {

            justifyContent: "center"
        },
        priceRatingReviewsView: {
            flexDirection: "row",
            marginTop: 5,
            marginBottom: 5,
            alignItems: "center"
        },
        priceTextView: {
            flex: 0.4,
            fontSize: 24,
            fontFamily: "Roboto-Regular", marginLeft: -2
        },
        reviewsTextView: {
            flex: 0.25,
            fontSize: 16,
            color: colors.green,
            textDecorationLine: 'underline',
            marginLeft: 10,
            fontFamily: "Roboto-Regular"
        },
        hardcode: {

            marginTop: 8,
            fontSize: 13,
            color: colors.darkergrey,
            fontFamily: "Roboto-Regular"
        },
        checkboxView: {
            flexDirection: 'row', marginTop: 5, marginLeft: -4
        },
        checkboxTextView: {
            marginLeft: 5,
            marginTop: 5,
            fontFamily: "Roboto-Regular",
            fontSize: 16
        },
        greenDots: {
            width: 10,
            height: 10,
            borderRadius: 10 / 2,
            backgroundColor: colors.green,
            marginLeft: 5
        },
        productContainsView: {
            flexDirection: "row",
            marginTop: 8
        },
        productContainsText: {
            fontFamily: "Roboto-Regular",
            fontSize: 16,
            marginLeft: 8,
            marginTop: -5
        }

    });