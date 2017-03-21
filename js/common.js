var el = document.getElementById("content"); 

var Person = {
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
		},
    constructor: function(UserName, UserPhoto, DateNum, UserPic, LikeNum, CommentsM){
        this.UserName = UserName;
        this.UserPhoto = UserPhoto;
        this.DateNum = DateNum;
        this.UserPic = UserPic;
        this.LikeNum = LikeNum;
        this.CommentsM = CommentsM;
        
        return this
    },
};

var aliPost = Object.create(Person).constructor( "Ali", "img/profilePhoto.jpg", "02.03", "img/man.jpg",  235,  [["vasya", "Круто!!!"]]);

var monroPost = Object.create(Person).constructor( "Monro", "img/profilePhoto2.jpg", "04.04", "img/maunt.jpg",  321,  [["Alex", "like for like!!!"],["vasya323", "Замечательно!!!"],["dasdas", "Круто!!!"],["vasya", "Круто!!!"]]);

var girlPost = Object.create(Person).constructor( "Girl", "img/profilePhoto3.jpg", "01.05", "img/nature.jpg",  123,  [["Lena", "Здорово!!!"],["Petya", "love it!!!"]]);




el.appendChild( aliPost.render() );
el.appendChild( monroPost.render() );
el.appendChild( girlPost.render() );
  

var likeEl = document.getElementsByClassName("like");

    function changeLike(event) {
	event.target.classList.toggle("checkedlike");    
      };  

    for( var i = 0; i < likeEl.length; i++) {
        likeEl[i].onclick = changeLike; 
};

   

