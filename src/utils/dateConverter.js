import moment from "moment";

function applyISOMask(date){
    if(date){
        return moment(date).locale('en').format('MM/DD/YYYY');
    }
    return undefined;
}

export default {
    applyISOMask
}