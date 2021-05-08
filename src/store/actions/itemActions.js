import {API_URL} from "../../config";

export function setItems(item){
    return function(dispatch){
        dispatch({
            type: "SET_ITEMS",
            items: item
        })
    }
}

export function getItems(){
    return (dispatch) => {
        fetch(API_URL + "/item")
        .then((response) => response.json())
        .then((json) => dispatch({
            type: "SET_ITEMS",
            items: json
        }))
        .catch(function (err) {
            alert("ERROR: " + err);
        })
    }
}

