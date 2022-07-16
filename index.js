
if(localStorage.length>0){
    var List=JSON.parse(localStorage.getItem('List'));
}
else{
    var List=[]
}
const addCom = () => {
    const content = document.getElementById('content').value;
    if (content != " ") {
        List.push(content);
        document.getElementById('content').value = " ";
        localStorage.setItem('List', JSON.stringify(List));
        display();
    }
}
const display = () => {
    let str = ' ';
    const flist = JSON.parse(localStorage.getItem('List'));
    flist.forEach((element, index) => {
        str = str + `<tr class="m-4"> <td style="text-align:center;font-weight:bold" class="p-2"> ${element} </td>
                  <td style="text-align:center;font-weight:bold;" class="p-2"> <i class="fa fa-times" style="color:red; cursor:pointer;" onclick="del(${index})"> </i> </td>
                  </tr> `
    });
    document.getElementById('tab').innerHTML = str;
}
const del = (index) => {
    List.splice(index, 1);
    localStorage.setItem('List', JSON.stringify(List));
    display();
}
const cleann=()=>{
    localStorage.clear()
    document.getElementById('tab').innerHTML = "";
}