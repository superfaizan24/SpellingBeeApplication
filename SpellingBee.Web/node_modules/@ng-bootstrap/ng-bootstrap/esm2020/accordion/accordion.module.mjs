import { NgModule } from '@angular/core';
import { NgbAccordion, NgbPanel, NgbPanelContent, NgbPanelHeader, NgbPanelTitle, NgbPanelToggle } from './accordion';
import * as i0 from "@angular/core";
export { NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent, NgbPanelHeader, NgbPanelToggle, } from './accordion';
export { NgbAccordionConfig } from './accordion-config';
const NGB_ACCORDION_DIRECTIVES = [
    NgbAccordion,
    NgbPanel,
    NgbPanelTitle,
    NgbPanelContent,
    NgbPanelHeader,
    NgbPanelToggle,
];
export class NgbAccordionModule {
}
NgbAccordionModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: NgbAccordionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgbAccordionModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0", ngImport: i0, type: NgbAccordionModule, imports: [NgbAccordion,
        NgbPanel,
        NgbPanelTitle,
        NgbPanelContent,
        NgbPanelHeader,
        NgbPanelToggle], exports: [NgbAccordion,
        NgbPanel,
        NgbPanelTitle,
        NgbPanelContent,
        NgbPanelHeader,
        NgbPanelToggle] });
NgbAccordionModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: NgbAccordionModule, imports: [NgbAccordion] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: NgbAccordionModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: NGB_ACCORDION_DIRECTIVES,
                    exports: NGB_ACCORDION_DIRECTIVES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hY2NvcmRpb24vYWNjb3JkaW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFFckgsT0FBTyxFQUNOLFlBQVksRUFDWixRQUFRLEVBQ1IsYUFBYSxFQUNiLGVBQWUsRUFFZixjQUFjLEVBRWQsY0FBYyxHQUNkLE1BQU0sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE1BQU0sd0JBQXdCLEdBQUc7SUFDaEMsWUFBWTtJQUNaLFFBQVE7SUFDUixhQUFhO0lBQ2IsZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0NBQ2QsQ0FBQztBQU1GLE1BQU0sT0FBTyxrQkFBa0I7OytHQUFsQixrQkFBa0I7Z0hBQWxCLGtCQUFrQixZQVo5QixZQUFZO1FBQ1osUUFBUTtRQUNSLGFBQWE7UUFDYixlQUFlO1FBQ2YsY0FBYztRQUNkLGNBQWMsYUFMZCxZQUFZO1FBQ1osUUFBUTtRQUNSLGFBQWE7UUFDYixlQUFlO1FBQ2YsY0FBYztRQUNkLGNBQWM7Z0hBT0Ysa0JBQWtCLFlBWjlCLFlBQVk7MkZBWUEsa0JBQWtCO2tCQUo5QixRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRSx3QkFBd0I7b0JBQ2pDLE9BQU8sRUFBRSx3QkFBd0I7aUJBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmdiQWNjb3JkaW9uLCBOZ2JQYW5lbCwgTmdiUGFuZWxDb250ZW50LCBOZ2JQYW5lbEhlYWRlciwgTmdiUGFuZWxUaXRsZSwgTmdiUGFuZWxUb2dnbGUgfSBmcm9tICcuL2FjY29yZGlvbic7XG5cbmV4cG9ydCB7XG5cdE5nYkFjY29yZGlvbixcblx0TmdiUGFuZWwsXG5cdE5nYlBhbmVsVGl0bGUsXG5cdE5nYlBhbmVsQ29udGVudCxcblx0TmdiUGFuZWxDaGFuZ2VFdmVudCxcblx0TmdiUGFuZWxIZWFkZXIsXG5cdE5nYlBhbmVsSGVhZGVyQ29udGV4dCxcblx0TmdiUGFuZWxUb2dnbGUsXG59IGZyb20gJy4vYWNjb3JkaW9uJztcbmV4cG9ydCB7IE5nYkFjY29yZGlvbkNvbmZpZyB9IGZyb20gJy4vYWNjb3JkaW9uLWNvbmZpZyc7XG5cbmNvbnN0IE5HQl9BQ0NPUkRJT05fRElSRUNUSVZFUyA9IFtcblx0TmdiQWNjb3JkaW9uLFxuXHROZ2JQYW5lbCxcblx0TmdiUGFuZWxUaXRsZSxcblx0TmdiUGFuZWxDb250ZW50LFxuXHROZ2JQYW5lbEhlYWRlcixcblx0TmdiUGFuZWxUb2dnbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBOR0JfQUNDT1JESU9OX0RJUkVDVElWRVMsXG5cdGV4cG9ydHM6IE5HQl9BQ0NPUkRJT05fRElSRUNUSVZFUyxcbn0pXG5leHBvcnQgY2xhc3MgTmdiQWNjb3JkaW9uTW9kdWxlIHt9XG4iXX0=