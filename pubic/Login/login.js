async function login(e) {
    e.preventDefault();
    let loginDetails = {
        email: e.target.email.value,
        password: e.target.password.value
    };
    console.log(loginDetails);
    try{
        const res = await axios.post('http://localhost:3000/user/login', loginDetails);
        if(res.status === 200){
            alert(res.data.message);
            window.localStorage.setItem('token', res.data.token);
            window.location.href = '../Expense/index.html';
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

