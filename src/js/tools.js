function $toObj(str){
    if(!str){
        return {};
    }else{
        return JSON.parse(str);
    }
}