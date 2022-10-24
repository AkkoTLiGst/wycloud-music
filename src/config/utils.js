/* localStorage 存取数据 */
export function setItem(key, value){
    if(typeof value === 'object'){
        value = JSON.stringify(value);
    }
    window.localStorage.setItem(key, value);
}

/*秒和毫秒转换分钟*/
// val1: 需要转换的秒或毫秒
// val2: 是毫秒还是秒
export function getMin(val1, val2){
    let num, int, dec;
    if(val2 === 60000){
        num = val1 / val2;
        int = Math.trunc(num);
        dec = (Math.round((num - int) * 100) / 100 + "").slice(2, 4);
        if(dec.length < 2){
            dec = dec + '0';
        }
    }

    if(val2 === 60){
        if(val1 < 60){
            int = 0;
            dec = Math.floor(val1);
        }else {
            int = Math.floor(val1 / val2);
            dec = Math.floor(val1 - (int * 60));
        }
    }
    return {int, dec}

    /*if(int > 10){
        return (int + ':' + dec);
    }else{
        if(dec < 10){
            return ('0' + int + ':0' + dec);
        }else {
            return ('0' + int + ':' + dec);
        }
    }*/
}
