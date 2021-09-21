import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from '../environments/environment';
import { catchError, tap, switchAll } from 'rxjs/operators';
import { EMPTY, Subject } from 'rxjs';
export const WS_ENDPOINT = environment.wsEndpoint;
  
@Injectable({
  providedIn: 'root'
})
export class SubmissionService {
  private socket$?: WebSocketSubject<any>;
  public connect(): void {
  
    if (!this.socket$ || this.socket$.closed) {
      this.socket$ = this.getNewWebSocket();
      this.socket$.subscribe(
        msg => console.log(msg),
        err => console.log(err),
        () => console.log('closed websocket')
      )
    }
  }
  
  private getNewWebSocket() {
    return webSocket(WS_ENDPOINT);
  }
  listen(subscriber: ((msg: any,)=>void)){
    this.socket$?.subscribe(subscriber);
  }
  sendMessage(msg: any) {
    this.socket$?.next(msg);
  }
  close() {
    this.socket$?.complete(); }}