import moment from "moment";

function applyISOMask(date){
    if(date){
        return moment(date).locale('pt-br').format('YYYY-MM-DD');
    }
    return undefined;
}

export default {
    applyISOMask
}