
exports.setCookie=function(name, value, expireDays, path){
    let d = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    let expires = `expires=${d.toUTCString()}`;
    let cpath = path ? `; path=${path}` : '';
    document.cookie = `${name}=${value}; ${expires}${cpath}`;
}

exports.getCookie=function(name){
    let ca = document.cookie.split(';');
    let caLen = ca.length;
    let cookieName = `${name}=`;
    let c;

    for (let i = 0; i < caLen; i += 1) {
        c = ca[i].replace(/^\s+/g, '');
        if (c.indexOf(cookieName) == 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
    return '';
}

exports.deleteCookie=function(name){
    this.setCookie(name, '', -1);
}
