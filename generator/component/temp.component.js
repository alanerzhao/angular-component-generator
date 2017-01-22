class <%= upCaseName %> {
    /*@ngInject*/
    constructor() {
        // do nothing
    }
    $onInit() {
        this.name = '<%= upCaseName %>';
    }
}
export const <%= camelCaseName %>Component = {
    controller: <%= upCaseName %>,
    template: require('./<%= name %>.html')
};

