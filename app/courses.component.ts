import {Component} from 'angular2/core';
import {CourseService} from './course.service';

@Component({
	selector:'courses',
	template:`<h1>Title: </h1>
				{{title}}
				<ul>
					<li *ngFor="#course of courses">
					{{course}}
					</li>
				</ul>
				`,
	providers: [CourseService]
})

export class CoursesComponent{
	title =  "Working AngularJS 2";
	courses;
	constructor(courseService: CourseService){
		this.courses=courseService.getCourses();
	}
}