class getconverter{
    constructor(){
        this.api = "https://getconverter.org/api/v1"
        this.headers={"Accept":"application/json","Accept-Charset":"UTF-8","Host":"getconverter.org","User-Agent":"Ktor client"}
    }
    async crypto_rates(){
        let req=await fetch(`${this.api}/rates/default/`,{method:"GET",headers: this.headers});
        return req.json();
    }
}
module.exports = {getconverter};