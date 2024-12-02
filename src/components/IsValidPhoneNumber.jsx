export default function IsValidPhoneNumber(phoneNumber) {
    console.log("amarnathprajapatiasfasfasdf");
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    if (phoneRegex.test(phoneNumber)) {
        return true;
    } else {
        return false;
    }
}