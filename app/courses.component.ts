import {Component} from 'angular2/core'

@Component({
	selector:'courses',
	template:`<h1>Title: </h1>
				{{title}}
				<ul>
					<li *ngFor="#course of courses">
					{{course}}
					</li>
				</ul>
				`
})

export class CoursesComponent{
	title =  "Working AngularJS 2";
	courses = ["Math","English","Computer Programming"];
}