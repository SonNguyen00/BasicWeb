const button= document.getElementById('submitBtn');
const input= document.getElementById("username");
//var arr[]  ;
if(sessionStorage.getItem('arr')&&sessionStorage.getItem('arr')!=null);
    var arr=JSON.parse(sessionStorage.getItem('arr'));
button.addEventListener('click',()=>{
    var name = input.value;
    if(name!=''){
        arr.push(name);
        //JSON
        var item = JSON.stringify(arr);
        console.log(item , typeif(item))
        sessionStorage.setItem('arr ,item');
    }else{
        arlet("Chưa nhập tên");
    }
})
//Localstorge vs Sessionstorage chỉ save date dưới dạng string
function hienthi(){
    if(x.length>0){
        var str= ``;
        x.forEach(el =>{
            str+=`
            <li>`+el+`</li>`;
        });
    //tạo ra 1 chuổi
    return str;
    }
}