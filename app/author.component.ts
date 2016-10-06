import {Component} from 'angular2/core';
import {AuthorService} from './author.service';

@Component({
	selector:'author',
	template:`<h2>Author List</h2>
				<ul>
					<li *ngFor="#author of authorList">
					{{author}}
					</li>
				</ul>
			`,
	providers: [AuthorService]
})

export class AuthorComponent{
	authorList;
	constructor(authorService:AuthorService){
		this.authorList=authorService.getAuthorList();
	}
}