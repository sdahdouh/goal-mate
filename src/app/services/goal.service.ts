import {Injectable} from '@angular/core';
import {Goal} from '../models/Goal';
import {GOALS} from '../mock-goals';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private messageService: MessageService) {
  }

  getGoals(): Observable<Goal[]> {
    this.messageService.addMessage('GoalService: fetched Goals!')
    return of(GOALS);
  }
}
