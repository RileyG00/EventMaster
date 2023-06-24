/*==================================================================================
[0] Cookies
==================================================================================*/
export function setCookie(key, value, expiresWhen) {
    let date = new Date();
    date.setTime(date.getTime() + (expiresWhen*60*60*1000));
    let expires = "expires=" + date.toUTCString();
    
    document.cookie = key + "=" + value + ";" + expires + ";path=/";
}

export function getCookie(name) {
    const cookie = document.cookie
      .split('; ')
      .find(row => row.startsWith(name));
  
    return cookie && cookie.split('=')[1];
}









