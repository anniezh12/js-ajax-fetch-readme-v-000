const app = "I don't do much.";
const token = 'Token'
$(document).ready(function(){
  fetch('https://api.github.com/user/repos',{
    header: {  Authorization: 'token ${token}'
  }
  }).then(res => res.json()).then(json => console.log(json));
});
