import { Pipe, PipeTransform } from '@angular/core';
import {Post} from "../app.component";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search: string = '', searchType: string = 'title'): Post[] {
    if (!search.trim()) {
      return posts;
    }

    return posts.filter(post => {
      // Получение значения через динамический ключ, такой записью из объекта пост берется нужный параметр
      return post[searchType].toLowerCase().includes(search.toLowerCase());
    });
  }

}
