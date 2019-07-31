export default (short = false) => {
    let date = new Date();
    let retDate = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    // return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}_${date.getHours()}:${date.getMinutes()}`;
    if(short) {
        return retDate;
    }
    return  date.getDate() + "." + date.getMonth() + "." + date.getFullYear() + retDate;
}