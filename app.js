

var list = document.getElementById("list")

 document.getElementById("todo1").disable= true


function addtodo(){
     var item = document.getElementById("todo1")
      var li  = document.createElement('li')
      var litext = document.createTextNode(item.value)
      li.appendChild(litext)
     
      
      
    

    //  delete button ///
      var delbtn = document.createElement("button");
      var deltext =  document.createTextNode("delete");
      delbtn.setAttribute("class","btn btn-danger");
    
      delbtn.setAttribute("onclick","deleteitem(this)")
      delbtn.appendChild(deltext)
 
    //   Edit button//

    var  editbtn = document.createElement("button");
    var edittext = document.createTextNode("Edit")
    editbtn.setAttribute("class","btn btn-info");
    editbtn.setAttribute("onclick","edititem(this)")
    editbtn.appendChild(edittext)



      li.appendChild(delbtn)
      li.appendChild(editbtn)      
      

      list.appendChild(li)
      item.value = ""

     
}


function deleteitem(e){
     e.parentNode.remove()


}

function deleteall(){
    list.innerHTML = ""
}

function edititem(e){
  var val = e.parentNode.firstChild.nodeValue
  var edit = prompt("Enter edit value", val)
  e.parentNode.firstChild.nodeValue = edit
  
}