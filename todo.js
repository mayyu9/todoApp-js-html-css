const form = document.getElementById('toDoFrom');
  let toDo = document.getElementById('toDoInput');
  let ul = document.querySelector('ul');

  const createListItem = (value) => {
    let  li = document.createElement('li');

    const checkbox = creatCheckBox();
         
    li.appendChild(checkbox);

    let text = document.createTextNode(value);

    li.appendChild(text);
    // li.innerHTML = value;
    
    li.style['padding'] = '5px 5px';
    li.style['backgroundColor'] = 'grey';
    li.style['display'] = 'block';
    li.style['marginBottom'] = '10px';
    return li;
  }

  const creatCheckBox = () => {
    // Create checkbox (its a input box of type checkbox).
    let checkBox = document.createElement('input');  
          
    // Specify the type of element.
    checkBox.type = "checkbox";
    checkBox.value = "checkbox";
    checkBox.style.opacity = "1";
    checkBox.className = "delete-item right";
    // checkbox.style.position =  "relative";
    checkBox.style.marginRight = '3px'; 
    return checkBox;
  }
  
  const submitHandler = e => {
    e.preventDefault();
    if(toDo.value != null ) {
      let value = toDo.value;
      let liItem = createListItem(value);
    //   ul.insertBefore(liItem, ul.children[0]);
    ul.appendChild(liItem);

    // let toDoList = creatCheckBox(value);
    // ul.appendChild(toDoList);

      toDo.value = '';
      document.getElementById('toDoInput').innerHTML = '';
    } else {
        alert('please enter the todo');
    }
      
  }
  
  form.addEventListener('submit', submitHandler);

  form.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        submitHandler(e);
        // alert('enter press');
    }
  })