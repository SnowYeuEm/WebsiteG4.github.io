/*console.log(localStorage.getItem('users'));


function emailIsValid(email){
    return /^[^\s@]+[^\s@]+\.[^\s@]+$/.test(email)
}

function save(){
    let username = document.getElementById('username').value;
    let email= document.getElementById('email').value;
    let password = document.getElementById('password1').value;

    console.log(username, email, password);

    if(username && email && password){
        let user ={
            username: username,
            email: email,
            password: password,
        };
        console.log(user);

        let users = [];
        users.push({
            user,
        });
        
        let tableContent = `<tr >
            <td>#</td>
            <td>User Name</td>
            <td>Mail Address</td>
            <td>Password</td>
        </tr>`;

        users.forEach((user, index=0) => {
            index++;
            tableContent += `<tr>
                <td>${index}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
            </tr> `;
        });

        
    }
}*/

function signup(e){
    let username=document.getElementById('username').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password1').value;
    console.log(username, email, password);
    
    let user ={
        username: username,
        email: email,
        password: password,
    }
    

    var json = JSON.stringify(user);
    localStorage.setItem(username,json);
    alert('Chúc Mừng bạn đã đăng ký thành công!');
}
