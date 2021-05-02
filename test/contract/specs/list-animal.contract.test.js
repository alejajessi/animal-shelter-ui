<<<<<<< HEAD
import { provider } from "./init-pact";
import { AnimalController } from "../../../controllers";
import { Matchers} from "@pact-foundation/pact";

describe( 'Give An Animal Service', () =>{
    describe( 'When a request to list allthe animals is made', () =>{
        beforeEach( async ()=>{
            await provider.setup();
            await provider.addInteraction({
                state: 'there are animals',
                uponReceiving: 'a request to get all animals',
=======
import {Matchers} from '@pact-foundation/pact';
import {AnimalController} from '../../../controllers';
import {provider} from '../config/initPact';

describe('Animal Service', () => {
    describe('When a request to list all animals is made', () => {
        beforeAll(async () => {
            await provider.setup();
            await provider.addInteraction({
                uponReceiving: 'a request to list all animals',
                state: "has animals",
>>>>>>> main
                withRequest: {
                    method: 'GET',
                    path: '/animals'
                },
                willRespondWith: {
                    status: 200,
<<<<<<< HEAD
                    body: Matchers.eachLike({
                        breed: Matchers.like("Bengali"),
                        gender: Matchers.term({generate:"Female", matcher:"Female|Male" }),
                        isVaccinated: Matchers.boolean(true),
                        name: Matchers.string("Manchas"),
                        vaccines: Matchers.eachLike("rabia", {min: 1})
                    }, {min:1})

=======
                    body: Matchers.eachLike(
                        {
                            name: Matchers.like('manchas'),
                            breed: Matchers.like("Bengali"),
                            gender: Matchers.like("Female"),
                            vaccinated: Matchers.boolean(true)
                        }
                    )
>>>>>>> main
                }
            });
        });

<<<<<<< HEAD
        it( "Then it should return the right data", async() =>{
            jest.setTimeout(30000);
            const response = await AnimalController.list();
            expect(response.data).toMatchSnapshot();

            await provider.verify();
        });

        afterAll(async () => {
            await provider.finalize();
        });
    });
});
=======
        test('should return the correct data', async () => {
            const response = await AnimalController.list();
            expect(response.data).toMatchSnapshot();
            
            await provider.verify()
        });

        afterAll(() => provider.finalize());
    });
});
>>>>>>> main
