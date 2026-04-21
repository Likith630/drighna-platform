pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "likith630/drighna-platform"
    }

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/likith630/drighna-platform.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat "docker build -t %DOCKER_IMAGE% ."
            }
        }

        stage('Push Docker Image') {
            steps {
                bat "docker push %DOCKER_IMAGE%"
            }
        }
    }
}