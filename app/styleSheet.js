import { StyleSheet, Dimensions } from 'react-native';

let {height: screenHeight, width: screenWidth} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3'
    },
    // global
    darkColor: {
        color: '#666'
    },
    line: {
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1
    },
    // index
    topWrap: {
        flex: 1
    },
    topImage: {
        width: screenWidth,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    topText: {
        fontSize: 30,
        color: '#fff',
        backgroundColor: 'transparent'
    },
    searchWrap: {
        backgroundColor: '#fff',
        marginBottom: 16
    },
    search: {
        marginTop: -42,
        height: 56,
        backgroundColor: '#fff',
        borderRadius: 4,
        bottom: 0,
        flex: 1,
        marginLeft: 14,
        marginRight: 14,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {
            height: 2,
            width: 0
        }
    },
    input: {
        height: 56,
        paddingLeft: 10
    },
    iconWrap: {
        flex: 1,
        flexDirection: 'row',
        height: 92,
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
    iconItem: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 14,
        paddingRight: 14
    },
    iconImage: {
        marginBottom: 8
    },
    // hot list
    hotWrap: {
        backgroundColor: '#fff'
    },
    hotTitle: {
        height: 46,
        paddingLeft: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#f3f3f3'
    },
    hotLi: {
        height: 46,
        paddingLeft: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#f3f3f3'
    },
    hotText: {
        lineHeight: 45,
        fontSize: 16
    },
    // cate
    cateRow: {
        paddingTop: 19,
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1
    },
    cateTitle: {
        paddingLeft: 16,
        fontSize: 16,
        marginBottom: 7
    },
    cateView: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 8
    },
    cateItemWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 35
    },
    cateItem: {
        marginHorizontal: 16
    },
    // more
    moreWrap: {
        flex: 1,
        marginTop: 64,
        backgroundColor: '#f3f3f3'
    },
    moreRow: {
        height: 60,
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingLeft: 12,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    moreImage: {
        marginRight: 12
    },
    moreTitle: {
        fontSize: 17,
        lineHeight: 59
    },
    moreWait: {
        fontSize: 15,
        color: '#0078FF',
        position: 'absolute',
        right: 12,
        lineHeight: 59
    },
    // chat
    chatWrap: {
        backgroundColor: '#f3f3f3',
        flex: 1
    },
    chatNav: {
        paddingTop: 30,
        paddingBottom: 8,
        alignItems: 'center'
    },
    chatAvatar: {
        height: 36,
        width: 36,
        marginRight: 12
    },
    chatList: {
        backgroundColor: '#fff',
        flex: 1
    },
    chatMessage: {
        flexDirection: 'row',
        height: 72,
        alignItems: 'center',
        paddingHorizontal: 12
    },
    chatTitle: {
        fontSize: 17,
        marginBottom: 7
    },
    chatMsg: {
        color: '#999'
    },
    chatDetailWrap: {
        flex: 1
    }
});