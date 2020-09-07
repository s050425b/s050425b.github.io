


const gamePic=document.getElementById("gamePic");

const game=function(){
    gamePic.style.left=`${Math.random()*1000}px`;
    gamePic.style.top=`${Math.random()*300}px`;
}

gamePic.addEventListener("mouseover",game);

const up= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAAD19fXCwsKVlZX4+PiwsLDh4eHFxcXw8PD09PRycnKOjo7S0tIbGxs5OTldXV2CgoKjo6PZ2dl7e3sZGRlmZmbLy8tOTk6fn59GRkZgYGAKCgogICBTU1O2trYyMjKHh4crKys9PT0nJyfo6OiPnZgPAAAEX0lEQVR4nO2d2VIqQRBEKXX0grvivoHL///i3XWAKaZmuqqz28jzA9bxpSMzEphM8tKcNZn/Ym7u5R59QiyHInKIPiKSI/nNEfqMOPblL/voQ6I4lv8co0+J4UC+OEAfE8HspGX4NEOfE8CptDlFn+PPmazygD7Im3NZZ4k+yZeLDUGRC/RRnux2CIr8QJ/lx2WnoMgl+jAvpo+K4eMUfZoTJ4rgr2cRfZoPz6qgyDP6OA/mWwRF5ujz0jnaKiiyhz4wlZceQZEX9IlpHPcKVh6lPgyCIh/oM8fTXJkMr+qt3+5NgiK36EPH8mAUFLlGnzqOpVmw0ii13+/VosL6rTsw6VQXpbTApFNZ/bYzWFCkqjejWYwwXNSkuF6s2aioftsemHSqiVJ3IwVF7tCn2xj6TrTZRR9vYfg70aaC+s0WmHSKr9+a10TD19LfjNtEweKj1HWyYOFRas9BsOj6bVhg0im2frtxEhS5Qat0c9B/uZki67eZrVizcbKD1ungtP/uAbyhdTYZF5h0ztBC6yydBYur37qWCKkUtWRICUw6BUUpz3eiTTH12zRIsJgoNapYs1FI/ZYemHSKWDIcBgoWMQr3CUw68CjVv0RIBRylLEuEVKBLhqiHcBVglGresxi+496MuIdwFdgo3KNYswF6M/oWa55APkgUEZh0AFHKr1izkb1+y/NOtMkcpeICk07eKJXrnWizyCnoXazZyFi/jV0ipJJtyTB+iZBKpiVDTLFmI0v9liMw6WSIUqlLhFTio5T+EZ88hH+QyDrdjiN4yRBbrNkIjVI5A5NOYJTyWiKkEla/5Q5MOkFRKn9g0gl5M8ZMt+OIqN/e0FIrBCwZ7B/xyYP7+g0VmHTOfQXzFms2XOs3ZGDScfwgUdp0Ow63UTiiWLPhVb8hijUbCx/ByCVCKi5LhhICk45DlMIVazaS67f4JUIqiVGqnMCkk1S/oYs1Gwlvhut0O46EUTi+WLMxun7Lt0RIZWSUWqLvHsCoUXgpxZqNEd/JUMM70WZw/VZSsWZj4JJhWsc70eZq2LPo+xGfPAxav5UcmHQGRKnNLxutA3P9Vnpg0jHWb+UHJh1TlCq1WLNhqN/qCEw6vW9G84Q+MZHeUXgtgUmn59clyi7WbGyt38pYIqSyZclQV2DSUaMUdrHmiVK/1ReYdDqj1Ay9WPOk89clagxMOh1RCjPdjmPj6+1qDUw6a/VbiUuEVFaiVJlLhFRaS4a6A5POZ5RSf52hdj5/XeI7PYSr/BuFb/t1htr5U7+Vt1jzZP5dApPO3mQ62/Gicf1vvTQeN818P7Xo+h0ZBX3D0Bc0pCEN8dCQhjTEQ0Ma0hAPDWlIQzw0pCEN8dCQhjTEQ0Ma0hAPDWlIQzw0pCEN8dCQhjTEQ0Ma0hAPDWlIQzw0pCEN8dCQhjTEQ0Ma0hAPDWlIQzw0pCEN8dCQhjTEQ0Ma0hAPDWlIQzw0pCEN8dCQhjTEQ0Ma0hBPkYY/ATxvbMKZWIutAAAAAElFTkSuQmCC";
const down="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS408Ju01OQQDTCcDlgUvI1m6cPYcbPnXqwZQ&usqp=CAU";
const left="https://png.pngtree.com/png-vector/20190411/ourlarge/pngtree-vector-left-arrow-icon-png-image_925725.jpg";
const right="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADb29tqamr4+Pju7u7W1tajo6P39/eOjo7x8fHIyMiRkZE6OjpQUFBkZGR7e3u4uLjl5eUgICDNzc2pqakzMzMaGhpgYGCwsLCbm5tzc3NbW1t/f38JCQkfHx8VFRVFRUWGhobAwMAoKChVVVUvLy90y6tdAAAEOklEQVR4nO2diVLcMBBEV7AhB2dIAiEQjgTy/5+YcMTs2pI1o4N2T837AfpVUaVeaSytVo7jOI7jOI7jOI7jOI7jOI7Tg/U3dILuhBN0gt6EcPYOnaEv4R/76BBdeTQMB+gUPXkyDEdrdI5+hBf20EG68d8wvEcn6cVgGI7RUTrxahjOT9FhuhA2+YxO04MtQ5MFZ9swHH5CB2pOGGOu4EwMzRWcqWE4+oAO1ZSIobGCEzU0VXDihpYKTsIwfDFTcFKGdgpO2tBKwZkxNLKDM2doo+DMG4aP6Hz1ZAwNFJycIX/ByRuyFxyBYdhFh6xCYsi9gyMypC44QkPigiM1DIesBUdsSFtwFIakBUdjyHlEpTKkLDhKQ8KCozUM39GJtagN6XZw9IZsBafEkKvgFBlSFZwyQ6aCU2rIc0RVbEhTcMoNwzVHwakwJCk4VYYUOzh1huFGX3B23phKw4KCU/0X35yf5g3DmW4GBx23CFXBQYctQ1Nw0FkLURQcdNRixAUHHbQcacFB56xAOIODjlmDbAcHnbIOScFBZ6xEsIODjlhLfgcHnbCeXMFB52tA5ogKHa8F8zM46HRt2DFvOFdw0NFakS446GTNSBYcdLCGJAoOOlZL4gUHnaop0YKDDtWYr+YNIwUHnag5kx0cdKAO7Jk3HBUcdJouHJs3DPen1g03Cw46STdOzBsOn4mjc/Rk37zh8xEVOkRfHgsOOkNv9swbHlg33Df+X/r02S06RE8ura8WF8ZX/NtT463tam28l24M3KCj9GFzyw2dpQfbl0+h03RgtPWNjtOe8fEFOk9rpkdQ6ESNuRr7WTP8MRW0ZRg5lzFleBefjkbHakdqwh2dqxnJIT50sEbcpwcx0dHaMDdMi87WhNmBaHS4FswPtaPT1ZO7Owudr5pf8378hr9zguSGM4uEDUPRJ6XokDXIXnRBp6xgbjDYgqH46zV00FLkd0ihkxai+IoUHbWIP5qrTtBhS7hU+FEaKp/9QsfVI1wkaA0f1He47L4xlYIE9/DUCTLcpVTjp1okYFQIktxpVi54gY4upNTvluZuwULBK5KLvlalhrFTs6VSJBg9NVsqBX5k73rpBbX3QqFRC3JdXrpSG7JdQLvSGtJdIrxSGjItEgMaQapFYkDud0f64oxYMHtqtlSkgnSLxIDMT3JqtlREgtRvBUoEKS7TTSIQ5LgQOUnW747nt26cnCDtIjGQEcyPViyeWb97ig3RDHOCDLd155kRVJ6aLZW0IPkiMZDyY3n5IE9CkPN5rihxQYZTMykxP45TMykRQd1oxeKZCrKcmkkZ+11rRysWz0jwAZ2nPduCBKMVaswuEgMbfjYei5/wKkgyWqHG7CIx8OJ3bm6RGHgWjHyQbIYnQcpTMymPgpynZlLoRivU0I1WaFkb2W5yHMdxHMdxHMdxHMdxHMdxlsdffkhWvU4rifUAAAAASUVORK5CYII=";

