import { Component, ContentChildren, Directive, EventEmitter, Host, Input, Optional, Output, ViewEncapsulation, Inject, forwardRef, } from '@angular/core';
import { isString } from '../util/util';
import { ngbRunTransition } from '../util/transition/ngbTransition';
import { ngbCollapsingTransition } from '../util/transition/ngbCollapseTransition';
import { take } from 'rxjs/operators';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "./accordion-config";
let nextId = 0;
/**
 * A directive that wraps an accordion panel header with any HTML markup and a toggling button
 * marked with [`NgbPanelToggle`](#/components/accordion/api#NgbPanelToggle).
 * See the [header customization demo](#/components/accordion/examples#header) for more details.
 *
 * You can also use [`NgbPanelTitle`](#/components/accordion/api#NgbPanelTitle) to customize only the panel title.
 *
 * @since 4.1.0
 */
export class NgbPanelHeader {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgbPanelHeader.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: NgbPanelHeader, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
NgbPanelHeader.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.0", type: NgbPanelHeader, isStandalone: true, selector: "ng-template[ngbPanelHeader]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: NgbPanelHeader, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[ngbPanelHeader]', standalone: true }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; } });
/**
 * A directive that wraps only the panel title with HTML markup inside.
 *
 * You can also use [`NgbPanelHeader`](#/components/accordion/api#NgbPanelHeader) to customize the full panel header.
 */
export class NgbPanelTitle {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgbPanelTitle.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: NgbPanelTitle, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
NgbPanelTitle.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.0", type: NgbPanelTitle, isStandalone: true, selector: "ng-template[ngbPanelTitle]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: NgbPanelTitle, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[ngbPanelTitle]', standalone: true }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; } });
/**
 * A directive that wraps the accordion panel content.
 */
export class NgbPanelContent {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgbPanelContent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: NgbPanelContent, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
NgbPanelContent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.0", type: NgbPanelContent, isStandalone: true, selector: "ng-template[ngbPanelContent]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: NgbPanelContent, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[ngbPanelContent]', standalone: true }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; } });
/**
 * A directive that wraps an individual accordion panel with title and collapsible content.
 */
export class NgbPanel {
    constructor() {
        /**
         *  If `true`, the panel is disabled an can't be toggled.
         */
        this.disabled = false;
        /**
         *  An optional id for the panel that must be unique on the page.
         *
         *  If not provided, it will be auto-generated in the `ngb-panel-xxx` format.
         */
        this.id = `ngb-panel-${nextId++}`;
        this.isOpen = false;
        /* A flag to specified that the transition panel classes have been initialized */
        this.initClassDone = false;
        /* A flag to specified if the panel is currently being animated, to ensure its presence in the dom */
        this.transitionRunning = false;
        /**
         * An event emitted when the panel is shown, after the transition. It has no payload.
         *
         * @since 8.0.0
         */
        this.shown = new EventEmitter();
        /**
         * An event emitted when the panel is hidden, after the transition. It has no payload.
         *
         * @since 8.0.0
         */
        this.hidden = new EventEmitter();
    }
    ngAfterContentChecked() {
        // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
        // only @ContentChildren allows us to specify the {descendants: false} option.
        // Without {descendants: false} we are hitting bugs described in:
        // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
        this.titleTpl = this.titleTpls.first;
        this.headerTpl = this.headerTpls.first;
        this.contentTpl = this.contentTpls.first;
    }
}
NgbPanel.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: NgbPanel, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NgbPanel.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.0", type: NgbPanel, isStandalone: true, selector: "ngb-panel", inputs: { disabled: "disabled", id: "id", title: "title", type: "type", cardClass: "cardClass" }, outputs: { shown: "shown", hidden: "hidden" }, queries: [{ propertyName: "titleTpls", predicate: NgbPanelTitle }, { propertyName: "headerTpls", predicate: NgbPanelHeader }, { propertyName: "contentTpls", predicate: NgbPanelContent }], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: NgbPanel, decorators: [{
            type: Directive,
            args: [{ selector: 'ngb-panel', standalone: true }]
        }], propDecorators: { disabled: [{
                type: Input
            }], id: [{
                type: Input
            }], title: [{
                type: Input
            }], type: [{
                type: Input
            }], cardClass: [{
                type: Input
            }], shown: [{
                type: Output
            }], hidden: [{
                type: Output
            }], titleTpls: [{
                type: ContentChildren,
                args: [NgbPanelTitle, { descendants: false }]
            }], headerTpls: [{
                type: ContentChildren,
                args: [NgbPanelHeader, { descendants: false }]
            }], contentTpls: [{
                type: ContentChildren,
                args: [NgbPanelContent, { descendants: false }]
            }] } });
export class NgbRefDirective {
    constructor(_El) {
        this._El = _El;
        this.ngbRef = new EventEmitter();
    }
    ngOnInit() {
        this.ngbRef.emit(this._El.nativeElement);
    }
    ngOnDestroy() {
        this.ngbRef.emit(null);
    }
}
NgbRefDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: NgbRefDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
NgbRefDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.0", type: NgbRefDirective, isStandalone: true, selector: "[ngbRef]", outputs: { ngbRef: "ngbRef" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: NgbRefDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[ngbRef]', standalone: true }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { ngbRef: [{
                type: Output
            }] } });
/**
 * A directive to put on a button that toggles panel opening and closing.
 *
 * To be used inside the [`NgbPanelHeader`](#/components/accordion/api#NgbPanelHeader)
 *
 * @since 4.1.0
 */
export class NgbPanelToggle {
    constructor(accordion, panel) {
        this.accordion = accordion;
        this.panel = panel;
    }
    set ngbPanelToggle(panel) {
        if (panel) {
            this.panel = panel;
        }
    }
}
NgbPanelToggle.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: NgbPanelToggle, deps: [{ token: forwardRef(() => NgbAccordion) }, { token: NgbPanel, host: true, optional: true }], target: i0.ɵɵFactoryTarget.Directive });
NgbPanelToggle.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.0", type: NgbPanelToggle, isStandalone: true, selector: "button[ngbPanelToggle]", inputs: { ngbPanelToggle: "ngbPanelToggle" }, host: { attributes: { "type": "button" }, listeners: { "click": "accordion.toggle(panel.id)" }, properties: { "disabled": "panel.disabled", "class.collapsed": "!panel.isOpen", "attr.aria-expanded": "panel.isOpen", "attr.aria-controls": "panel.id" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: NgbPanelToggle, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button[ngbPanelToggle]',
                    standalone: true,
                    host: {
                        type: 'button',
                        '[disabled]': 'panel.disabled',
                        '[class.collapsed]': '!panel.isOpen',
                        '[attr.aria-expanded]': 'panel.isOpen',
                        '[attr.aria-controls]': 'panel.id',
                        '(click)': 'accordion.toggle(panel.id)',
                    },
                }]
        }], ctorParameters: function () { return [{ type: NgbAccordion, decorators: [{
                    type: Inject,
                    args: [forwardRef(() => NgbAccordion)]
                }] }, { type: NgbPanel, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }] }]; }, propDecorators: { ngbPanelToggle: [{
                type: Input
            }] } });
/**
 * Accordion is a collection of collapsible panels (bootstrap cards).
 *
 * It can ensure only one panel is opened at a time and allows to customize panel
 * headers.
 */
