let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config ={
    directConnect:true,

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--start-fullscreen'
            ]
        }
    },

    specs:['../Tests/HomePage.spec.js'],

    onPrepare:function(){
        // browser.manage().window().maximize();
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true,
            showstack: false
        }));
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: '../report/screenshots',
            preserveDirectory: false,
            screenshotsSubfolder: 'images',
            jsonsSubfolder: 'jsons',
            docName: 'Bookit-Project.html'
        }).getJasmine2Reporter());
    },

    jasmineNodeOpts: {
        showColors: true, 
        defaultTimeoutInterval: 90000,    
        print: function() {}   
    }

}