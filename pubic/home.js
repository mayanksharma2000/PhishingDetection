async function checkUrl(e) {
    e.preventDefault();
    let urlDetails = {
        url: e.target.url.value
    };
    console.log(urlDetails);
    try{
        const token = localStorage.getItem('token');
        const res = await axios.post('http://localhost:3000/checkUrl/', urlDetails, { headers: { 'Authorization': token}});
        if(res.status === 200){
            if(res.data.isSecure){
                alert('URL is Safe');
            }
            else{
                alert('URL is Not Safe');
            }
            console.log(res.data);
        }
        else{
            console.log(res);
            throw new Error(res);
        }
    }
    catch(error) {
        document.body.innerHTML += `<h1>Error: ${error.message}</h1>`;
        console.log(error);
    }
}

