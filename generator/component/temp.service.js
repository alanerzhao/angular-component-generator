import { BaseService } from 'app/base.service';

export class <%= upCaseName %>Service extends BaseService {
    /*@ngInject*/
    constructor($http, $q) {
        super();
        this.$http = $http;
        this.$q = $q;
    }

}
