import { Injectable } from '@nestjs/common';
import { Subject } from 'rxjs';

export interface Task {
    requestId: string;
    randomStrategy: any;
    randomWords: any[];
    makerOrder?: any[];
    takerOrder?: any[];
    premiumOrder?: any[];
    modeOrderFulfillments: any[]
}

@Injectable()
export class TaskPublisher {
    private readonly taskEventSubject = new Subject<Task>();

    public taskEvent$ = this.taskEventSubject.asObservable();
  
    emitTaskEvent(data: Task) {
      this.taskEventSubject.next(data);
    }
}
