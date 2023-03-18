function applyDollarMask(amount){
    if(isNaN(amount)){
        return 0;
    }
    return Number(amount).toLocaleString('en-US', {minimumFractionDigits: 2});
}

function applyDollarMaskWithPrefix(amount){
    if(isNaN(amount)){
        return 0;
    }
    return Number(amount).toLocaleString('en-US', {style: 'currency', currency: 'USD'});
}

export default {
    applyDollarMask,
    applyDollarMaskWithPrefix
}