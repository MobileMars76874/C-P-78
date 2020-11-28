var Name = ["Sanjeev Garg" , "Hema Garg" , "Nitai Garg" ,]
var Image = ["Images.jpg","download.jpg","Nitai Picture.jpg",]


var i = 0;


function Nextslide(){

document.getElementById("name").innerHTML=Name[i];
document.getElementById("image").src=Image[i];
i++;

if(i >= 4){
i = 0
}

}