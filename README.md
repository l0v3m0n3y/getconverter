# getconverter
JavaScript library for getconverter.org
# main
```js
async function main(){
    const {getconverter} = require('./getconverter');
    const converter= new getconverter();
    let req=await converter.crypto_rates()
    console.log(req)
}
main()
```
