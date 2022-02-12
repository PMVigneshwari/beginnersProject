fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => 
    {
    var ul = document.getElementById("ul-list");
    json.forEach(item => {
    console.log(json);
    //document.write(json);
    });
    })
    .catch(err => console.error(err));
