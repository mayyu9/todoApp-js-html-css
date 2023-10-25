const form = document.getElementById('toDoFrom');
  let toDo = document.getElementById('toDoInput');
  let ul = document.querySelector('ul');

  const createListItem = (value) => {
    let  li = document.createElement('li');
    
    li.textContent = value;
    // li.style['border'] = '1px solid maroon';
    li.style['padding'] = '5px 5px';
    li.style['backgroundColor'] = 'grey';
    li.style['display'] = 'block';
    li.style['marginBottom'] = '10px';
    // li.appendChild(div);
    return li;
  }

  const creatCheckBox = (value) => {
    // Create checkbox (its a input box of type checkbox).
    var chk = document.createElement('input');  
          
    // Specify the type of element.
    chk.setAttribute('type', 'checkbox');
    chk.setAttribute('id', 'prodName');  // Set an ID.
    chk.setAttribute('value', '');
    chk.setAttribute('name', 'products');

    // Create label for checkbox.
    var lbl = document.createElement('label');  
    lbl.setAttribute('for', 'prodName');

    // Create text node and append it to the label.
    lbl.appendChild(document.createTextNode(createListItem(value)));
    // lbl.appendChild(createListItem(value));
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