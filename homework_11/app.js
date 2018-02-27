var rootNode = document.getElementById("root");
var doc = document;

// Your code goes here

const empty = "This folder is empty";
let materialIcon = "material-icons";
let folderIcon = 'folder';
let folderOpenIcon = 'folder_open';
let fileIcon = "insert_drive_file";

function createList(parentNode, className){
   let ul = doc.createElement('ul');
   ul.className = className;
   parentNode.appendChild(ul);
   return ul;
}

function folderClick(click){
   if (click.target === this || click.target.parentElement === this){
      let container = this.nextSibling;
      let icon = this.childNodes[0];
      if(hasClass(container, 'open')){
         container.classList.remove('open');
         icon.innerHTML = folderIcon;
      } else {
         container.classList.add('open');
         icon.innerHTML = folderOpenIcon;
      }
   }
}

function fileClick(click){
   if (click.target === this || e.target.parentElement === this){
   }
}

function createItem(parentNode, className = "", text = "", type = ""){
   let li = doc.createElement('li');

   if (text.length > 0){
      let txtNode = doc.createTextNode(text);
      if (type.length > 0){
         createMaterialIcon(li, type);
         if (type === folderIcon){
            li.onclick = folderClick;
         } else if (type === fileIcon){
            li.onclick = fileClick;
         }
      }
      li.onmouseover = function(e){
         this.classList.add('hovered');
      }
      li.onmouseout = function(e){
         this.classList.remove('hovered');
      }
      li.appendChild(txtNode);
   }

   li.className = className;
   parentNode.appendChild(li);

   return li;
}

function createMaterialIcon(parentNode, iconText = ""){
   let icon = doc.createElement('i');
   icon.className = materialIcon;
   let txtNode = doc.createTextNode(iconText);
   icon.appendChild(txtNode);
   parentNode.appendChild(icon);
   return icon;
}

function hasClass(element, cls) {
   if (element === null) return false;
   return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function readNodes(structure, parentNode){
   for (let i = 0; i < structure.length; i++){
      if (structure[i]['folder'] === true){
         createItem(parentNode, "folder", structure[i]['title'], folderIcon);
         if (!structure[i]['children']){
            createItem(createList(parentNode, "list-container"), "empty", empty);
         }
      } else {
         createItem(parentNode, "file", structure[i]['title'], fileIcon);
      }
      if (structure[i]['children']){
         readNodes(structure[i]['children'], createList(createItem(parentNode, "list-container"), 'inner'));
      }
   }
}

let list = doc.createElement('ul');
list.className = 'basic';
readNodes(structure, list);

rootNode.appendChild(list);