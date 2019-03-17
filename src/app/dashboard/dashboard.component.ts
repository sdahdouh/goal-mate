import { Component, OnInit } from '@angular/core';
import {GoalService} from '../services/goal.service';
import {Goal} from '../models/Goal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  goals: Goal[] = [];

  constructor(private goalService: GoalService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.goalService.getGoals()
      .subscribe(goals => this.goals = goals.slice(1, 5));
  }
}
