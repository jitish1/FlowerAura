import React, { Component } from "react";
import { View, Text, ActivityIndicator, ScrollView, CheckBox } from "react-native";
import { fetchAPI } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import ImageSlider from 'react-native-image-slider';
import StarRating from 'react-native-star-rating';
import styles from '../config/Styles';
import colors from '../config/Colors';

let attributes1, attributes2;
const mapStateToProps = state => {
    return {
        _data: state.FaReducer.data,
        isLoading: state.FaReducer.isLoading,
        error: state.FaReducer.errMess,
    }
}

class Listing extends Component {

    static navigationOptions = {
        title: 'Flowers',
    };

    constructor(props) {
        super(props);

        this.state = {
            checkbox1: true,
            checkbox2: false,

        }
    }

    componentDidMount() {
        this.props.dispatch(fetchAPI());
    }

    render() {

        //................Loading Bar.........
        if (this.props.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" />
                </View>
            )
        } else {

            //...............Destructuring Props Data ..............//
            const { images, title, price, reviewRating, attributes, contains, description } = this.props._data.result.product;

            attributes1 = attributes[3].options[6].name + '@ Rs' + attributes[3].options[6].price.split('.')[0].trim();
            attributes2 = attributes[2].options[5].name + '@ Rs' + attributes[3].options[6].price.split('.')[0].trim();


            return (
                <View style={styles.container} >

                    <ScrollView
                        keyboardShouldPersistTaps='handled'
                        showsVerticalScrollIndicator={false} >

                        {/* Image Slider View */}

                        < View style={styles.imagesliderContainer} >
                            <ImageSlider images={images}
                            />
                        </View>
                        {/* End */}

                        <View style={styles.separator} />

                        {/* Naming & Pricing Detalis View */}

                        <View style={styles.namingContainer}>


                            <View style={styles.title} >
                                <Text style={styles.fontSize16}> {title}</Text>
                            </View>

                            <View style={styles.priceRatingReviewsView}>

                                <Text style={styles.priceTextView} > Rs. {price.split('.')[0].trim()}</Text>

                                <View style={{ flex: 0.35 }}>
                                    <StarRating
                                        starSize={25}
                                        disabled={false}
                                        emptyStar={'ios-star-outline'}
                                        fullStar={'ios-star'}
                                        iconSet={'Ionicons'}
                                        maxStars={5}
                                        rating={reviewRating.rating}
                                        fullStarColor={colors.fullStarColor}
                                        emptyStarColor={colors.emptyStarColor}
                                    />
                                </View>

                                <Text numberOfLines={1} style={styles.reviewsTextView}>{reviewRating.reviews} Reviews</Text>

                            </View>

                            <Text style={styles.hardcode}> Make this gift extra special</Text>

                            <View style={styles.checkboxView}>
                                <CheckBox
                                    value={this.state.checkbox2}
                                    onValueChange={() => this.setState({ checkbox2: !this.state.checkbox2 })}
                                />
                                <Text style={styles.checkboxTextView}>{attributes1}</Text>
                            </View>

                            <View style={styles.checkboxView}>
                                <CheckBox
                                    value={this.state.checkbox1}
                                    onValueChange={() => this.setState({ checkbox1: !this.state.checkbox1 })}
                                />
                                <Text style={styles.checkboxTextView}>{attributes2}</Text>
                            </View>

                        </View>

                        <View style={styles.separator} />

                        <View style={styles.namingContainer}>

                            <Text style={styles.hardcode}> Product Contains</Text>

                            {/*  It will handle if more than one Product contains in an array */}

                            {
                                Object.keys(contains).map((key) =>
                                    <View style={styles.productContainsView} key={key}>
                                        <View style={styles.greenDots} ></View>
                                        <Text style={styles.productContainsText}>{contains[key]}</Text>
                                    </View>
                                )
                            }

                            {/* End */}

                            <Text style={styles.hardcode}> Product Description</Text>

                            <Text style={styles.checkboxTextView} > {description}</Text>

                        </View>

                    </ScrollView>

                </View >
            );
        }
    }
}

export default connect(mapStateToProps)(Listing);

