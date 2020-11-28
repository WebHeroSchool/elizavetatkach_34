
const url ='http://api.github.com/users/defunkt'

fetch(url) 
.then(res=> res.json())
.then(json=> {
        console.log(json.avatar_url);
        console.log(json.name);
        console.log(json.bio);
        console.log(json.html_url)

        const name = json.name;
        const bio = json.bio;
        const photo = document.getElementById("photo").src='https://avatars0.githubusercontent.com/u/2?v=4';
        
        
        try{
          document.getElementById("name").innerHTML = name;
          document.getElementById("bio").innerHTML = bio;
          document.getElementById("photo") = photo;
        }

        catch (err) {
          document.getElementById("photo").innerHTML = "Информация о пользователе не доступна";
        }        
      })
 

  



   