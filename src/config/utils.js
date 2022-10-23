/* localStorage 存取数据 */
export function setItem(key, value){
    if(typeof value === 'object'){
        value = JSON.stringify(value);
    }
    window.localStorage.setItem(key, value);
}

