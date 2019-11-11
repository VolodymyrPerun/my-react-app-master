import store from "../../../redux/store";


const FriendsCount = (props) => {
    props = store.getState().sidebar.friends
    let sum = 0;
    props.forEach(function (user) {
        sum += (user.id).length
    })
    return (sum);
}

export default FriendsCount;
