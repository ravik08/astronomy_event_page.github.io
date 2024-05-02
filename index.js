let date1=document.getElementById("date");
let image=document.getElementById("image");
let title=document.getElementById("title");
let detail=document.getElementById("detail");
let copyright=document.getElementById("copyright");

 fetch('https://api.nasa.gov/planetary/apod?api_key=WiCGdjvn5NG2fJoQOj3Y9OmwmvrtGe6aUr0bbI5p')
   .then(response => {
     // Check if the request was successful
     if (!response.ok) {
       throw new Error('Network response was not ok');
     }
     // Parse the response as JSON
     return response.json();
   })
   .then(data => {
     // Handle the JSON data
     image.src=data.hdurl;
     date1.innerHTML=`${data.date.slice(8,10)}-${data.date.slice(5,7)}-${data.date.slice(0,4)}`;
     title.innerHTML=data.title;
     detail.innerHTML=data.explanation;
     copyright.innerHTML=`© ${data.copyright}`;
     console.log(data);
   })
   .catch(error => {
     // Handle any errors that occurred during the fetch
     console.error('Fetch error:', error);
   });