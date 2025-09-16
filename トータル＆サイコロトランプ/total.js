gazo = [["D1","D2","D3","D4","D5","D6","D7","D8","D9","D10","D11","D12","D13"],
        ["H1","H2","H3","H4","H5","H6","H7","H8","H9","H10","H11","H12","H13"],
        ["C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11","C12","C13"],
        ["S1","S2","S3","S4","S5","S6","S7","S8","S9","S10","S11","S12","S13"],
];
hi = new Array(52);
for(i=0; i<4; i++){
    for(j=0; j<13; j++){
        dom = Math.floor(Math.random() * 52);
        if(hi[dom] == null){
            hi[dom] = gazo[i][j];
        }else{
            j = j - 1;
        }
    }
}

seme = ["先攻","後攻"];
turn = [];
function opening(){
    front = document.getElementById("front");
    user = document.getElementById("user");
    user2 = document.getElementById("user2");
    if(sessionStorage.getItem('hutari') == "true"){
        front.style.fontSize = "100px";
        front.innerHTML = "名前を教えて<br>先攻    <br>後攻    ";
        first = document.createElement('input');
        first.type = 'text';
        front.appendChild(first);
        first.style = "position:absolute; top:135px; height:80px; font-size:20px; font-family:SimSun;";

        second = document.createElement('input');
        second.type = 'text';
        front.appendChild(second);
        second.style = "position:absolute; top:255px; height:80px; font-size:20px; font-family:SimSun;";

        next = document.createElement('button');
        next.textContent = "次へ";
        front.appendChild(next);
        next.style = "position:absolute; top:255px; left:1100px; height:80px; width:80px; font-size:large; font-family:SimSun;"
        next.onclick = function(){
            turn = [first.value, second.value];
            user2.innerHTML = second.value;
            user.innerHTML = first.value;

            fu = [user,user2];
            for(i=0; i<2; i++){
                waku = fu[i];
                for(su=30; 
                    waku.scrollWidth > waku.getBoundingClientRect().width || waku.scrollHeight > waku.getBoundingClientRect().height; 
                    su--){
                    waku.style.fontSize = su;
                }
            }
        
            front.style.fontSize = "400px";
            front.innerHTML = "START";
            setTimeout(()=>front.style.display = "none",2000);
        }
    }else{
        k = Math.floor(Math.random() * 2);

        front.style.fontSize = "100px";
        front.innerHTML = "あなたは";

        setTimeout(function(){
            front.style.fontSize = "200px";
            front.innerHTML = seme[k];
            if(k==0){
                turn[0] = "あなた";
                turn[1] = "PC";
                user.innerHTML = "あなた";
                user2.innerHTML = "PC";
            }else{
                turn[1] = "PC";
                turn[0] = "あなた";
                user.innerHTML = "PC";
                user2.innerHTML = "あなた";
            }
        },3000);
        setTimeout(function(){
            front.style.fontSize = "440px";
            front.innerHTML = "START";
            setTimeout(()=>front.style.display = "none",2000);
        },5000);
    }
}

function judge(){
    parent = document.getElementById("parent");
    parent.children.addEventListener("click", function(){
        if(parent.children.hasClass('active')){
            parent.children.removeClass('active');
        }else{
            parent.children.addClass('active');
        }
    })
}

/*
・「button.onclick = card(button.id);」がなければ正常にボタンが表示される
・<head>を下に書く＆hi[i] = new Array(13)を付け加える　→　ボタンが１個だけになる
・else{}内でfront,titleを宣言しないとエラーが出る
・trueでもif文で取得するときには”　”が必要
・alert("yeahhhhhhhh!");
            this.style.background = `url(${hi[k]}.png)`
・コンソールで"parent.children"と打てば　ボタンが識別されて出てくる

function judge(){
    parent = document.getElementById("parent");
    for(k=parent.children.length-1; k>=0; k--){
        parent.children[k].addEventListener("click", function(){
            alert(k);
            this.classList.toggle('active');
        });
    }

    front.style.display = "block";
    front.style.fontSize = "400px";
    front.innerHTML = `${turn[0]}のターン`;
    click_times = 0;
    for(i=0; i<4; i++){
        if(gazo[i].indexOf(hi[k]) != -1){
            if(click_times == 0){
                click_times = click_times + 1;
                switch(i){
                    case 0,1: ex = 0; cuse = 1;
                    case 2,3: ex = 2; cuse = 3;
                }
            }
        }
    }
}
*/