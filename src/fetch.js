
export const getPrice = async (carParams) => {
    // console.log(carParams)
    try {
        var url = new URL("http://127.0.0.1:5000");
        Object.keys(carParams).forEach(param=>{
            url.searchParams.append(param, carParams[param]);
        })
        // fetch(url)
        console.log(url.href)
        const resp = await fetch(url.href)
        const json = await resp.json()
        console.log(json?.price)
        return json?.price
    }catch(e){
        console.log("Error", e)
        return "0"
    }
}