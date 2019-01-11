import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements'

import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

@NgModule({
    declarations: [
        Component1Component,
        Component2Component
    ],
    imports: [
        BrowserModule
    ],
    // Put all custom component in entryComponents
    entryComponents: [
        Component1Component,
        Component2Component
    ]
})
export class AppModule {
    constructor(private injector: Injector) {
        // New createCustomElement from Angular 6, make sure to install and import @angular/elements
        const component1 = createCustomElement(Component1Component, { injector });
        // Define custom element on global
        // Our custom element name called 'app-component1'
        window.customElements.define('app-component1', component1);

        const component2 = createCustomElement(Component2Component, { injector });
        window.customElements.define('app-component2', component2);
    }

    // Empty bootstrap call allow our custom elements to bootstrap them selves
    // Required by Angular since we did not specify which component to bootstrap in @NgModule
    ngDoBootstrap() {
    }
}
