const { assert } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = `http://localhost:8081`;
chai.use(chaiHttp)

describe('prueba unitaria: ', ()=>{
    it('autenticacion', (done)=>{
        chai.request(server)
        .post('/login')
        .type('form')
        .send({
            "email":"ayd@gmail.com",
            "password": "pas"
        })
        .end((err, res)=>{
            chai.expect(res).to.have.status(500);
            //console.log(res.redirects)
            done();
        })
    });


    it('nuevo usuario', (done)=>{
        chai.request(server)
        .post('/registrar')
        .type('form')
        .send({
            "email":"ayd5@gmail.com",
            "name":"hochi",
            "password": "pas"
        })
        .end((err, res)=>{
            chai.expect(res).to.have.status(200);
            //console.log(res.redirects[0]);
            assert(res.redirects[0] === 'http://localhost:8081/login' )
            done();
        })
    });

    

    it('modificar usuario', (done)=>{
        chai.request(server)
        .post('/modificar')
        .type('form')
        .send({
            "email":"ayd@gmail.com",
            "username":"AYD2analisis",
            "password": "pas"
        })
        .end((err, res)=>{
            chai.expect(res).to.have.status(500);
            //console.log(res.redirects[0]);
            assert(res.redirects[0] === 'http://localhost:8081/index' )
            done();
        })
    });




});
