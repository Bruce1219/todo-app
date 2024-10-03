import { Pipe, PipeTransform } from '@angular/core';

import { Task } from '../../task-feature/model/task';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(
    list: Task[],
    prop: 'id' | 'state',
    direction: 'asc' | 'desc' = 'asc'
  ): Task[] {
    const reverseOrder = direction === 'asc' ? 1 : -1;
    return list.sort((a, b) => {
      if (typeof a[prop] === 'string') {
        const valueA = a[prop] as string;
        const valueB = b[prop] as string;
        return valueA.localeCompare(valueB) * reverseOrder;
      } else if (typeof a[prop] === 'number') {
        const valueA = a[prop] as number;
        const valueB = b[prop] as number;
        return (valueA - valueB) * reverseOrder;
      } else {
        return 0;
      }
    })
  }
}
