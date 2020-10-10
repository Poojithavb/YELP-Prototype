let assert = require('chai').assert;
let app = require('../index');
let chai = require('chai');
let expect = require('chai').expect;

chai.use(require('chai-http'));
let agent = require('chai').request.agent(app);



describe('Yelp',function(){
    describe('Login Test',function(){
        it('Incorrect Password',()=>{
            agent.post('/yelp/login/')
            .send({email_id:'poo@gmail.com', password:'Psssword90'})
            .then(function(res){
                expect(res.text).to.equal('Username/password is wrong')
            })
            .catch(error=>{
                console.log(error);
            });
        });
        it('Succcessful Login',()=>{
            agent.post('/yelp/login')
            .send({email_id:'poo@gmail.com', password:'P@ssword90'})
            .then(function(res){
                expect(res.status).to.equal(200);
            })
            .catch(error=>{
                console.log(error);
            })
        })
    })
})

describe('Update Test',()=>{
    it('Update user contact details',()=>{
        agent.post('/yelp/profile/customer/27/contactInfo/')
        .send({user_id:27,email:'pooji@gmail.com',contactnum:'+123-456-4317'})
        .then(function (res) {
            expect(res.text).to.equal("updated");
        })
        .catch(error => {
            console.log(error);
        });
    })
})

describe('Restaurant list Test', ()=>{
    it('Fetch restaurant list',()=>{
        agent.get('/yelp/restaurant/searchlist/1/Yel')
        .send({keyword:'yel',selectoption:1})
        .then(function(res) {
            expect(JSON.parse(res.text)[0].name).to.equal('Rajwadi Thali');
        })
        .catch(error=>{
            console.log(error);
        })
    })
})

describe('Insert Review Test',()=>{
    it('Insert review for restaurant',()=>{
        agent.post('/yelp/restaurant/11/addreview')
        .send({rating:5,review:'Great service and good quality. Mostly took takeout and have enjoyed the meal thoroughly each time.',
                rest_id:11,cust_id:28})
        .then(function (res) {
            expect(res.text).to.equal("Inserted");
        })
        .catch(error => {
            console.log(error);
        });
    })
})


describe('Order Items Test',()=>{
    it('Fetch restaurant orders',()=>{
        agent.get('/yelp/orders/11/getitemdetails')
        .send({rest_id:11})
        .then(function(res) {
            expect(JSON.parse(res.text)[0].category).to.equal('PickUp')
        })
        .catch(error=>{
            console.log(error);
        })
    })
})

