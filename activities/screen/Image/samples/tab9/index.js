import React, { Component } from 'react';
import {
    ListView,
    Platform,
    Slider,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';
import {COLORS,ANIMATION_TYPES,NATIVE_INCOMPATIBLE_ANIMATIONS} from './variable';
import styles from './style';
const AnimatableListView = createAnimatableComponent(ListView);

import { createAnimatableComponent, View, Text } from 'react-native-animatable'; // 1.2.2

export default class ExampleView extends Component {
    constructor(props) {
        super(props);

        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });
        this.state = {
            dataSource: dataSource.cloneWithRowsAndSections(ANIMATION_TYPES),
            duration: 1000,
            toggledOn: false,
        };
    }

    textRef = null;
    handleTextRef = (ref) => {
        this.textRef = ref;
    };

    handleDurationChange = (duration) => {
        this.setState({ duration: Math.round(duration) });
    };

    handleRowPressed = (componentRef, animationType) => {
        componentRef.setNativeProps({
            style: {
                zIndex: 1,
            },
        });
        componentRef.animate(animationType, this.state.duration).then(() => {
            componentRef.setNativeProps({
                style: {
                    zIndex: 0,
                },
            });
        });
        if (this.textRef) {
            this.textRef[animationType](this.state.duration);
        }
    };

    render() {
        const { dataSource, duration, toggledOn } = this.state;
        return (
            <View animation="fadeIn" style={styles.container} useNativeDriver>
                <Text ref={this.handleTextRef} style={styles.title}>Animatable Explorer</Text>

                <View animation="tada" delay={3000}>
                    <Slider
                        style={styles.slider}
                        value={1000}
                        onValueChange={this.handleDurationChange}
                        maximumValue={2000}
                    />
                </View>
                <TouchableWithoutFeedback onPress={() => this.setState({ toggledOn: !toggledOn })}>
                    <Text
                        style={[styles.toggle, toggledOn && styles.toggledOn]}
                        transition={['color', 'rotate', 'fontSize']}
                    >
                        Toggle me!
                    </Text>
                </TouchableWithoutFeedback>
                <Text animation="zoomInDown" delay={700} style={styles.instructions}>
                    Tap one of the following to animate for {duration} ms
                </Text>
                <AnimatableListView
                    animation="bounceInUp"
                    duration={1100}
                    delay={1400}
                    style={styles.listView}
                    dataSource={dataSource}
                    removeClippedSubviews={false}
                    renderSectionHeader={(rows, section) => (
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionHeaderText}>{section}</Text>
                        </View>
                    )}
                    renderRow={(animationType, section, i) => (
                        <AnimationCell
                            animationType={animationType}
                            color={COLORS[i % COLORS.length]}
                            onPress={this.handleRowPressed}
                            useNativeDriver={NATIVE_INCOMPATIBLE_ANIMATIONS.indexOf(animationType) === -1}
                        />
                    )}
                />
            </View>
        );
    }
}

const cellStyles = StyleSheet.create({
    cell: {
        padding: 16,
        marginBottom: 10,
        marginHorizontal: 10,
    },
    name: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});

class AnimationCell extends Component {
    ref = null;
    handleRef = (ref) => {
        this.ref = ref;
    }

    handlePress = () => {
        if (this.ref && this.props.onPress) {
            this.props.onPress(this.ref, this.props.animationType);
        }
    };

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.handlePress}>
                <View
                    ref={this.handleRef}
                    style={[{ backgroundColor: this.props.color }, cellStyles.cell]}
                    useNativeDriver={this.props.useNativeDriver}
                >
                    <Text style={cellStyles.name}>{this.props.animationType}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}