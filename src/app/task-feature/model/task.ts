export class Task {
    constructor(initData?: { [P in keyof Task]?: Task[P] | null }) {
      Object.assign(this, initData);
    }
  
    id!: number;
  
    content!: string;
  
    type!: 'Home' | 'Work' | 'Other';

    important!: boolean;

    urgent!: boolean;

    money!: number;

    state!: 'None' | 'Doing' | 'Finish';

    startDate!: Date | undefined;

    finishDate!: Date | undefined;
  }
  