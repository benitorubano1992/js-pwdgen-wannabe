//input data
const userName=prompt("Please,enter the username");
const lastName=prompt("Please ,enter the surname");
const bestCol=prompt("Please,enter your favorite color")
const boxPassword=document.getElementById("info-password");
const number=21;
console.log(boxPassword);
const result=`<p>username: ${userName}</p>
            <p>lastname: ${lastName}</p>
            <p>Favorite Color:${bestCol}</p>
            <p class="user-password">Password:${userName}${lastName}${bestCol}${number}</p>
            `;
//output

boxPassword.innerHTML=result;


