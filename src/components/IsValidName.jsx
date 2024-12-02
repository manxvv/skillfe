export default function IsValidName (vname){
    console.log("amarnathasdfjaklsfjasdf");
    const pattern = /^[a-zA-Z\s]*$/;
    if(pattern.test(vname)){
        return true;
    }else{
        return false;
    }
}