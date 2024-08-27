const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/e2e/learnFast/cucumber-json',
	reportPath: 'cypress/e2e/learnFast/cucumber-json/report.html',
	metadata:{
        browser: {
            name: 'chrome'
        },
        device: 'Local test machine',
        platform: {
            name: 'windows',
            version: '11'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Project C'},
            {label: 'Release', value: '1.0'},
            {label: 'Execution Start Time', value: Date.now().toString},
            {label: 'Execution End Time', value:  Date.now().toString}
        ]
    }
});