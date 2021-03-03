import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

export interface Todo {
  userId?: number,
  id?: number,
  title: string,
  completed: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {}

  create(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {
      //TODO Добавление headers к запросу
      headers: new HttpHeaders({
        'test-header': 'test'
      })
    })
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=4', {
      //TODO Параметры для запроса можно задавать, через HttpParams. И можно больше не передавать явно по url.
      //TODO Через код более структурированнее
       params: new HttpParams()
         .append('_limit', '10')
         .append('_max', '100')
    })
      // TODO Пример обработки ошибок, Таким образом можно прокидывать ошибку дальше. К примеру аналитику
      .pipe(
        catchError(err => {
            console.log('ERROR',  err.massage)
            return throwError(err)
          }
        )
      )
  }

  remove(id: number): Observable<any> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }

  complete(id: number): Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      complete: true
    })
  }
}
