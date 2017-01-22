import {<%= camelCaseName %>Component} from './<%= name %>.component';
import {<%= upCaseName %>Service} from './<%= name %>.service';


export const <%= camelCaseName%>Module = angular.module('<%= camelCaseName %>Module', [
])
    .component('<%= camelCaseName%>', <%= camelCaseName %>Component)
    .service('<%= upCaseName %>Service', <%= upCaseName %>Service)
    .name;

