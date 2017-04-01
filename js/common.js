

var el = document.getElementById("content"); 

function Item(UserName, UserPhoto, DateNum, UserPic, LikeNum, CommentsM) {
    this.UserName = UserName;
    this.UserPhoto = UserPhoto;
    this.DateNum = DateNum;
    this.UserPic = UserPic;
    this.LikeNum = LikeNum;
    this.CommentsM = CommentsM;
};

Item.prototype.render = function (){
	var Feed = document.createElement("div");
	Feed.setAttribute("class", "feed");

    var Head = document.createElement("div");
    Head.setAttribute("class", "head");
    
	var Profile = document.createElement("a");
    
    var Photosq = document.createElement("div");
    Photosq.setAttribute("class", "photosq");
    
    var ProfilePhoto = document.createElement("img");
    ProfilePhoto.setAttribute("src", this.UserPhoto);
    
    var ProfileName = document.createElement("h3");
    ProfileName.textContent = this.UserName;
    
    var date = document.createElement("date");
    date.textContent = this.DateNum;
  
	var Photo = document.createElement("img");
	Photo.setAttribute("src", this.UserPic);
    
    var Text = document.createElement("div");
    Text.setAttribute("class", "text");
    
    var Coments = document.createElement("ul");
    Coments.setAttribute("class", "coments");
    
    var Likes = document.createElement("li");
    Likes.setAttribute("class", "likes");
    Likes.innerHTML ="<b> " + this.LikeNum + " likes </b>";
    
    function CreateComment( UserNameComment, Coment ){
      var Com = document.createElement("li")
    Com.innerHTML = "<a href='#'><b>" + UserNameComment + "</b></a> " + Coment; 
        
        return Com
    };   
    
    var Form = document.createElement("Form");
    
    var Like = document.createElement("p");
    Like.setAttribute("class", "like");
        
    var CommentInput = document.createElement("input");
    CommentInput.setAttribute("placeholder", "Add a comment");

    Feed.appendChild(Head);
        Head.appendChild(Profile);
            Profile.appendChild(Photosq);
                Photosq.appendChild(ProfilePhoto);
            Profile.appendChild(ProfileName);
        Head.appendChild(date);
    Feed.appendChild(Photo);
    Feed.appendChild(Text);
        Text.appendChild(Coments);
            Coments.appendChild(Likes);
            for(var i = 0; i < this.CommentsM.length; i++) {
            Coments.appendChild( CreateComment(  this.CommentsM[i][0],  this.CommentsM[i][1] ));
    };
        Text.appendChild(Form);
            Form.appendChild(Like);
            Form.appendChild(CommentInput);
    return Feed
		};

var users = [ 
	["Ali", "img/profilePhoto.jpg", "02.03", "img/man.jpg",  235,  [["vasya", "Круто!!!"]]],
	["Monro", "img/profilePhoto2.jpg", "04.04", "img/maunt.jpg",  321,  [["Alex", "like for like!!!"],["vasya323", "Замечательно!!!"],["dasdas", "Круто!!!"],["vasya", "Круто!!!"]]],
	["Girl", "img/profilePhoto3.jpg", "01.05", "img/nature.jpg",  123,  [["Lena", "Здорово!!!"],["Petya", "love it!!!"]]]
];

var allPosts = [];

for(var i = 0; i < users.length; i++) {
	allPosts.push( new Item( users[i][0],  users[i][1], users[i][2], users[i][3], users[i][4], users[i][5]) );
};

for(var i = 0; i < allPosts.length; i++) {
	el.appendChild( allPosts[i].render() );
};

var likeEl = document.getElementsByClassName("like");

    function changeLike(event) {
	event.target.classList.toggle("checkedlike");    
      };  

    for( var i = 0; i < likeEl.length; i++) {
        likeEl[i].onclick = changeLike; 
};

var fly = document.getElementById("fly");
var deltaX;

function move(e) {
   
      
	var pX = e.pageX;
	fly.style.left = (pX - deltaX) + "px";
 
    
};

function startDrag(e) {
	var mouseX = e.pageX; // Get mouse coords
	var flyOffsetLeft = fly.offsetLeft;
	deltaX = mouseX - flyOffsetLeft;

	//console.log(divOffset);
	window.addEventListener("mousemove", move);
     
};

function stopDrag() {
	window.removeEventListener("mousemove", move);
      if ( fly.offsetLeft > 20) { fly.style.left = 18 + "px"}
};

fly.onmousedown = startDrag;
fly.onmouseup = stopDrag;


var circle = fly.getElementsByTagName("img");

console.log(circle)

circle.onclick = d;

function d () {
    console.log("gfgf");
}