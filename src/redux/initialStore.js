import { createStore } from 'redux'
import reducer from './reducer/reducer'

let store = localStorage.getItem('reduxState') 
? JSON.parse(localStorage.getItem('reduxState'))
: {}

console.log(store)

const initialStore = {
    
    notes: store.length > 0 ? store.notes : [
        {
            title: "Zakupy",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper nec nisl sit amet tincidunt. Nam felis orci, egestas in dignissim ac, volutpat et mauris. Suspendisse sed tellus quam. Vestibulum sed erat nunc. Morbi nec dui erat. Fusce bibendum enim sed massa condimentum, at tincidunt ligula iaculis. Suspendisse non mi at metus efficitur rhoncus ac vitae nisi. ",
            color: "#ff6b75"
        },
        {
            title: "Gdzie się udać",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper nec nisl sit amet tincidunt. Nam felis orci, egestas in dignissim ac, volutpat et mauris. Suspendisse sed tellus quam. Vestibulum sed erat nunc. Morbi nec dui erat. Fusce bibendum enim sed massa condimentum, at tincidunt ligula iaculis. Suspendisse non mi at metus efficitur rhoncus ac vitae nisi. ",
            color: "#b4cc9b"
        },
        {
            title: "Daleka droga",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper nec nisl sit amet tincidunt. Nam felis orci, egestas in dignissim ac, volutpat et mauris. Suspendisse sed tellus quam. Vestibulum sed erat nunc. Morbi nec dui erat. Fusce bibendum enim sed massa condimentum, at tincidunt ligula iaculis. Suspendisse non mi at metus efficitur rhoncus ac vitae nisi. ",
            color: "#3175ff"
        },
    ],
    colors: [
        {
            name: "Brzoskwinia",
            value: "#ff6b75"
        },
        {
            name: "Groszek",
            value: "#b4cc9b"
        },
        {
            name: "Niebieski",
            value: "#3175ff"
        }
    ]
}

export const storeDeclaration = createStore( reducer, initialStore );
