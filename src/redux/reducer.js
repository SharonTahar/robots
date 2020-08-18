// import {USERS} from './action'
import {TEXT} from './action'

let initText = {
    searchText: '',
}

export const getText = (state=initText, action={}) =>{
    switch (action.type) {
        case TEXT:
        return {...state, searchText:state.payload}
    default:
        return {...state}
    }
}



// let initUsers = {
//     users: [],
// }

// export const findUsers = (state=initUsers, action={}) =>{
//     switch (action.type) {
//         case: USERS,
//         return {...state, users:'right'}
//     }
// }

