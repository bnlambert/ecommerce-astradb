import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
 
  set(key: string, value: string, extraDays = 0.4): void {
    const d = new Date();
    d.setTime(d.getTime() + (extraDays * 24 * 60 * 60 * 1000));
    const expiresTime = d.toUTCString();

    document.cookie = `${key}=${value}; expires=${expiresTime}; path=/`;
  }

  get(key: string): string {
    const name = key + "=";
    const decodedCookie = decodeURIComponent(document.cookie)
    const ca = decodedCookie.split(';')

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }

    return ''
  }

  has(key: string): boolean {
    const name = this.get(key);
    if (name != "") {
      return true
    }

    return false
  }

  remove(key: string): void {
    document.cookie=`${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}
