const createNav=()=>{
    let nav=document.querySelector('.navbar');

    nav.innerHTML=`
            <div class="nav">
            <img src="img/logojewelry.jpg" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search Isibell">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="img/user.png" alt=" "></a>
                <a href="#"><img src="img/box.png" alt=" "></a>
            </div>
            </div>
             <ul class="links-container">
                <li class="link-item"><a href="#" class="link">home</a></li>
                <li class="link-item"><a href="#" class="link">home</a></li>
                <li class="link-item"><a href="#" class="link">home</a></li>
                <li class="link-item"><a href="#" class="link">home</a></li>
            </ul>
        
    `;

}

createNav();

