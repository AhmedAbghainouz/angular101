import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(people: any[], term: string): any[] {
    if (!people || !term) {
      return people;
    }
    term = term.toLowerCase();
    return people.filter(person =>
      person.name.toLowerCase().includes(term.toLowerCase())
    );
  }
}
