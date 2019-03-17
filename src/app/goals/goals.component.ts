import {Component, OnInit} from '@angular/core';
import {Goal} from '../models/Goal';
import {GOALS} from '../mock-goals';
import {GoalService} from '../services/goal.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  goals: Goal[];


  constructor(private goalService: GoalService) {
  }

  ngOnInit() {
    this.getGoals();
  }



  getGoals(): void {
    this.goalService.getGoals().subscribe(goal => this.goals = goal);
  }

}
