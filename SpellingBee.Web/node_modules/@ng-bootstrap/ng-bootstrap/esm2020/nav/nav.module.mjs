import { NgModule } from '@angular/core';
import { NgbNav, NgbNavContent, NgbNavItem, NgbNavLink } from './nav';
import { NgbNavOutlet, NgbNavPane } from './nav-outlet';
import * as i0 from "@angular/core";
export { NgbNav, NgbNavContent, NgbNavItem, NgbNavLink } from './nav';
export { NgbNavOutlet, NgbNavPane } from './nav-outlet';
export { NgbNavConfig } from './nav-config';
const NGB_NAV_DIRECTIVES = [NgbNavContent, NgbNav, NgbNavItem, NgbNavLink, NgbNavOutlet, NgbNavPane];
export class NgbNavModule {
}
NgbNavModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: NgbNavModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgbNavModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0", ngImport: i0, type: NgbNavModule, imports: [NgbNavContent, NgbNav, NgbNavItem, NgbNavLink, NgbNavOutlet, NgbNavPane], exports: [NgbNavContent, NgbNav, NgbNavItem, NgbNavLink, NgbNavOutlet, NgbNavPane] });
NgbNavModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: NgbNavModule, imports: [NgbNavOutlet] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: NgbNavModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: NGB_NAV_DIRECTIVES,
                    exports: NGB_NAV_DIRECTIVES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9uYXYvbmF2Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBRXhELE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUF3QixVQUFVLEVBQUUsVUFBVSxFQUFxQixNQUFNLE9BQU8sQ0FBQztBQUMvRyxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTVDLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBTXJHLE1BQU0sT0FBTyxZQUFZOzt5R0FBWixZQUFZOzBHQUFaLFlBQVksWUFORyxhQUFhLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFVBQVUsYUFBdkUsYUFBYSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxVQUFVOzBHQU10RixZQUFZLFlBTmtELFlBQVk7MkZBTTFFLFlBQVk7a0JBSnhCLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFLGtCQUFrQjtvQkFDM0IsT0FBTyxFQUFFLGtCQUFrQjtpQkFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ2JOYXYsIE5nYk5hdkNvbnRlbnQsIE5nYk5hdkl0ZW0sIE5nYk5hdkxpbmsgfSBmcm9tICcuL25hdic7XG5pbXBvcnQgeyBOZ2JOYXZPdXRsZXQsIE5nYk5hdlBhbmUgfSBmcm9tICcuL25hdi1vdXRsZXQnO1xuXG5leHBvcnQgeyBOZ2JOYXYsIE5nYk5hdkNvbnRlbnQsIE5nYk5hdkNvbnRlbnRDb250ZXh0LCBOZ2JOYXZJdGVtLCBOZ2JOYXZMaW5rLCBOZ2JOYXZDaGFuZ2VFdmVudCB9IGZyb20gJy4vbmF2JztcbmV4cG9ydCB7IE5nYk5hdk91dGxldCwgTmdiTmF2UGFuZSB9IGZyb20gJy4vbmF2LW91dGxldCc7XG5leHBvcnQgeyBOZ2JOYXZDb25maWcgfSBmcm9tICcuL25hdi1jb25maWcnO1xuXG5jb25zdCBOR0JfTkFWX0RJUkVDVElWRVMgPSBbTmdiTmF2Q29udGVudCwgTmdiTmF2LCBOZ2JOYXZJdGVtLCBOZ2JOYXZMaW5rLCBOZ2JOYXZPdXRsZXQsIE5nYk5hdlBhbmVdO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBOR0JfTkFWX0RJUkVDVElWRVMsXG5cdGV4cG9ydHM6IE5HQl9OQVZfRElSRUNUSVZFUyxcbn0pXG5leHBvcnQgY2xhc3MgTmdiTmF2TW9kdWxlIHt9XG4iXX0=