pipeline {
    agent any
    tools {
        // Install the Maven version configured as "M3" and add it to the path.   bat 'npm install'
        nodejs "node"
    }
    stages {
        stage('copiando repositorio'){
            steps{
                git branch: 'main', credentialsId: 'ghp_uQ7KZjnooNsZOgopCG2Fb', url: 'https://github.com/PascualDomingo/Integracion-continua-P1-AYD2'
            }
        }
        stage('install dependencias'){
            steps{
                bat 'npm install'
            }
        }
        stage('prueba unitaria'){
            steps{
                bat 'npm test'
            }
        }
   
       
    }
}


//git branch: 'main', credentialsId: 'ghp_kfHUhRBWGRT8DlAX',
