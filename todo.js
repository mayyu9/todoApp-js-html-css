const form = document.getElementById('toDoFrom');
  let toDo = document.getElementById('toDoInput');
  let ul = document.querySelector('ul');
  let trashBtn;
  let index = 1;

  const createListItem = (value) => {
    let  li = document.createElement('li');

    const checkbox = creatCheckBox(index);
         
    li.appendChild(checkbox);

    let text = document.createTextNode(value);

    li.appendChild(text);
    // li.innerHTML = value;
    
    li.style['padding'] = '5px 5px';
    li.style['backgroundColor'] = 'grey';
    li.style['display'] = 'block';
    li.style['marginBottom'] = '10px';
    // li.style['width'] = "500px";
    li.style['borderRadius'] = "5px";
    // li.style['textAlign'] = "left";

    const trashIcon = createTrashButton();
    li.appendChild(trashIcon);
    return li;
  }

  const createTrashButton = () => {
    const trashBtn = document.createElement("i");
    trashBtn.setAttribute("class", "fas fa-trash");
    trashBtn.setAttribute("id", "trash-btn");
    trashBtn.setAttribute('color', 'red');

    return trashBtn;
  };

  const creatCheckBox = () => {
    // Create checkbox (its a input box of type checkbox).
    let checkBox = document.createElement('input');  
          
    // Specify the type of element.
    checkBox.type = "checkbox";
    checkBox.value = "checkbox";
    checkBox.style.opacity = "1";
    checkBox.className = "check-item";
    checkBox.id = `check-item-${index}`;
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

      trashBtn = document.getElementById('trash-btn');
      trashBtn.addEventListener('click', (e) => {
        // this.removeChild(e.target);
        alert('trash button clicked:', e.target);
      })

      toDo.value = '';
      document.getElementById('toDoInput').innerHTML = '';
      index++;
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

  ul.addEventListener('click', function(e) {
    // alert('e.target: ', e.target);
    this.removeChild(e.target);
  })
