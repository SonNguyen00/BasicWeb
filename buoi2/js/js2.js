const button2 = document.querySelectorAll(".button2");
const tenSP = document.querySelectorAll(".tenSP");
const giaSP = document.querySelectorAll(".giaSP");

button2.forEach(el => {
    console.log(el);
});

var arr=[]
for (let i = 0; button2 < button2.length; i++) {
    const el = button2[i];
     //arrow function: function/hàm được khai báo nhưng ko có tên function
     el.addEventListener("click",()=>{
        var tenSP1 = tenSP[i].innerHTML;
        var giaSP1 = tenSP[i].innerHTML;

        var item = new Object();
        item.ten = tenSP1;
        item.gia = giaSP1;
        item.soluong = 1;

        var check = 0;
        arr.forEach(el => {
            el.soluong++;
            check=1;
    
        }
        )

        if (check ==0){
            arr.push(obj);
        }
        var str ='';
        var stt = 1;
        arr.forEach(el => {
            var sum = Number(el.giaSP) * el.soluong;
            str +=`
            <tr>
            </th>
            `+(stt++)+`
                </th>
                <th>
            `+el.tenSP+`
                </th>
                </th>
            `+el.giaSp+`
            </th>
            <th>
            `el.soluong+`
            </th>
            <th>
            `+sum+` `+'Đồng'+`
            </th>
        </tr>
            `;
            
        });
        document.getElementById('cart').innerHTML = str;
     })

}