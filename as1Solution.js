/**
 *  to-Do List
 * 
 */




 /* Logic to create a new list item when the button is pressed*/
  var arrayForInputs = [];
  var ulElement = document.querySelector("#tasks");
 let child_elements =document.querySelectorAll("#tasks li");
 for(let i=0; i<child_elements.length; i++){
    let elements = child_elements[i].textContent;
   
    elements = elements.slice(0,-2);
    console.log(elements)
    arrayForInputs.push(elements);
 } 
  
  

 $("#clickButton").click(function (){
 let li = document.createElement("li");
 let userInput = document.getElementById("task").value;
 li.append(userInput);
 let checkOnDuplicates;

 function checkvalue(){
   if(arrayForInputs.includes(userInput)){
      checkOnDuplicates = true;
     
   }
   else{
      checkOnDuplicates = false;
   }
 }
 checkvalue();
 arrayForInputs.push(userInput);


 if(userInput === '') {
    alert("Enter something before pressing the button!");
 } 
 else if(checkOnDuplicates == true){
    alert("You cannot enter the same item name! Enter another name!")
 }
 else {
    ulElement.append(li);
 }
 li.classList.add("list-group-item");
 document.getElementById("task").value = "";
/* LOGIC FOR THE BUTTON */

let buttonElement = document.createElement("button");
let text = document.createTextNode("X");
buttonElement.className= "btn btn-danger btn-sm float-right delete";
buttonElement.append(text);
li.append(buttonElement);
for(j=0; j<close.length; j++){
   close[j].onclick =  function (){
   let par = this.parentElement; // create parent for button 

   par.style.display = "none";
}
}
 });


 $("button").remove("#closeButton"); //to remove all button elements
 
 
 //let ulElement = $('#tasks');
 let getLiElements = document.getElementsByTagName("li");
 let i;
 for(i=0; i<getLiElements.length; i++){
    let buttonElement = document.createElement("button");
    let txt = document.createTextNode("X");
    buttonElement.className= "btn btn-danger btn-sm float-right delete";
    buttonElement.appendChild(txt);
    getLiElements[i].appendChild(buttonElement);
    
 }
 
 
 let close = document.getElementsByClassName("btn btn-danger btn-sm float-right delete");
 let j;
 for(j=0; j<close.length; j++){
       close[j].onclick=  function (){
       let par = this.parentElement; // create parent for button 
       par.remove(getLiElements);
      
       

    }
    
 }

   
 
function searchTask(){
   
      let input = document.getElementById('filter').value.toUpperCase();
      let ulelement = document.getElementById("tasks");
      let li = ulelement.children;
      let i;
      
      
      for (i=0; i<li.length; i++){ //looping through all li elements in the ul
         if(li[i].textContent.toUpperCase().indexOf(input)>-1){
            li[i].hidden = false;
         }
         else {
            li[i].hidden = true;
         }
      }


   }






/**
 *  Seashore Supplies
 * 
 */

  let boxToAddItems = document.getElementById("selectedItems")
  let insideBoxElement;
  let inputArray =[];
  
  let numberOfItems;


  $('#addbtn').click(function (){
   
   
   let itemInput = document.getElementById("item").value;
   console.log("text: " + itemInput);
 
   let checkDuplicates;
   insideBoxElement = document.createElement("option");
   


   insideBoxElement.style.fontFamily = "Lucida Console, Courier New";
   insideBoxElement.style.marginTop = "10px";
   insideBoxElement.innerHTML = itemInput;

   function checkDuplicatesHere(){
      if(inputArray.includes(itemInput)){
         checkDuplicates = true;
      }
      else checkDuplicates = false;
   }
     checkDuplicatesHere();
     inputArray.push(itemInput);
   
      if(itemInput === ''){
         alert("Enter item before clicking the button!")
      }
      else if(checkDuplicates===true){
          alert("This item is already added!")
      }
      else
      {
         boxToAddItems.append(insideBoxElement);
         numberOfItems = boxToAddItems.length;
         console.log("Number of items: " + numberOfItems);
         
      }

   });

   $('#removebtn').click( function(){


      if($("#selectedItems").has("option").length >0) { // check if box isnt empty
         if($("#selectedItems option:selected").length == 0 ){
            alert("You didnt select any items!!");
          }
          else if($("#selectedItems option:selected").length> 0){
             let selectItem =  $("#selectedItems option:selected");
          
             selectItem.remove();
             alert("Selected item was deleted");
             
    
          }
      }
      else {
         alert ("OPPS, it seems that box is empty..");
      }
      
     
            
      
   });
 

   let minutInput = document.getElementById("minutes");
   let total = document.getElementById("amount");
   
   
   minutInput.addEventListener('focusout', function(){

   let totalPrice;
   let calculhour;
   let pricePerHour = 40;
   let hour = 60;
   let priceMinute = 1;
   let decimnumber
   
   calculhour = Math.floor(minutInput.value / hour); // to calculate total hour

   decimnumber = minutInput.value%hour; // to calculate total minutes
   

   let priceExtraMin = priceMinute*decimnumber;
   console.log("Price for extra minutres " + priceExtraMin);

  
   console.log("decimals " + decimnumber);
   console.log("hours " + calculhour);
   if(numberOfItems > 0){
   if(minutInput.value>hour){
      totalPrice =  numberOfItems * (calculhour * pricePerHour + priceExtraMin)


      console.log("price is $" + totalPrice);
      total.value = totalPrice;
      
   }
   else if (minutInput.value%hour ==0){
      
      totalPrice = numberOfItems * (calculhour * pricePerHour);
      console.log("price is $" + totalPrice);
      total.value = totalPrice;
             
   }
   else if(minutInput.value<hour){
      
      totalPrice = numberOfItems *pricePerHour;
      total.value = totalPrice;
   }
   else {
      alert("Something goes wrong!");
 
 
   }


} 
   else {
      alert("It seems that you haven't added any items yet!")
   }
   });



