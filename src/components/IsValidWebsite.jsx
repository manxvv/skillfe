export default function IsValidWebsite(website) {
    console.log("amarnathprajapatiasfasdfghjsfasdf");
    const urlPattern = /^([\w\d.-]+)\.([a-z]{2,})(:\d{1,5})?\/?([^\s]*)$/i;
    if (urlPattern.test(website)) {
        return true;
    } else {
        return false;
    }
};

