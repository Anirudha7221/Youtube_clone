const apikey="AIzaSyBshw2KNLIMTEMLPJxvnrH_XL0m0vugw4c";
const baseurl="https://www.googleapis.com/youtube/v3";

const searchInput=document.getElementsByTagName("input")[0];
const searchButton=document.getElementById("search-btn");
searchButton.addEventListener("click",()=>{
    let searchString=searchInput.value.trim();
    // console.log(searchString);
    if(searchString=="")
    {
        return;
    }
    getSearchResult(searchString);
});

async function getSearchResult(searchString){
    let url=`${baseurl}/search?key=${apikey}&q=${searchString}&part=snippet&maxResults=24`;
    // console.log(url);
    const responce=await fetch(url,{method:"GET"});
    const results=await responce.json();
    console.log(results);
    addDataOnUI(results.items);
}

function addDataOnUI(videosList){
  videosList.forEach(video => {
     const {snippet}=video;

  let containeer=document.getElementById("containeer")
  
  const videoElement=document.createElement("div");
         videoElement.className="video-item";
         videoElement.innerHTML=`<div class="thumbnil">
                         <img src="${snippet.thumbnails.high.url}">
                       </div>
                       <div class="video-info">
                            <div>
                                <b class="tittle">${snippet.title}</b>
                                <p class="user-name">${snippet.channelTitle}</p>
                            </div>
                       </div>`;
        containeer.appendChild(videoElement);
  });
}