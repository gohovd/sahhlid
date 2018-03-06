import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

	title = "How to Cut Cheese and Vegetables Like a God";
	author = "Goran H. Stronstad";
	day = 6;
	month = "March";
	longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis urna eros. Donec pulvinar, tellus id pretium consectetur, urna arcu placerat risus, id tincidunt nibh est a justo. Nulla volutpat a tellus sed ornare. In massa nibh, euismod non hendrerit ut, consequat a velit. Morbi ultrices efficitur felis, sed facilisis quam aliquam nec. Etiam at ex pharetra nisl dapibus imperdiet.";
	shortText = "Lorem ipsum dolor sit amet, consectetur adisciping elit.";

	constructor() { }

	ngOnInit() {
	}

}
