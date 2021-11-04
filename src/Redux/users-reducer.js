const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS= 'SET_USERS';
let initialState = {
    users: [

        {id: 1,  photoUrl: 'https://yandex-images.clstorage.net/5BPrj3184/66703fuT4/pF_okDuNdl15hWnSr_fuIv0KoVZJWKi1nlyOqBiU81IebzT9eArfrd4w94ObGMIACJOdeDY7MMzauEuDYVLB8OFe9LhGuD9VZJ14y6oyjj6hZ5laeBHkzeM9x6RlyOMWZhJg1Ywf3-zvcabKBxzCDHQvNfRP58BhQ02TPrhiwJDkC8TBTuWO-H39rdJq5w729OIVOr1UhMQ2tIbd7OzHL46rwBE8DgO839227nL5n-U822nYD08EBStNT864xljsYJeZRUJpSrUtSV0G3q8WDqyCjWppcGDoOuzyrXRQ389qgxx9MNp7MCsRBupWmYcZcPvFFOPnNLlfjR8CHMZgdJRTKSE2NTrhcUFJorKv7nb4Wuli1VD0gM6wrjH0gLOvbrv8eYwC32hDYSJGtpE3RfiTQRSbO5jVD0lLlshS0GhAW4H9NvXeJeX5hY7am5KiVBaN1rXMrBgeSM41vKyz08q_iK3chn94O8UyklbB6_EsuwnME4s4ea-Jwy4gbsg4THcxzcadpik97c1S1pNOHgTypcLdUIyEDriq0QiE149yu-jJDKZLiLcdVj62Vd-FFJMRRGtTnHGf5dvCyJ4k6OynNcUerSI18Vnptm5bPh4sKhWWNQggQPbUAl3g7FvDsqv4_bgOUxjTSaJSstVXCYQ3WcyPP3wZb1VHgqgi5CTMD4mR4hn2KaVl9fLO19KatBplhj3o8LAagMZNBGjf48pnfNnkSoe4B2lO0qZtHxGYe1l0x2sA_YPVAyIwppCIKCcJKTa9ykX5ReVCtvv6PrzahfKZ2ORcQmDWWcC8vyOi17x5ZDYrgHslkpLSZVPFvP-VWBdbmLWXdTfSwJYUzPjTLcVi8b6hVTVlCrabvooQcvHu6WSMiPKEltmADLsbuiNgdbQKW-BbXf66XhlrcYDn8ZjTS7SVQ8UnslyW_DTg-xVptq2ape0BYbJmy84iPFKJtt1g5EROaPJRRAzE',  followed: false, fullName: 'Dimitry', status: 'I am a boss', location: {city: ' Moscow', country: 'Russia'}},
        {id: 2, photoUrl: 'https://avatars.mds.yandex.net/get-zen_doc/3491078/pub_5ed3717ae1c2261710b4e3c8_5ed3914b932a8736ef34a981/scale_1200',followed: true, fullName: 'Boyan', status: 'I am from Serbia', location: {city: ' Belgrade', country: 'Serbia'}},
        {id: 3, photoUrl: 'https://avatars.mds.yandex.net/get-zen_doc/3491078/pub_5ed3717ae1c2261710b4e3c8_5ed3914b932a8736ef34a981/scale_1200',followed: false, fullName: 'Tihon', status: 'hero', location: {city: ' Donetsk', country: 'DPR'}},
]
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

            case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case  SET_USERS: {
            return  { ...state, users: [ ...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS , users})
export default usersReducer;