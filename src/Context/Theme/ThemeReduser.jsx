export const ThemeReduser = (state , action) =>{
    switch(action.type){
        case "LIGHT_MODE":
            return{
                ...state,
                darkMode: false,
            }
        case "DARK_MODE":
            return{
                ...state,
                darkMode: true,
            }
    }
}




