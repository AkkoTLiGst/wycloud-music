export default {
    namespaced: true,
    mutations: {
        changeThemeColor(state, value){
            if(value === 1){
                state.themeColor = 'var(--themeColorBlack)';
                state.colorCode = 1;
            }
            if(value === 2){
                state.themeColor = 'var(--themeColorRed)';
                state.colorCode = 2;
            }
            if(value === 3){
                state.themeColor = 'var(--themeColorPink)';
                state.colorCode = 3;
            }
            if(value === 4){
                state.themeColor = 'var(--themeColor)';
                state.colorCode = 4;
            }
            if(value === 5){
                state.themeColor = 'var(--themeColorGreen)';
                state.colorCode = 5;
            }
            if(value === 6){
                state.themeColor = 'var(--themeColorMidnightBlue)';
                state.colorCode = 6;
            }
        }
    },
    state: {
        themeColor: 'var(--themeColor)',
        colorCode: 4
    }
}