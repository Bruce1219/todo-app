import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.css'
})
export class PageContainerComponent {
  @ContentChild('title') titleElement!: ElementRef;

  @ContentChildren('button', { descendants: true })
  buttonElements!: QueryList<ElementRef>;

  ngOnInit(): void {
    console.log('Angular OnInit Life Cycle Hook');
  }

  ngDoCheck(): void {
    console.log('Angular ngOnCheck Life Cycle Hook');
  }

  ngAfterContentInit(): void {
    console.log(
      'Angular ngAfterContentInit Life Cycle Hook',
      this.titleElement,
      this.buttonElements
    );
  }

  ngAfterContentChecked(): void {
    console.log('Angular ngAfterContentChecked Life Cycle Hook');
  }
}
