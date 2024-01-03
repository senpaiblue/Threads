export function timeAgo(date:string):string {
  const now = new Date();
  const diffInMs =  now.getTime() - new Date(date).getTime()

  const diffInSecs = Math.floor(diffInMs/1000);
  const diffInMins = Math.floor(diffInSecs/60);
  const diffInHours = Math.floor(diffInMins /60);
  const diffInDays = Math.floor(diffInHours/24);
  if (diffInSecs < 60) {
    return diffInSecs + "S";
  } else if (diffInMins < 60) {
    return diffInMins + "mins";
  } else if(diffInHours < 24 ) {
    return "Yesterday";
  } else {
    return diffInDays + "days"
  }
}