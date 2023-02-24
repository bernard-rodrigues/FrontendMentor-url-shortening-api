import axios from 'axios'

const headers = {
    "Content-Type": "application/json",
    "apikey": import.meta.env.VITE_REBRANDLY_API_KEY
}

export async function shorten(url: string){
    const endpoint = "https://api.rebrandly.com/v1/links";
    
    const linkRequest = {
        destination: url,
        domain: { fullName: "rebrand.ly" },
        // slashtag: "rbycok.py"
        //, title: "Rebrandly YouTube channel"
    }
    
    const apiCall = {
        method: 'post',
        url: endpoint,
        data: linkRequest,
        headers: headers
    }

    const apiResponse = await axios(apiCall);
    const link = apiResponse.data;
    return link.shortUrl;
}