/**
 *  Changing Quotes
 * 
 */
  let quotesArray = [
   "Life isn't about finding yourself. Life is about creating yourself. - George Bernard Shaw",
   "Do what you can, with what you have, where you are. - Theodore Roosevelt",
   "There is no greater agony than bearing an untold story inside you. - Maya Angelou",
   "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
   "We accept the love we think we deserve. - Stephen Chbosky",
   "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
   "No one can make you feel inferior without your consent. - Eleanor Roosevelt",
   "Be yourself; everyone else is already taken. - Oscar Wilde",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston S. Churchill",
    "If my life is going to mean anything, I have to live it myself. - Rick Riordan",
   "Isn't it nice to think that tomorrow is a new day with no mistakes in it yet? - L.M. Montgomery",
   "You can't stay in your corner of the Forest waiting for others to come to you. You have to go to them sometimes. - A.A. Milne",
   "Pain is inevitable. Suffering is optional. - Haruki Murakami",
    "Always do what you are afraid to do. - Ralph Waldo Emerson",
    "Our lives begin to end the day we become silent about things that matter. - Martin Luther King Jr.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "Talent hits a target no one else can hit. Genius hits a target no one else can see. - Arthur Schopenhauer",
     "The mind is its own place, and in itself can make a heaven of hell, a hell of heaven.. - John Milton",
    "Fantasy is hardly an escape from reality. It's a way of understanding it. - Lloyd Alexander",
    "Waiting is painful. Forgetting is painful. But not knowing which to do is the worst kind of suffering. - Paulo Coelho",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "I can be changed by what happens to me. But I refuse to be reduced by it. - Maya Angelou",
    "Never let your sense of morals prevent you from doing what is right. - Isaac Asimov",
    "Hell is empty and all the devils are here. - William Shakespeare",
     "Turn your wounds into wisdom. - Oprah Winfrey"
  ];
   let min = 0;
   let max = quotesArray.length;
   let numOne;
   let numTwo;
   let numThree;
   let numFour;
  
  
     setInterval(function displayQuotes(){
      do {
         numOne = Math.floor(Math.random() * (max - min));
         numTwo = Math.floor(Math.random() * (max - min));
         numThree = Math.floor(Math.random() * (max - min));
         numFour = Math.floor(Math.random() * (max - min));
        }
        while(numOne==numTwo || numTwo == numThree || numThree == numFour || numFour == numTwo || numFour == numOne ||
         numThree==numOne);
   
         var quoteOne = quotesArray[numOne];
         var quoteTwo = quotesArray[numTwo];
         var quoteThree = quotesArray[numThree];
         var quouteFour = quotesArray[numFour];
         var txt = quoteOne + "<br>" + quoteTwo + "<br>" + quoteThree + "<br>" + quouteFour + "<br>";
         
         document.getElementById("displayQuotes").innerHTML = txt;
         document.getElementById("displayQuotes").style = "color: green; text-align:center; font-weight: bold;";

     },5000);
     
  

/**
 * Animated Images
 * 
 */

 var imageArray = [ 'Images/img0.png', 'Images/img1.png', 'Images/img2.png', 'Images/img3.png', 'Images/img4.png',
 'Images/img5.png', 'Images/img6.png', 'Images/img7.png', 'Images/img8.png', 'Images/img9.png', 'Images/img10.png',
 'Images/img11.png', 'Images/img12.png', 'Images/img13.png',
];
let imgHere = document.getElementById("animateImage");
var indeximage = 0;

setInterval(function animateImages(){
     
   imgHere.setAttribute("src", imageArray[indeximage]);
   indeximage = (indeximage+1)%imageArray.length;

},150);


   




/**
   * Slide Show
   * 
   */

 let currentSlide=0;

setInterval(function slideShow(){
   let captions = document.getElementById("caption")
   let slides = document.querySelectorAll("#slides img");
    let mainImage = document.getElementById("slide");
    
if(currentSlide<slides.length){
   
   mainImage.src = slides[currentSlide].src;
   captions.innerHTML = slides[currentSlide].alt;
   currentSlide ++;
}
else 
currentSlide=0;
mainImage.src = slides[currentSlide].src;
captions.innerHTML = slides[currentSlide].alt;


},2000);


/**
 * Bouncing Balls  
 * 
 */

   let counter = 0;
   function BouncingBall(){
      

      $("#ballElement, #ballImage").animate({
            left: "1500px",
            top: "0px",
            
      },300);
   
      $("#ballElement, #ballImage").animate({
         left: "1500px",
         top: "800px",
         
   },300);

   $("#ballElement, #ballImage").animate({
      left: "0px",
      top: "800px",
      
},300);
$("#ballElement, #ballImage").animate({
   left: "0px",
   top: "0px",
   
},300);
counter++;
   if(counter> 3){
      clearInterval(ballAnimation)
   }
 
   }

   let ballAnimation = setInterval(BouncingBall, 500)

  




