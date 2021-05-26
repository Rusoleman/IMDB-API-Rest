const {create} = require("../src/controllers/actors.controller");
const supertest = require("supertest");
const app = require("../src/server.js");
const {Actors} = require("../src/models");

test("Prooving actor creation", () =>{
    //AAA Patron
    //<-- Arrange -->
    const todays = new Date();
    const actors = {
        firstName: 'Will',
        lastname: 'Smith',
        dob:'1968-09-25',
        biography:'',
        profile_photo:"",
        active: true,
        
    };
    //<-- Act -->
    let response = await supertest(app).post("/api/v1/actors").send(actors); 
    //<-- Acert -->
    //Status code
    //Property object Ej.Active
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("active", true);
    expect(response.body).toHaveProperty("id");
    done();
});

afterAll(async() => {
    await Actors.destroy({where: {id}})
});