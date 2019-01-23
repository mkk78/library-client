import * as fs from 'fs'
import { mkdirp } from 'mkdirp'
import * as report from 'cucumber-html-reporter'
const Cucumber = require('cucumber')

export class CucumberReportExtenction {
    
    private jsonDir = process.cwd() + "/reports/json";
    private htmlDir = process.cwd() + "/reports/html";
    private jsonFile = this.jsonDir + "/cucumber_report.json";

    private cucumberReporterOption = {
        theme: "bootstrap",
        jsonFile: this.jsonFile,
        output: this.htmlDir + "/cucumber_reporter.html",
        reportSuiteAsScenarios: true,
        metadata: {
            "App Version" : "0.0.1",
            "Test Environtment": "Testing",
            "Browser": "Chrome",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Local"

        }
    };

    private createReportFile(dirName, fileName, fileContent) {
        // Check if the directory exist
        if (!fs.existsSync(dirName))
            mkdirp.sync(dirName)

        try {
            fs.writeFileSync(fileName, fileContent);
        } catch (message) {
            console.log('Failed to create File/Directory : ' + message);
        }
    }

    private generateCucumberReport(cucumberReportOption) {
        report.generate(cucumberReportOption);
    }

    JsonFormatter = new Cucumber.JsonFormatter({
        log: jLog => {
            this.createReportFile(this.jsonDir, this.jsonFile, jLog);
            this.generateCucumberReport(this.cucumberReporterOption);
        }
    })
}

export let JsonFormatter = new CucumberReportExtenction().JsonFormatter;