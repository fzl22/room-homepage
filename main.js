
   setUpMenuList();
   window.onresize = setUpMenuList;
   document.querySelector("#menu-icon").addEventListener("click",showMenuItemsListMobile);

   document.getElementById("next").addEventListener("click",handleNextButton);
   document.getElementById("prev").addEventListener("click",handlePrevButton);
   document.getElementById("close").addEventListener("click",handleCloseButton);

   function setUpMenuList(){
     console.log(window.screen.width);
     let mobileHeader = document.querySelector(".mobile-header");

     let desktopHeader = document.querySelector(".desktop-header");

     if(window.screen.width <= 425){
        desktopHeader.style.display="none";
        mobileHeader.style.display = "block";
     }else{
       desktopHeader.style.display="block";
      mobileHeader.style.display = "none";
     }
   }

   function showMenuItemsListMobile(){
     let menuItemsList = document.querySelectorAll(".menu-item-mobile");
     for(let i=0;i<menuItemsList.length;i++){
       let menuItem = menuItemsList[i];
       if (menuItem.style.display == "inline") {
        menuItem.style.display = "none";
       } else {
        menuItem.style.display = "inline";
       }
     }
   }

   let current = 0;

   function handleNextButton(){
     current++;
     updateDescAndMainImage();
   }

   function handlePrevButton(){
     current--;
     updateDescAndMainImage();
   }

   function updateDescAndMainImage(){
     console.log("current " + current);
     if(current==3 || current==-1)
     current = 0;

     let source = document.getElementById("image1");
     let src = source.getAttribute("src");
     let pageDescHeading = document.querySelector(".page-desc h1");
     let desc = document.querySelector(".desc");

     source.setAttribute("src",imageAndDescList[current].image);
     pageDescHeading.innerText = imageAndDescList[current].title;
     desc.innerText = imageAndDescList[current].desc;
   }

   function handleCloseButton(){
     let menuItemsList = document.querySelectorAll(".menu-item-mobile");
     for(let i=0;i<menuItemsList.length;i++){
       let menuItem = menuItemsList[i];
        menuItem.style.display = "none";
     }
   }

   const imageAndDescList =
   [
     {
     image:"images/desktop-image-hero-1.jpg",
     title:"Discover innovative ways to decorate",
     desc:"We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
     },
     {
     image:"images/desktop-image-hero-2.jpg",
     title:"We are available all across the globe",
     desc:"With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
     },
     {
     image:"images/desktop-image-hero-3.jpg",
     title:"Manufactured with the best materials",
     desc:"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
     }
   ];