export class NgbAccordion {
    constructor(config, _ngZone, _changeDetector) {
        this._ngZone = _ngZone;
        this._changeDetector = _changeDetector;
        /**
         * An array or comma separated strings of panel ids that should be opened **initially**.
         *
         * For subsequent changes use methods like `expand()`, `collapse()`, etc. and
         * the `(panelChange)` event.
         */
        this.activeIds = [];
        /**
         * If `true`, panel content will be detached from DOM and not simply hidden when the panel is collapsed.
         */
        this.destroyOnHide = true;
        /**
         * Event emitted right before the panel toggle happens.
         *
         * See [NgbPanelChangeEvent](#/components/accordion/api#NgbPanelChangeEvent) for payload details.
         */
        this.panelChange = new EventEmitter();
        /**
         * An event emitted when the expanding animation is finished on the panel. The payload is the panel id.
         *
         * @since 8.0.0
         */
        this.shown = new EventEmitter();
        /**
         * An event emitted when the collapsing animation is finished on the panel, and before the panel element is removed.
         * The payload is the panel id.
         *
         * @since 8.0.0
         */
        this.hidden = new EventEmitter();
        this.animation = config.animation;
        this.type = config.type;
        this.closeOtherPanels = config.closeOthers;
    }
    /**
     * Checks if a panel with a given id is expanded.
     */
    isExpanded(panelId) {
        return this.activeIds.indexOf(panelId) > -1;
    }
    /**
     * Expands a panel with a given id.
     *
     * Has no effect if the panel is already expanded or disabled.
     */
    expand(panelId) {
        this._changeOpenState(this._findPanelById(panelId), true);
    }
    /**
     * Expands all panels, if `[closeOthers]` is `false`.
     *
     * If `[closeOthers]` is `true`, it will expand the first panel, unless there is already a panel opened.
     */
    expandAll() {
        if (this.closeOtherPanels) {
            if (this.activeIds.length === 0 && this.panels.length) {
                this._changeOpenState(this.panels.first, true);
            }
        }
        else {
            this.panels.forEach((panel) => this._changeOpenState(panel, true));
        }
    }
    /**
     * Collapses a panel with the given id.
     *
     * Has no effect if the panel is already collapsed or disabled.
     */
    collapse(panelId) {
        this._changeOpenState(this._findPanelById(panelId), false);
    }
    /**
     * Collapses all opened panels.
     */
    collapseAll() {
        this.panels.forEach((panel) => {
            this._changeOpenState(panel, false);
        });
    }
    /**
     * Toggles a panel with the given id.
     *
     * Has no effect if the panel is disabled.
     */
    toggle(panelId) {
        const panel = this._findPanelById(panelId);
        if (panel) {
            this._changeOpenState(panel, !panel.isOpen);
        }
    }
    ngAfterContentChecked() {
        // active id updates
        if (isString(this.activeIds)) {
            this.activeIds = this.activeIds.split(/\s*,\s*/);
        }
        // update panels open states
        this.panels.forEach((panel) => {
            panel.isOpen = !panel.disabled && this.activeIds.indexOf(panel.id) > -1;
        });
        // closeOthers updates
        if (this.activeIds.length > 1 && this.closeOtherPanels) {
            this._closeOthers(this.activeIds[0], false);
            this._updateActiveIds();
        }
        // Setup the initial classes here
        this._ngZone.onStable.pipe(take(1)).subscribe(() => {
            this.panels.forEach((panel) => {
                const panelElement = panel.panelDiv;
                if (panelElement) {
                    if (!panel.initClassDone) {
                        panel.initClassDone = true;
                        ngbRunTransition(this._ngZone, panelElement, ngbCollapsingTransition, {
                            animation: false,
                            runningTransition: 'continue',
                            context: { direction: panel.isOpen ? 'show' : 'hide', dimension: 'height' },
                        });
                    }
                }
                else {
                    // Classes must be initialized next time it will be in the dom
                    panel.initClassDone = false;
                }
            });
        });
    }
    _changeOpenState(panel, nextState) {
        if (panel != null && !panel.disabled && panel.isOpen !== nextState) {
            let defaultPrevented = false;
            this.panelChange.emit({
                panelId: panel.id,
                nextState: nextState,
                preventDefault: () => {
                    defaultPrevented = true;
                },
            });
            if (!defaultPrevented) {
                panel.isOpen = nextState;
                panel.transitionRunning = true;
                if (nextState && this.closeOtherPanels) {
                    this._closeOthers(panel.id);
                }
                this._updateActiveIds();
                this._runTransitions(this.animation);
            }
        }
    }
    _closeOthers(panelId, enableTransition = true) {
        this.panels.forEach((panel) => {
            if (panel.id !== panelId && panel.isOpen) {
                panel.isOpen = false;
                panel.transitionRunning = enableTransition;
            }
        });
    }
    _findPanelById(panelId) {
        return this.panels.find((p) => p.id === panelId) || null;
    }
    _updateActiveIds() {
        this.activeIds = this.panels.filter((panel) => panel.isOpen && !panel.disabled).map((panel) => panel.id);
    }
    _runTransitions(animation) {
        // detectChanges is performed to ensure that all panels are in the dom (via transitionRunning = true)
        // before starting the animation
        this._changeDetector.detectChanges();
        this.panels.forEach((panel) => {
            // When panel.transitionRunning is true, the transition needs to be started OR reversed,
            // The direction (show or hide) is choosen by each panel.isOpen state
            if (panel.transitionRunning) {
                const panelElement = panel.panelDiv;
                ngbRunTransition(this._ngZone, panelElement, ngbCollapsingTransition, {
                    animation,
                    runningTransition: 'stop',
                    context: { direction: panel.isOpen ? 'show' : 'hide', dimension: 'height' },
                }).subscribe(() => {
                    panel.transitionRunning = false;
                    const { id } = panel;
                    if (panel.isOpen) {
                        panel.shown.emit();
                        this.shown.emit(id);
                    }
                    else {
                        panel.hidden.emit();
                        this.hidden.emit(id);
                    }
                });
            }
        });
    }
}
NgbAccordion.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: NgbAccordion, deps: [{ token: i1.NgbAccordionConfig }, { token: i0.NgZone }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NgbAccordion.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0", type: NgbAccordion, isStandalone: true, selector: "ngb-accordion", inputs: { animation: "animation", activeIds: "activeIds", closeOtherPanels: ["closeOthers", "closeOtherPanels"], destroyOnHide: "destroyOnHide", type: "type" }, outputs: { panelChange: "panelChange", shown: "shown", hidden: "hidden" }, host: { attributes: { "role": "tablist" }, properties: { "attr.aria-multiselectable": "!closeOtherPanels" }, classAttribute: "accordion" }, queries: [{ propertyName: "panels", predicate: NgbPanel }], exportAs: ["ngbAccordion"], ngImport: i0, template: `
		<ng-template #t ngbPanelHeader let-panel>
			<button class="accordion-button" [ngbPanelToggle]="panel">
				{{ panel.title }}
				<ng-template [ngTemplateOutlet]="panel.titleTpl?.templateRef"></ng-template>
			</button>
		</ng-template>
		<ng-template ngFor let-panel [ngForOf]="panels">
			<div [class]="'accordion-item ' + (panel.cardClass || '')">
				<div
					role="tab"
					id="{{ panel.id }}-header"
					[class]="'accordion-header ' + (panel.type ? 'bg-' + panel.type : type ? 'bg-' + type : '')"
				>
					<ng-template
						[ngTemplateOutlet]="panel.headerTpl?.templateRef || t"
						[ngTemplateOutletContext]="{ $implicit: panel, opened: panel.isOpen }"
					></ng-template>
				</div>
				<div
					id="{{ panel.id }}"
					(ngbRef)="panel.panelDiv = $event"
					role="tabpanel"
					[attr.aria-labelledby]="panel.id + '-header'"
					*ngIf="!destroyOnHide || panel.isOpen || panel.transitionRunning"
				>
					<div class="accordion-body">
						<ng-template [ngTemplateOutlet]="panel.contentTpl?.templateRef || null"></ng-template>
					</div>
				</div>
			</div>
		</ng-template>
	`, isInline: true, dependencies: [{ kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: NgbPanelToggle, selector: "button[ngbPanelToggle]", inputs: ["ngbPanelToggle"] }, { kind: "directive", type: NgbRefDirective, selector: "[ngbRef]", outputs: ["ngbRef"] }, { kind: "directive", type: NgbPanelHeader, selector: "ng-template[ngbPanelHeader]" }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: NgbAccordion, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngb-accordion',
                    exportAs: 'ngbAccordion',
                    standalone: true,
                    imports: [NgFor, NgTemplateOutlet, NgbPanelToggle, NgbRefDirective, NgbPanelHeader, NgIf],
                    encapsulation: ViewEncapsulation.None,
                    host: { class: 'accordion', role: 'tablist', '[attr.aria-multiselectable]': '!closeOtherPanels' },
                    template: `
		<ng-template #t ngbPanelHeader let-panel>
			<button class="accordion-button" [ngbPanelToggle]="panel">
				{{ panel.title }}
				<ng-template [ngTemplateOutlet]="panel.titleTpl?.templateRef"></ng-template>
			</button>
		</ng-template>
		<ng-template ngFor let-panel [ngForOf]="panels">
			<div [class]="'accordion-item ' + (panel.cardClass || '')">
				<div
					role="tab"
					id="{{ panel.id }}-header"
					[class]="'accordion-header ' + (panel.type ? 'bg-' + panel.type : type ? 'bg-' + type : '')"
				>
					<ng-template
						[ngTemplateOutlet]="panel.headerTpl?.templateRef || t"
						[ngTemplateOutletContext]="{ $implicit: panel, opened: panel.isOpen }"
					></ng-template>
				</div>
				<div
					id="{{ panel.id }}"
					(ngbRef)="panel.panelDiv = $event"
					role="tabpanel"
					[attr.aria-labelledby]="panel.id + '-header'"
					*ngIf="!destroyOnHide || panel.isOpen || panel.transitionRunning"
				>
					<div class="accordion-body">
						<ng-template [ngTemplateOutlet]="panel.contentTpl?.templateRef || null"></ng-template>
					</div>
				</div>
			</div>
		</ng-template>
	`,
                }]
        }], ctorParameters: function () { return [{ type: i1.NgbAccordionConfig }, { type: i0.NgZone }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { panels: [{
                type: ContentChildren,
                args: [NgbPanel]
            }], animation: [{
                type: Input
            }], activeIds: [{
                type: Input
            }], closeOtherPanels: [{
                type: Input,
                args: ['closeOthers']
            }], destroyOnHide: [{
                type: Input
            }], type: [{
                type: Input
            }], panelChange: [{
                type: Output
            }], shown: [{
                type: Output
            }], hidden: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FjY29yZGlvbi9hY2NvcmRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUdOLFNBQVMsRUFDVCxlQUFlLEVBQ2YsU0FBUyxFQUVULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBR04saUJBQWlCLEVBSWpCLE1BQU0sRUFDTixVQUFVLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUd4QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRWhFLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztBQWNmOzs7Ozs7OztHQVFHO0FBRUgsTUFBTSxPQUFPLGNBQWM7SUFDMUIsWUFBbUIsV0FBNkI7UUFBN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO0lBQUcsQ0FBQzs7MkdBRHhDLGNBQWM7K0ZBQWQsY0FBYzsyRkFBZCxjQUFjO2tCQUQxQixTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLDZCQUE2QixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7O0FBS3hFOzs7O0dBSUc7QUFFSCxNQUFNLE9BQU8sYUFBYTtJQUN6QixZQUFtQixXQUE2QjtRQUE3QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7SUFBRyxDQUFDOzswR0FEeEMsYUFBYTs4RkFBYixhQUFhOzJGQUFiLGFBQWE7a0JBRHpCLFNBQVM7bUJBQUMsRUFBRSxRQUFRLEVBQUUsNEJBQTRC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LENBQUM7YUFDSDtRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7eUdBMU9XLFlBQVk7NkZBQVosWUFBWSx3ZEFDUCxRQUFRLHlEQW5DZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQ1QsNERBbkNTLEtBQUssbUhBQUUsZ0JBQWdCLG9KQTFCckIsY0FBYywrRkFoQ2QsZUFBZSwwRUE5SGYsY0FBYyx3RUF3TDBELElBQUk7MkZBcUM1RSxZQUFZO2tCQXpDeEIsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDO29CQUN6RixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLDZCQUE2QixFQUFFLG1CQUFtQixFQUFFO29CQUNqRyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBZ0NUO2lCQUNEOzhKQUUyQixNQUFNO3NCQUFoQyxlQUFlO3VCQUFDLFFBQVE7Z0JBT2hCLFNBQVM7c0JBQWpCLEtBQUs7Z0JBUUcsU0FBUztzQkFBakIsS0FBSztnQkFPZ0IsZ0JBQWdCO3NCQUFyQyxLQUFLO3VCQUFDLGFBQWE7Z0JBS1gsYUFBYTtzQkFBckIsS0FBSztnQkFRRyxJQUFJO3NCQUFaLEtBQUs7Z0JBT0ksV0FBVztzQkFBcEIsTUFBTTtnQkFPRyxLQUFLO3NCQUFkLE1BQU07Z0JBUUcsTUFBTTtzQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QWZ0ZXJDb250ZW50Q2hlY2tlZCxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0Q29udGVudENoaWxkcmVuLFxuXHREaXJlY3RpdmUsXG5cdEVsZW1lbnRSZWYsXG5cdEV2ZW50RW1pdHRlcixcblx0SG9zdCxcblx0SW5wdXQsXG5cdE9wdGlvbmFsLFxuXHRPdXRwdXQsXG5cdFF1ZXJ5TGlzdCxcblx0VGVtcGxhdGVSZWYsXG5cdFZpZXdFbmNhcHN1bGF0aW9uLFxuXHROZ1pvbmUsXG5cdE9uSW5pdCxcblx0T25EZXN0cm95LFxuXHRJbmplY3QsXG5cdGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5cbmltcG9ydCB7IE5nYkFjY29yZGlvbkNvbmZpZyB9IGZyb20gJy4vYWNjb3JkaW9uLWNvbmZpZyc7XG5pbXBvcnQgeyBuZ2JSdW5UcmFuc2l0aW9uIH0gZnJvbSAnLi4vdXRpbC90cmFuc2l0aW9uL25nYlRyYW5zaXRpb24nO1xuaW1wb3J0IHsgbmdiQ29sbGFwc2luZ1RyYW5zaXRpb24gfSBmcm9tICcuLi91dGlsL3RyYW5zaXRpb24vbmdiQ29sbGFwc2VUcmFuc2l0aW9uJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOZ0ZvciwgTmdJZiwgTmdUZW1wbGF0ZU91dGxldCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmxldCBuZXh0SWQgPSAwO1xuXG4vKipcbiAqIFRoZSBjb250ZXh0IGZvciB0aGUgW05nYlBhbmVsSGVhZGVyXSgjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FwaSNOZ2JQYW5lbEhlYWRlcikgdGVtcGxhdGVcbiAqXG4gKiBAc2luY2UgNC4xLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ2JQYW5lbEhlYWRlckNvbnRleHQge1xuXHQvKipcblx0ICogYFRydWVgIGlmIGN1cnJlbnQgcGFuZWwgaXMgb3BlbmVkXG5cdCAqL1xuXHRvcGVuZWQ6IGJvb2xlYW47XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCB3cmFwcyBhbiBhY2NvcmRpb24gcGFuZWwgaGVhZGVyIHdpdGggYW55IEhUTUwgbWFya3VwIGFuZCBhIHRvZ2dsaW5nIGJ1dHRvblxuICogbWFya2VkIHdpdGggW2BOZ2JQYW5lbFRvZ2dsZWBdKCMvY29tcG9uZW50cy9hY2NvcmRpb24vYXBpI05nYlBhbmVsVG9nZ2xlKS5cbiAqIFNlZSB0aGUgW2hlYWRlciBjdXN0b21pemF0aW9uIGRlbW9dKCMvY29tcG9uZW50cy9hY2NvcmRpb24vZXhhbXBsZXMjaGVhZGVyKSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBjYW4gYWxzbyB1c2UgW2BOZ2JQYW5lbFRpdGxlYF0oIy9jb21wb25lbnRzL2FjY29yZGlvbi9hcGkjTmdiUGFuZWxUaXRsZSkgdG8gY3VzdG9taXplIG9ubHkgdGhlIHBhbmVsIHRpdGxlLlxuICpcbiAqIEBzaW5jZSA0LjEuMFxuICovXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVtuZ2JQYW5lbEhlYWRlcl0nLCBzdGFuZGFsb25lOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgTmdiUGFuZWxIZWFkZXIge1xuXHRjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHt9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCB3cmFwcyBvbmx5IHRoZSBwYW5lbCB0aXRsZSB3aXRoIEhUTUwgbWFya3VwIGluc2lkZS5cbiAqXG4gKiBZb3UgY2FuIGFsc28gdXNlIFtgTmdiUGFuZWxIZWFkZXJgXSgjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FwaSNOZ2JQYW5lbEhlYWRlcikgdG8gY3VzdG9taXplIHRoZSBmdWxsIHBhbmVsIGhlYWRlci5cbiAqL1xuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbbmdiUGFuZWxUaXRsZV0nLCBzdGFuZGFsb25lOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgTmdiUGFuZWxUaXRsZSB7XG5cdGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge31cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IHdyYXBzIHRoZSBhY2NvcmRpb24gcGFuZWwgY29udGVudC5cbiAqL1xuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbbmdiUGFuZWxDb250ZW50XScsIHN0YW5kYWxvbmU6IHRydWUgfSlcbmV4cG9ydCBjbGFzcyBOZ2JQYW5lbENvbnRlbnQge1xuXHRjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHt9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCB3cmFwcyBhbiBpbmRpdmlkdWFsIGFjY29yZGlvbiBwYW5lbCB3aXRoIHRpdGxlIGFuZCBjb2xsYXBzaWJsZSBjb250ZW50LlxuICovXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICduZ2ItcGFuZWwnLCBzdGFuZGFsb25lOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgTmdiUGFuZWwgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcblx0LyoqXG5cdCAqICBJZiBgdHJ1ZWAsIHRoZSBwYW5lbCBpcyBkaXNhYmxlZCBhbiBjYW4ndCBiZSB0b2dnbGVkLlxuXHQgKi9cblx0QElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcblxuXHQvKipcblx0ICogIEFuIG9wdGlvbmFsIGlkIGZvciB0aGUgcGFuZWwgdGhhdCBtdXN0IGJlIHVuaXF1ZSBvbiB0aGUgcGFnZS5cblx0ICpcblx0ICogIElmIG5vdCBwcm92aWRlZCwgaXQgd2lsbCBiZSBhdXRvLWdlbmVyYXRlZCBpbiB0aGUgYG5nYi1wYW5lbC14eHhgIGZvcm1hdC5cblx0ICovXG5cdEBJbnB1dCgpIGlkID0gYG5nYi1wYW5lbC0ke25leHRJZCsrfWA7XG5cblx0aXNPcGVuID0gZmFsc2U7XG5cblx0LyogQSBmbGFnIHRvIHNwZWNpZmllZCB0aGF0IHRoZSB0cmFuc2l0aW9uIHBhbmVsIGNsYXNzZXMgaGF2ZSBiZWVuIGluaXRpYWxpemVkICovXG5cdGluaXRDbGFzc0RvbmUgPSBmYWxzZTtcblxuXHQvKiBBIGZsYWcgdG8gc3BlY2lmaWVkIGlmIHRoZSBwYW5lbCBpcyBjdXJyZW50bHkgYmVpbmcgYW5pbWF0ZWQsIHRvIGVuc3VyZSBpdHMgcHJlc2VuY2UgaW4gdGhlIGRvbSAqL1xuXHR0cmFuc2l0aW9uUnVubmluZyA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiAgVGhlIHBhbmVsIHRpdGxlLlxuXHQgKlxuXHQgKiAgWW91IGNhbiBhbHRlcm5hdGl2ZWx5IHVzZSBbYE5nYlBhbmVsVGl0bGVgXSgjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FwaSNOZ2JQYW5lbFRpdGxlKSB0byBzZXQgcGFuZWwgdGl0bGUuXG5cdCAqL1xuXHRASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXG5cdC8qKlxuXHQgKiBUeXBlIG9mIHRoZSBjdXJyZW50IHBhbmVsLlxuXHQgKlxuXHQgKiBCb290c3RyYXAgcHJvdmlkZXMgc3R5bGVzIGZvciB0aGUgZm9sbG93aW5nIHR5cGVzOiBgJ3N1Y2Nlc3MnYCwgYCdpbmZvJ2AsIGAnd2FybmluZydgLCBgJ2RhbmdlcidgLCBgJ3ByaW1hcnknYCxcblx0ICogYCdzZWNvbmRhcnknYCwgYCdsaWdodCdgIGFuZCBgJ2RhcmsnYC5cblx0ICovXG5cdEBJbnB1dCgpIHR5cGU6IHN0cmluZztcblxuXHQvKipcblx0ICogQW4gb3B0aW9uYWwgY2xhc3MgYXBwbGllZCB0byB0aGUgYWNjb3JkaW9uIGNhcmQgZWxlbWVudCB0aGF0IHdyYXBzIGJvdGggcGFuZWwgdGl0bGUgYW5kIGNvbnRlbnQuXG5cdCAqXG5cdCAqIEBzaW5jZSA1LjMuMFxuXHQgKi9cblx0QElucHV0KCkgY2FyZENsYXNzOiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgcGFuZWwgaXMgc2hvd24sIGFmdGVyIHRoZSB0cmFuc2l0aW9uLiBJdCBoYXMgbm8gcGF5bG9hZC5cblx0ICpcblx0ICogQHNpbmNlIDguMC4wXG5cdCAqL1xuXHRAT3V0cHV0KCkgc2hvd24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgcGFuZWwgaXMgaGlkZGVuLCBhZnRlciB0aGUgdHJhbnNpdGlvbi4gSXQgaGFzIG5vIHBheWxvYWQuXG5cdCAqXG5cdCAqIEBzaW5jZSA4LjAuMFxuXHQgKi9cblx0QE91dHB1dCgpIGhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHR0aXRsZVRwbD86IE5nYlBhbmVsVGl0bGU7XG5cdGhlYWRlclRwbD86IE5nYlBhbmVsSGVhZGVyO1xuXHRjb250ZW50VHBsPzogTmdiUGFuZWxDb250ZW50O1xuXHRwYW5lbERpdjogSFRNTEVsZW1lbnQgfCBudWxsO1xuXG5cdEBDb250ZW50Q2hpbGRyZW4oTmdiUGFuZWxUaXRsZSwgeyBkZXNjZW5kYW50czogZmFsc2UgfSkgdGl0bGVUcGxzOiBRdWVyeUxpc3Q8TmdiUGFuZWxUaXRsZT47XG5cdEBDb250ZW50Q2hpbGRyZW4oTmdiUGFuZWxIZWFkZXIsIHsgZGVzY2VuZGFudHM6IGZhbHNlIH0pIGhlYWRlclRwbHM6IFF1ZXJ5TGlzdDxOZ2JQYW5lbEhlYWRlcj47XG5cdEBDb250ZW50Q2hpbGRyZW4oTmdiUGFuZWxDb250ZW50LCB7IGRlc2NlbmRhbnRzOiBmYWxzZSB9KSBjb250ZW50VHBsczogUXVlcnlMaXN0PE5nYlBhbmVsQ29udGVudD47XG5cblx0bmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuXHRcdC8vIFdlIGFyZSB1c2luZyBAQ29udGVudENoaWxkcmVuIGluc3RlYWQgb2YgQENvbnRlbnRDaGlsZCBhcyBpbiB0aGUgQW5ndWxhciB2ZXJzaW9uIGJlaW5nIHVzZWRcblx0XHQvLyBvbmx5IEBDb250ZW50Q2hpbGRyZW4gYWxsb3dzIHVzIHRvIHNwZWNpZnkgdGhlIHtkZXNjZW5kYW50czogZmFsc2V9IG9wdGlvbi5cblx0XHQvLyBXaXRob3V0IHtkZXNjZW5kYW50czogZmFsc2V9IHdlIGFyZSBoaXR0aW5nIGJ1Z3MgZGVzY3JpYmVkIGluOlxuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9uZy1ib290c3RyYXAvbmctYm9vdHN0cmFwL2lzc3Vlcy8yMjQwXG5cdFx0dGhpcy50aXRsZVRwbCA9IHRoaXMudGl0bGVUcGxzLmZpcnN0O1xuXHRcdHRoaXMuaGVhZGVyVHBsID0gdGhpcy5oZWFkZXJUcGxzLmZpcnN0O1xuXHRcdHRoaXMuY29udGVudFRwbCA9IHRoaXMuY29udGVudFRwbHMuZmlyc3Q7XG5cdH1cbn1cblxuLyoqXG4gKiBBbiBldmVudCBlbWl0dGVkIHJpZ2h0IGJlZm9yZSB0b2dnbGluZyBhbiBhY2NvcmRpb24gcGFuZWwuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmdiUGFuZWxDaGFuZ2VFdmVudCB7XG5cdC8qKlxuXHQgKiBUaGUgaWQgb2YgdGhlIGFjY29yZGlvbiBwYW5lbCBiZWluZyB0b2dnbGVkLlxuXHQgKi9cblx0cGFuZWxJZDogc3RyaW5nO1xuXG5cdC8qKlxuXHQgKiBUaGUgbmV4dCBzdGF0ZSBvZiB0aGUgcGFuZWwuXG5cdCAqXG5cdCAqIGB0cnVlYCBpZiBpdCB3aWxsIGJlIG9wZW5lZCwgYGZhbHNlYCBpZiBjbG9zZWQuXG5cdCAqL1xuXHRuZXh0U3RhdGU6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIENhbGxpbmcgdGhpcyBmdW5jdGlvbiB3aWxsIHByZXZlbnQgcGFuZWwgdG9nZ2xpbmcuXG5cdCAqL1xuXHRwcmV2ZW50RGVmYXVsdDogKCkgPT4gdm9pZDtcbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nYlJlZl0nLCBzdGFuZGFsb25lOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgTmdiUmVmRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXHRAT3V0cHV0KCkgbmdiUmVmID0gbmV3IEV2ZW50RW1pdHRlcjxIVE1MRWxlbWVudCB8IG51bGw+KCk7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX0VsOiBFbGVtZW50UmVmKSB7fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMubmdiUmVmLmVtaXQodGhpcy5fRWwubmF0aXZlRWxlbWVudCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLm5nYlJlZi5lbWl0KG51bGwpO1xuXHR9XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gcHV0IG9uIGEgYnV0dG9uIHRoYXQgdG9nZ2xlcyBwYW5lbCBvcGVuaW5nIGFuZCBjbG9zaW5nLlxuICpcbiAqIFRvIGJlIHVzZWQgaW5zaWRlIHRoZSBbYE5nYlBhbmVsSGVhZGVyYF0oIy9jb21wb25lbnRzL2FjY29yZGlvbi9hcGkjTmdiUGFuZWxIZWFkZXIpXG4gKlxuICogQHNpbmNlIDQuMS4wXG4gKi9cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2J1dHRvbltuZ2JQYW5lbFRvZ2dsZV0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRob3N0OiB7XG5cdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0J1tkaXNhYmxlZF0nOiAncGFuZWwuZGlzYWJsZWQnLFxuXHRcdCdbY2xhc3MuY29sbGFwc2VkXSc6ICchcGFuZWwuaXNPcGVuJyxcblx0XHQnW2F0dHIuYXJpYS1leHBhbmRlZF0nOiAncGFuZWwuaXNPcGVuJyxcblx0XHQnW2F0dHIuYXJpYS1jb250cm9sc10nOiAncGFuZWwuaWQnLFxuXHRcdCcoY2xpY2spJzogJ2FjY29yZGlvbi50b2dnbGUocGFuZWwuaWQpJyxcblx0fSxcbn0pXG5leHBvcnQgY2xhc3MgTmdiUGFuZWxUb2dnbGUge1xuXHRzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbmdiUGFuZWxUb2dnbGU6IE5nYlBhbmVsIHwgJyc7XG5cblx0QElucHV0KClcblx0c2V0IG5nYlBhbmVsVG9nZ2xlKHBhbmVsOiBOZ2JQYW5lbCkge1xuXHRcdGlmIChwYW5lbCkge1xuXHRcdFx0dGhpcy5wYW5lbCA9IHBhbmVsO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBOZ2JBY2NvcmRpb24pKSBwdWJsaWMgYWNjb3JkaW9uOiBOZ2JBY2NvcmRpb24sXG5cdFx0QE9wdGlvbmFsKCkgQEhvc3QoKSBwdWJsaWMgcGFuZWw6IE5nYlBhbmVsLFxuXHQpIHt9XG59XG5cbi8qKlxuICogQWNjb3JkaW9uIGlzIGEgY29sbGVjdGlvbiBvZiBjb2xsYXBzaWJsZSBwYW5lbHMgKGJvb3RzdHJhcCBjYXJkcykuXG4gKlxuICogSXQgY2FuIGVuc3VyZSBvbmx5IG9uZSBwYW5lbCBpcyBvcGVuZWQgYXQgYSB0aW1lIGFuZCBhbGxvd3MgdG8gY3VzdG9taXplIHBhbmVsXG4gKiBoZWFkZXJzLlxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICduZ2ItYWNjb3JkaW9uJyxcblx0ZXhwb3J0QXM6ICduZ2JBY2NvcmRpb24nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRpbXBvcnRzOiBbTmdGb3IsIE5nVGVtcGxhdGVPdXRsZXQsIE5nYlBhbmVsVG9nZ2xlLCBOZ2JSZWZEaXJlY3RpdmUsIE5nYlBhbmVsSGVhZGVyLCBOZ0lmXSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDogeyBjbGFzczogJ2FjY29yZGlvbicsIHJvbGU6ICd0YWJsaXN0JywgJ1thdHRyLmFyaWEtbXVsdGlzZWxlY3RhYmxlXSc6ICchY2xvc2VPdGhlclBhbmVscycgfSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgI3QgbmdiUGFuZWxIZWFkZXIgbGV0LXBhbmVsPlxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cImFjY29yZGlvbi1idXR0b25cIiBbbmdiUGFuZWxUb2dnbGVdPVwicGFuZWxcIj5cblx0XHRcdFx0e3sgcGFuZWwudGl0bGUgfX1cblx0XHRcdFx0PG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInBhbmVsLnRpdGxlVHBsPy50ZW1wbGF0ZVJlZlwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRcdDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtcGFuZWwgW25nRm9yT2ZdPVwicGFuZWxzXCI+XG5cdFx0XHQ8ZGl2IFtjbGFzc109XCInYWNjb3JkaW9uLWl0ZW0gJyArIChwYW5lbC5jYXJkQ2xhc3MgfHwgJycpXCI+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRyb2xlPVwidGFiXCJcblx0XHRcdFx0XHRpZD1cInt7IHBhbmVsLmlkIH19LWhlYWRlclwiXG5cdFx0XHRcdFx0W2NsYXNzXT1cIidhY2NvcmRpb24taGVhZGVyICcgKyAocGFuZWwudHlwZSA/ICdiZy0nICsgcGFuZWwudHlwZSA6IHR5cGUgPyAnYmctJyArIHR5cGUgOiAnJylcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlXG5cdFx0XHRcdFx0XHRbbmdUZW1wbGF0ZU91dGxldF09XCJwYW5lbC5oZWFkZXJUcGw/LnRlbXBsYXRlUmVmIHx8IHRcIlxuXHRcdFx0XHRcdFx0W25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBwYW5lbCwgb3BlbmVkOiBwYW5lbC5pc09wZW4gfVwiXG5cdFx0XHRcdFx0PjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0aWQ9XCJ7eyBwYW5lbC5pZCB9fVwiXG5cdFx0XHRcdFx0KG5nYlJlZik9XCJwYW5lbC5wYW5lbERpdiA9ICRldmVudFwiXG5cdFx0XHRcdFx0cm9sZT1cInRhYnBhbmVsXCJcblx0XHRcdFx0XHRbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwicGFuZWwuaWQgKyAnLWhlYWRlcidcIlxuXHRcdFx0XHRcdCpuZ0lmPVwiIWRlc3Ryb3lPbkhpZGUgfHwgcGFuZWwuaXNPcGVuIHx8IHBhbmVsLnRyYW5zaXRpb25SdW5uaW5nXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhY2NvcmRpb24tYm9keVwiPlxuXHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInBhbmVsLmNvbnRlbnRUcGw/LnRlbXBsYXRlUmVmIHx8IG51bGxcIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIE5nYkFjY29yZGlvbiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuXHRAQ29udGVudENoaWxkcmVuKE5nYlBhbmVsKSBwYW5lbHM6IFF1ZXJ5TGlzdDxOZ2JQYW5lbD47XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYWNjb3JkaW9uIHdpbGwgYmUgYW5pbWF0ZWQuXG5cdCAqXG5cdCAqIEBzaW5jZSA4LjAuMFxuXHQgKi9cblx0QElucHV0KCkgYW5pbWF0aW9uO1xuXG5cdC8qKlxuXHQgKiBBbiBhcnJheSBvciBjb21tYSBzZXBhcmF0ZWQgc3RyaW5ncyBvZiBwYW5lbCBpZHMgdGhhdCBzaG91bGQgYmUgb3BlbmVkICoqaW5pdGlhbGx5KiouXG5cdCAqXG5cdCAqIEZvciBzdWJzZXF1ZW50IGNoYW5nZXMgdXNlIG1ldGhvZHMgbGlrZSBgZXhwYW5kKClgLCBgY29sbGFwc2UoKWAsIGV0Yy4gYW5kXG5cdCAqIHRoZSBgKHBhbmVsQ2hhbmdlKWAgZXZlbnQuXG5cdCAqL1xuXHRASW5wdXQoKSBhY3RpdmVJZHM6IHN0cmluZyB8IHJlYWRvbmx5IHN0cmluZ1tdID0gW107XG5cblx0LyoqXG5cdCAqICBJZiBgdHJ1ZWAsIG9ubHkgb25lIHBhbmVsIGNvdWxkIGJlIG9wZW5lZCBhdCBhIHRpbWUuXG5cdCAqXG5cdCAqICBPcGVuaW5nIGEgbmV3IHBhbmVsIHdpbGwgY2xvc2Ugb3RoZXJzLlxuXHQgKi9cblx0QElucHV0KCdjbG9zZU90aGVycycpIGNsb3NlT3RoZXJQYW5lbHM6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgcGFuZWwgY29udGVudCB3aWxsIGJlIGRldGFjaGVkIGZyb20gRE9NIGFuZCBub3Qgc2ltcGx5IGhpZGRlbiB3aGVuIHRoZSBwYW5lbCBpcyBjb2xsYXBzZWQuXG5cdCAqL1xuXHRASW5wdXQoKSBkZXN0cm95T25IaWRlID0gdHJ1ZTtcblxuXHQvKipcblx0ICogVHlwZSBvZiBwYW5lbHMuXG5cdCAqXG5cdCAqIEJvb3RzdHJhcCBwcm92aWRlcyBzdHlsZXMgZm9yIHRoZSBmb2xsb3dpbmcgdHlwZXM6IGAnc3VjY2VzcydgLCBgJ2luZm8nYCwgYCd3YXJuaW5nJ2AsIGAnZGFuZ2VyJ2AsIGAncHJpbWFyeSdgLFxuXHQgKiBgJ3NlY29uZGFyeSdgLCBgJ2xpZ2h0J2AgYW5kIGAnZGFyaydgLlxuXHQgKi9cblx0QElucHV0KCkgdHlwZTogc3RyaW5nO1xuXG5cdC8qKlxuXHQgKiBFdmVudCBlbWl0dGVkIHJpZ2h0IGJlZm9yZSB0aGUgcGFuZWwgdG9nZ2xlIGhhcHBlbnMuXG5cdCAqXG5cdCAqIFNlZSBbTmdiUGFuZWxDaGFuZ2VFdmVudF0oIy9jb21wb25lbnRzL2FjY29yZGlvbi9hcGkjTmdiUGFuZWxDaGFuZ2VFdmVudCkgZm9yIHBheWxvYWQgZGV0YWlscy5cblx0ICovXG5cdEBPdXRwdXQoKSBwYW5lbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TmdiUGFuZWxDaGFuZ2VFdmVudD4oKTtcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBleHBhbmRpbmcgYW5pbWF0aW9uIGlzIGZpbmlzaGVkIG9uIHRoZSBwYW5lbC4gVGhlIHBheWxvYWQgaXMgdGhlIHBhbmVsIGlkLlxuXHQgKlxuXHQgKiBAc2luY2UgOC4wLjBcblx0ICovXG5cdEBPdXRwdXQoKSBzaG93biA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIGNvbGxhcHNpbmcgYW5pbWF0aW9uIGlzIGZpbmlzaGVkIG9uIHRoZSBwYW5lbCwgYW5kIGJlZm9yZSB0aGUgcGFuZWwgZWxlbWVudCBpcyByZW1vdmVkLlxuXHQgKiBUaGUgcGF5bG9hZCBpcyB0aGUgcGFuZWwgaWQuXG5cdCAqXG5cdCAqIEBzaW5jZSA4LjAuMFxuXHQgKi9cblx0QE91dHB1dCgpIGhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG5cdGNvbnN0cnVjdG9yKGNvbmZpZzogTmdiQWNjb3JkaW9uQ29uZmlnLCBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cdFx0dGhpcy5hbmltYXRpb24gPSBjb25maWcuYW5pbWF0aW9uO1xuXHRcdHRoaXMudHlwZSA9IGNvbmZpZy50eXBlO1xuXHRcdHRoaXMuY2xvc2VPdGhlclBhbmVscyA9IGNvbmZpZy5jbG9zZU90aGVycztcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgYSBwYW5lbCB3aXRoIGEgZ2l2ZW4gaWQgaXMgZXhwYW5kZWQuXG5cdCAqL1xuXHRpc0V4cGFuZGVkKHBhbmVsSWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFjdGl2ZUlkcy5pbmRleE9mKHBhbmVsSWQpID4gLTE7XG5cdH1cblxuXHQvKipcblx0ICogRXhwYW5kcyBhIHBhbmVsIHdpdGggYSBnaXZlbiBpZC5cblx0ICpcblx0ICogSGFzIG5vIGVmZmVjdCBpZiB0aGUgcGFuZWwgaXMgYWxyZWFkeSBleHBhbmRlZCBvciBkaXNhYmxlZC5cblx0ICovXG5cdGV4cGFuZChwYW5lbElkOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLl9jaGFuZ2VPcGVuU3RhdGUodGhpcy5fZmluZFBhbmVsQnlJZChwYW5lbElkKSwgdHJ1ZSk7XG5cdH1cblxuXHQvKipcblx0ICogRXhwYW5kcyBhbGwgcGFuZWxzLCBpZiBgW2Nsb3NlT3RoZXJzXWAgaXMgYGZhbHNlYC5cblx0ICpcblx0ICogSWYgYFtjbG9zZU90aGVyc11gIGlzIGB0cnVlYCwgaXQgd2lsbCBleHBhbmQgdGhlIGZpcnN0IHBhbmVsLCB1bmxlc3MgdGhlcmUgaXMgYWxyZWFkeSBhIHBhbmVsIG9wZW5lZC5cblx0ICovXG5cdGV4cGFuZEFsbCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5jbG9zZU90aGVyUGFuZWxzKSB7XG5cdFx0XHRpZiAodGhpcy5hY3RpdmVJZHMubGVuZ3RoID09PSAwICYmIHRoaXMucGFuZWxzLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLl9jaGFuZ2VPcGVuU3RhdGUodGhpcy5wYW5lbHMuZmlyc3QsIHRydWUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBhbmVscy5mb3JFYWNoKChwYW5lbCkgPT4gdGhpcy5fY2hhbmdlT3BlblN0YXRlKHBhbmVsLCB0cnVlKSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENvbGxhcHNlcyBhIHBhbmVsIHdpdGggdGhlIGdpdmVuIGlkLlxuXHQgKlxuXHQgKiBIYXMgbm8gZWZmZWN0IGlmIHRoZSBwYW5lbCBpcyBhbHJlYWR5IGNvbGxhcHNlZCBvciBkaXNhYmxlZC5cblx0ICovXG5cdGNvbGxhcHNlKHBhbmVsSWQ6IHN0cmluZykge1xuXHRcdHRoaXMuX2NoYW5nZU9wZW5TdGF0ZSh0aGlzLl9maW5kUGFuZWxCeUlkKHBhbmVsSWQpLCBmYWxzZSk7XG5cdH1cblxuXHQvKipcblx0ICogQ29sbGFwc2VzIGFsbCBvcGVuZWQgcGFuZWxzLlxuXHQgKi9cblx0Y29sbGFwc2VBbGwoKSB7XG5cdFx0dGhpcy5wYW5lbHMuZm9yRWFjaCgocGFuZWwpID0+IHtcblx0XHRcdHRoaXMuX2NoYW5nZU9wZW5TdGF0ZShwYW5lbCwgZmFsc2UpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRvZ2dsZXMgYSBwYW5lbCB3aXRoIHRoZSBnaXZlbiBpZC5cblx0ICpcblx0ICogSGFzIG5vIGVmZmVjdCBpZiB0aGUgcGFuZWwgaXMgZGlzYWJsZWQuXG5cdCAqL1xuXHR0b2dnbGUocGFuZWxJZDogc3RyaW5nKSB7XG5cdFx0Y29uc3QgcGFuZWwgPSB0aGlzLl9maW5kUGFuZWxCeUlkKHBhbmVsSWQpO1xuXHRcdGlmIChwYW5lbCkge1xuXHRcdFx0dGhpcy5fY2hhbmdlT3BlblN0YXRlKHBhbmVsLCAhcGFuZWwuaXNPcGVuKTtcblx0XHR9XG5cdH1cblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG5cdFx0Ly8gYWN0aXZlIGlkIHVwZGF0ZXNcblx0XHRpZiAoaXNTdHJpbmcodGhpcy5hY3RpdmVJZHMpKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZUlkcyA9IHRoaXMuYWN0aXZlSWRzLnNwbGl0KC9cXHMqLFxccyovKTtcblx0XHR9XG5cblx0XHQvLyB1cGRhdGUgcGFuZWxzIG9wZW4gc3RhdGVzXG5cdFx0dGhpcy5wYW5lbHMuZm9yRWFjaCgocGFuZWwpID0+IHtcblx0XHRcdHBhbmVsLmlzT3BlbiA9ICFwYW5lbC5kaXNhYmxlZCAmJiB0aGlzLmFjdGl2ZUlkcy5pbmRleE9mKHBhbmVsLmlkKSA+IC0xO1xuXHRcdH0pO1xuXG5cdFx0Ly8gY2xvc2VPdGhlcnMgdXBkYXRlc1xuXHRcdGlmICh0aGlzLmFjdGl2ZUlkcy5sZW5ndGggPiAxICYmIHRoaXMuY2xvc2VPdGhlclBhbmVscykge1xuXHRcdFx0dGhpcy5fY2xvc2VPdGhlcnModGhpcy5hY3RpdmVJZHNbMF0sIGZhbHNlKTtcblx0XHRcdHRoaXMuX3VwZGF0ZUFjdGl2ZUlkcygpO1xuXHRcdH1cblxuXHRcdC8vIFNldHVwIHRoZSBpbml0aWFsIGNsYXNzZXMgaGVyZVxuXHRcdHRoaXMuX25nWm9uZS5vblN0YWJsZS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHR0aGlzLnBhbmVscy5mb3JFYWNoKChwYW5lbCkgPT4ge1xuXHRcdFx0XHRjb25zdCBwYW5lbEVsZW1lbnQgPSBwYW5lbC5wYW5lbERpdjtcblx0XHRcdFx0aWYgKHBhbmVsRWxlbWVudCkge1xuXHRcdFx0XHRcdGlmICghcGFuZWwuaW5pdENsYXNzRG9uZSkge1xuXHRcdFx0XHRcdFx0cGFuZWwuaW5pdENsYXNzRG9uZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRuZ2JSdW5UcmFuc2l0aW9uKHRoaXMuX25nWm9uZSwgcGFuZWxFbGVtZW50LCBuZ2JDb2xsYXBzaW5nVHJhbnNpdGlvbiwge1xuXHRcdFx0XHRcdFx0XHRhbmltYXRpb246IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRydW5uaW5nVHJhbnNpdGlvbjogJ2NvbnRpbnVlJyxcblx0XHRcdFx0XHRcdFx0Y29udGV4dDogeyBkaXJlY3Rpb246IHBhbmVsLmlzT3BlbiA/ICdzaG93JyA6ICdoaWRlJywgZGltZW5zaW9uOiAnaGVpZ2h0JyB9LFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIENsYXNzZXMgbXVzdCBiZSBpbml0aWFsaXplZCBuZXh0IHRpbWUgaXQgd2lsbCBiZSBpbiB0aGUgZG9tXG5cdFx0XHRcdFx0cGFuZWwuaW5pdENsYXNzRG9uZSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgX2NoYW5nZU9wZW5TdGF0ZShwYW5lbDogTmdiUGFuZWwgfCBudWxsLCBuZXh0U3RhdGU6IGJvb2xlYW4pIHtcblx0XHRpZiAocGFuZWwgIT0gbnVsbCAmJiAhcGFuZWwuZGlzYWJsZWQgJiYgcGFuZWwuaXNPcGVuICE9PSBuZXh0U3RhdGUpIHtcblx0XHRcdGxldCBkZWZhdWx0UHJldmVudGVkID0gZmFsc2U7XG5cblx0XHRcdHRoaXMucGFuZWxDaGFuZ2UuZW1pdCh7XG5cdFx0XHRcdHBhbmVsSWQ6IHBhbmVsLmlkLFxuXHRcdFx0XHRuZXh0U3RhdGU6IG5leHRTdGF0ZSxcblx0XHRcdFx0cHJldmVudERlZmF1bHQ6ICgpID0+IHtcblx0XHRcdFx0XHRkZWZhdWx0UHJldmVudGVkID0gdHJ1ZTtcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoIWRlZmF1bHRQcmV2ZW50ZWQpIHtcblx0XHRcdFx0cGFuZWwuaXNPcGVuID0gbmV4dFN0YXRlO1xuXHRcdFx0XHRwYW5lbC50cmFuc2l0aW9uUnVubmluZyA9IHRydWU7XG5cblx0XHRcdFx0aWYgKG5leHRTdGF0ZSAmJiB0aGlzLmNsb3NlT3RoZXJQYW5lbHMpIHtcblx0XHRcdFx0XHR0aGlzLl9jbG9zZU90aGVycyhwYW5lbC5pZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fdXBkYXRlQWN0aXZlSWRzKCk7XG5cdFx0XHRcdHRoaXMuX3J1blRyYW5zaXRpb25zKHRoaXMuYW5pbWF0aW9uKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIF9jbG9zZU90aGVycyhwYW5lbElkOiBzdHJpbmcsIGVuYWJsZVRyYW5zaXRpb24gPSB0cnVlKSB7XG5cdFx0dGhpcy5wYW5lbHMuZm9yRWFjaCgocGFuZWwpID0+IHtcblx0XHRcdGlmIChwYW5lbC5pZCAhPT0gcGFuZWxJZCAmJiBwYW5lbC5pc09wZW4pIHtcblx0XHRcdFx0cGFuZWwuaXNPcGVuID0gZmFsc2U7XG5cdFx0XHRcdHBhbmVsLnRyYW5zaXRpb25SdW5uaW5nID0gZW5hYmxlVHJhbnNpdGlvbjtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgX2ZpbmRQYW5lbEJ5SWQocGFuZWxJZDogc3RyaW5nKTogTmdiUGFuZWwgfCBudWxsIHtcblx0XHRyZXR1cm4gdGhpcy5wYW5lbHMuZmluZCgocCkgPT4gcC5pZCA9PT0gcGFuZWxJZCkgfHwgbnVsbDtcblx0fVxuXG5cdHByaXZhdGUgX3VwZGF0ZUFjdGl2ZUlkcygpIHtcblx0XHR0aGlzLmFjdGl2ZUlkcyA9IHRoaXMucGFuZWxzLmZpbHRlcigocGFuZWwpID0+IHBhbmVsLmlzT3BlbiAmJiAhcGFuZWwuZGlzYWJsZWQpLm1hcCgocGFuZWwpID0+IHBhbmVsLmlkKTtcblx0fVxuXG5cdHByaXZhdGUgX3J1blRyYW5zaXRpb25zKGFuaW1hdGlvbjogYm9vbGVhbikge1xuXHRcdC8vIGRldGVjdENoYW5nZXMgaXMgcGVyZm9ybWVkIHRvIGVuc3VyZSB0aGF0IGFsbCBwYW5lbHMgYXJlIGluIHRoZSBkb20gKHZpYSB0cmFuc2l0aW9uUnVubmluZyA9IHRydWUpXG5cdFx0Ly8gYmVmb3JlIHN0YXJ0aW5nIHRoZSBhbmltYXRpb25cblx0XHR0aGlzLl9jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG5cblx0XHR0aGlzLnBhbmVscy5mb3JFYWNoKChwYW5lbCkgPT4ge1xuXHRcdFx0Ly8gV2hlbiBwYW5lbC50cmFuc2l0aW9uUnVubmluZyBpcyB0cnVlLCB0aGUgdHJhbnNpdGlvbiBuZWVkcyB0byBiZSBzdGFydGVkIE9SIHJldmVyc2VkLFxuXHRcdFx0Ly8gVGhlIGRpcmVjdGlvbiAoc2hvdyBvciBoaWRlKSBpcyBjaG9vc2VuIGJ5IGVhY2ggcGFuZWwuaXNPcGVuIHN0YXRlXG5cdFx0XHRpZiAocGFuZWwudHJhbnNpdGlvblJ1bm5pbmcpIHtcblx0XHRcdFx0Y29uc3QgcGFuZWxFbGVtZW50ID0gcGFuZWwucGFuZWxEaXY7XG5cdFx0XHRcdG5nYlJ1blRyYW5zaXRpb24odGhpcy5fbmdab25lLCBwYW5lbEVsZW1lbnQhLCBuZ2JDb2xsYXBzaW5nVHJhbnNpdGlvbiwge1xuXHRcdFx0XHRcdGFuaW1hdGlvbixcblx0XHRcdFx0XHRydW5uaW5nVHJhbnNpdGlvbjogJ3N0b3AnLFxuXHRcdFx0XHRcdGNvbnRleHQ6IHsgZGlyZWN0aW9uOiBwYW5lbC5pc09wZW4gPyAnc2hvdycgOiAnaGlkZScsIGRpbWVuc2lvbjogJ2hlaWdodCcgfSxcblx0XHRcdFx0fSkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0XHRwYW5lbC50cmFuc2l0aW9uUnVubmluZyA9IGZhbHNlO1xuXHRcdFx0XHRcdGNvbnN0IHsgaWQgfSA9IHBhbmVsO1xuXHRcdFx0XHRcdGlmIChwYW5lbC5pc09wZW4pIHtcblx0XHRcdFx0XHRcdHBhbmVsLnNob3duLmVtaXQoKTtcblx0XHRcdFx0XHRcdHRoaXMuc2hvd24uZW1pdChpZCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHBhbmVsLmhpZGRlbi5lbWl0KCk7XG5cdFx0XHRcdFx0XHR0aGlzLmhpZGRlbi5lbWl0KGlkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG4iXX0=