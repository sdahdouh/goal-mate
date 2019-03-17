import {Component, OnInit, Input} from '@angular/core';
import {Goal} from '../models/Goal';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {GoalService} from '../services/goal.service';


@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  @Input() goal: Goal;

  constructor(private route: ActivatedRoute,
              private goalService: GoalService,
              private location: Location) {
  }

  ngOnInit() {

    this.getGoal();
  }



  getGoal(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.goalService.getGoal(id).subscribe(goal => this.goal = goal);
  }
}
