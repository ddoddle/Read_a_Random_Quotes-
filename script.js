let url="https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand"
let response=fetch(url);
 response.then((value)=>{
    return value.json();
 }).then((contest)=>{
    console.log(contest)
    ihtml=""
    for(item in contest){
        console.log(contest[item])  
       ihtml+=`

    <div class="card my-2 mx-2" style="width: 22rem;">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdeBtFw3E6khDcv9oPdDkTfiApARm90pXJYQYofKnH0KREE8p20sJ6wKoVpVEEBc8OhY&usqp=CAU" class="card-img-top" alt="no-image">
    <div class="card-body">
    <hr>
      <h5 class="card-title">AuthorName: ${contest[item].slug
      }</h5>
      <p class="card-text">status: ${contest[item].status}</p>
     
     
      <p class="card-text">date: ${contest[item].date}</p>



      <a href="${contest[item].link}" class="btn btn-primary">See The Quote</a>
    </div>
  </div>
       `
    }
    cardContainer.innerHTML=ihtml;
 })