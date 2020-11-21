

fetch('https://api.github.com/users/defunkt') 
.then(res=> res.json())
.then(json=> {
        console.log(json.avatar_url);
        console.log(json.name);
        console.log(json.bio);
        console.log(json.html_url)

        const name = json.name;
        const photo = json.avatar_url;
        const bio = json.bio;
        
        try{
          document.getElementById("name").innerHTML = name;
          document.getElementById("photo").innerHTML = photo;
          document.getElementById("bio").innerHTML = bio;
        }

        catch (err) {
          document.getElementById("photo").innerHTML = "Информация о пользователе не доступна";
        }        
      })





   