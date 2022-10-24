pipeline {
    agent {
        docker {
            label 'linux && nodejs'
            image 'cypress/browsers'
        }
    }
    
    environment {
        HOME = "${WORKSPACE}"     
        CYPRESS_CACHE_FOLDER = '~/.cache/Cypress'
    }
    
    stages{
        stage('Build') {
            steps {      
                echo 'installing dependencies'
                sh 'npm ci'
                sh 'npm run cy:verify'
                sh 'npm run clean_reports'
            }
        }
        stage('Test and Report') {
            steps {
                echo 'running tests'
                sh 'npx cypress run -e configFile=$env'
            }
            post {
                    always {
                        cucumber failedFeaturesNumber: -1, failedScenariosNumber: -1, failedStepsNumber: -1, fileIncludePattern: '**/*.json', jsonReportDirectory: 'cypress/cucumber-json', pendingStepsNumber: -1, skippedStepsNumber: -1, sortingMethod: 'ALPHABETICAL', undefinedStepsNumber: -1
                    }
                }
        }
        stage('Message') {
            steps {
                echo 'Test run finished!'
            }
        }
    }
}