const a1=document.getElementById("a-1");
const a2=document.getElementById("a-2");
const a3=document.getElementById("a-3");
const a4=document.getElementById("a-4");
const a5=document.getElementById("a-5");
const a6=document.getElementById("a-6");
const a7=document.getElementById("a-7");

//const arr=[a1,a2,a3,a4,a5,a6,a7];

const arrowGame={
    arr:[a1,a2,a3,a4,a5,a6,a7],
    arrKey:[],
    currentPosition:0,

    generateKey(){
        this.arr.forEach(each=>{
            let x=Math.floor(Math.random()*4);
            switch (x){
                case 0: each.src=up;this.arrKey.push("up"); break;
                case 1: each.src=right;this.arrKey.push("right"); break;
                case 2: each.src=down;this.arrKey.push("down"); break;
                case 3: each.src=left;this.arrKey.push("left"); break;
            }
        });
    },

    gamePlay(key){
        if (key===this.arrKey[this.currentPosition]){
            this.arr[this.currentPosition].style.opacity="50%";
            this.currentPosition++;
        }
        if (this.currentPosition===this.arr.length)
        document.getElementById("testing").style.display="inline";
    },

    reset(){
        this.arr.forEach(element=>{
            element.style.opacity="1";
        });
        this.currentPosition=0;
        this.arrKey=[];
        this.generateKey();
        document.getElementById("testing").style.display="none";
    },
}

arrowGame.reset();
document.getElementById("btn").onclick=function(e){
    arrowGame.reset();
}


document.addEventListener("keydown",function(e){
    switch(e.key){
        case "w": arrowGame.gamePlay("up");; break;
        case "d":arrowGame.gamePlay("right"); break;
        case "s":arrowGame.gamePlay("down"); break;
        case "a":arrowGame.gamePlay("left"); break;
    }
});


