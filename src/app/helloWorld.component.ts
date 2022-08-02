import { Component } from "@angular/core";
//ng new appName, ng serve start
//selector is html tag name we use
//template for the html we use
//{{}} to use dynamic variable 

@Component({
    selector:'helloworld',
    template:'<h1>{{titleBen}}</h1>',
    styles:[`
    h1{
       color:blue; 
    }
    `],
})

export class HelloWorldComponent{
    titleBen ='Hello world Ben';
}