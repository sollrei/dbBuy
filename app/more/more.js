import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    Alert,
    SwipeableListView
} from 'react-native';
import {styles} from '../styleSheet';


export default class More extends Component {
    constructor (props) {
        super(props);

        let ds = SwipeableListView.getNewDataSource();
        this.state = {
            dataSource: ds.cloneWithRowsAndSections([{
                'Section 0': {
                    'Row 0': {
                        id: '0',
                        text: 'row 0 text'
                    },
                    'Row 1': {
                        id: '1',
                        text: 'row 1 text'
                    }
                }
            }, ['Section 0'], [['row 0']] ])
        }
    }

    render () {
        return (
            <View style={styles.moreWrap}>
                <View style={[styles.moreRow, styles.line]}>
                    <Image
                        style={styles.moreImage}
                        source={require('image!icon_club')}
                    />
                    <Text style={styles.moreTitle}>采购圈12</Text>
                </View>
                <View style={[styles.moreRow, {marginBottom: 32}]}>
                    <Image
                        style={styles.moreImage}
                        source={require('image!icon_place')}
                    />
                    <Text style={styles.moreTitle}>广场</Text>
                </View>
                <View style={styles.moreRow}>
                    <Image
                        style={styles.moreImage}
                        source={require('image!icon_tender')}
                    />
                    <Text style={styles.moreTitle}>微招标</Text>
                    <Text style={styles.moreWait}>敬请期待</Text>
                </View>
                <SwipeableListView
                    maxSwipeDistance={100}
                    renderQuickActions={
                        /* $FlowFixMe(>=0.31.0) */
                        (rowData, sectionID, rowID) => {
                            /* $FlowFixMe(>=0.31.0) */
                            return (<View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                            }}>
                                <TouchableHighlight onPress={() => {
                                    Alert.alert('Tips', 'You could do something with this row: ');
                                }}>
                                    <Text>Remove</Text>
                                </TouchableHighlight>
                            </View>);
                        }}
                    dataSource={this.state.dataSource}
                    renderRow={(d) => {
                        return <View style={{backgroundColor: 'red', height: 40}}><Text>helo</Text></View>
                    }}
                />
            </View>
        )
    }
}