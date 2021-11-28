export let scrollToTag = (tag):void =>{
    const foundTag = document.getElementById(tag);
  
    if(foundTag) foundTag.scrollIntoView({behavior: "smooth"});
  }