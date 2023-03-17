function applyDollarMask(amount){
    if(isNaN(amount)){
        return 0;
    }
    return Number(amount).toLocaleString('pt-br', {minimumFractionDigits: 2});
}

function applyDollarMaskWithPrefix(amount){
    if(isNaN(amount)){
        return 0;
    }
    return Number(amount).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}

export default {
    applyDollarMask,
    applyDollarMaskWithPrefix
}