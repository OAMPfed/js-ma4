let container = document.createElement('div');
    container.setAttribute('class', 'container');
    document.body.appendChild(container);


let content = fetch('https://jsonplaceholder.typicode.com/todos')
.then(function(result){
    return result.json()
})

.then(function(resultJSON){
    resultJSON.forEach(todoCard => {    
      let card = document.createElement('div');
      card.setAttribute('class', 'card');        
      let h1 = document.createElement('h1');
      h1.textContent = " Title: " + todoCard.title;
      let p1 = document.createElement('p');
      p1.textContent = " User ID: " + todoCard.userId;
      let p2 = document.createElement("p");
      p2.textContent = " ID: " + todoCard.id;
      let p3 = document.createElement('p');
      p3.textContent = " Completed: " + todoCard.completed;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(p3);
       });
});