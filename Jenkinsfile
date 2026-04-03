pipeline {
    agent any

    tools {
        nodejs 'Node-20'
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Run App') {
            steps {
                sh 'node src/app.js &'
            }
        }
    }
}