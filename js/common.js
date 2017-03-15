var el = document.getElementById("content"); 

var post = [
    {
    
    UserName: "Ali" ,
    UserPhoto: "img/profilePhoto.jpg",
    DateNum: "02.03",
    UserPic: "img/man.jpg",
    LikeNum: 235,
    CommentsM: [
                ["vasya", "Круто!!!"],
                ["petya", "Классно!!!"],
               ],
    render: function createItem() {
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
    Likes.setAttribute("id", "likes");
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
        
//            for(var i = 0; i < this.CommentsM.length; i++) {
//            Coments.appendChild( CreateComment(  this.UserNameComment[i][0],  this.Coment[i][1] ));
//    };
        
        Text.appendChild(Form);
            Form.appendChild(Like);
            Form.appendChild(CommentInput);

    return Feed
            }
},
   
    {
    UserName: "Monro" ,
    UserPhoto: "img/profilePhoto2.jpg",
    DateNum: "04.04",
    UserPic: "img/maunt.jpg",
    LikeNum: 321,
    Comentaror: "vasya",
    CommentText: "Круто!!!",
      render: function createItem() {
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
    Likes.setAttribute("id", "likes");
    Likes.innerHTML ="<b> " + this.LikeNum + " likes </b>";
    
    var Com = document.createElement("li")
    Com.innerHTML = "<a href='#'><b> " + this.Comentaror + " </b></a> " + this.CommentText; 
        
    
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
            Coments.appendChild(Com);
        Text.appendChild(Form);
            Form.appendChild(Like);
            Form.appendChild(CommentInput);

    return Feed
    }
    },
    {
    UserName: "Ali",
    UserPhoto: "img/profilePhoto3.jpg",
    DateNum: "01.05",
    UserPic: "img/nature.jpg",
    LikeNum: 123,
    Comentaror: "vasya",
    CommentText: "Круто!!!",
    render: function createItem() {
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
    
    var Com = document.createElement("li")
    Com.innerHTML = "<a href='#'><b> " + this.Comentaror + " </b></a> " + this.CommentText; 
    
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
            Coments.appendChild(Com);
        Text.appendChild(Form);
            Form.appendChild(Like);
            Form.appendChild(CommentInput);
    return Feed
		}
	}
	];
    

for( var i = 0; i < post.length; i++) {
	el.appendChild( post[i].render() );
}

    var likeEl = document.getElementsByClassName("like");
  
    function changeLike(event) {
	console.log(event.target);
	event.target.classList.toggle("checkedlike");    
      };  

   

    for( var i = 0; i < likeEl.length; i++) {
        likeEl[i].onclick = changeLike;
         
};




