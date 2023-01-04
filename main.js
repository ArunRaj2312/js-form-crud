let form=document.getElementById("form");
form.addEventListener("submit",e=>{
    e.preventDefault();
    readData();
    document.getElementById("fname").value='';
});
var data={};
function readData(){
    data["fname"]=document.getElementById("fname").value;
    console.log(data);
    createData();
}
function createData(){
    let row=document.querySelector(".row-1");
    let div=document.createElement("div");
    row.appendChild(div)
    let fname=document.createElement("span");
    div.appendChild(fname);
    fname.innerText=data.fname;
    let edit=document.createElement("i");
    edit.classList.add("bi-pencil-square");
    fname.appendChild(edit);
    edit.setAttribute("onclick","edt(this)");

    let del=document.createElement("i");
    del.classList.add("bi-trash-fill");
    fname.appendChild(del);
    del.setAttribute("onclick","delet(this)");
}
function edt(e){
        document.getElementById("fname").value=e.parentNode.innerText;
        e.parentNode.remove();
}
function delet(e){
        e.parentNode.remove();
}