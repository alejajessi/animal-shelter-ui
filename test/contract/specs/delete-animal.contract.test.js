import { provider } from '../config/init-pact';
import { AnimalController } from '../../../controllers';

const name = 'Manchas';

describe('Given an animal service', () =>{ 
    beforeAll(async() => {
        await provider.setup();
    });

   describe('When a request to delete an animal is made', () =>{
        beforeAll(async ()=>{
            await provider.addInteraction({
                uponReceiving: 'a request to delete an animal',
                state:"delete Manchas animal",
                withRequest: {
                    method: 'DELETE',
                    path: `/animals/${name}`,			
                },
                willRespondWith: {
                    status:204
                }
            });
       });

        test("Then it should return the correct data", async() => {
            const response = await AnimalController.delete(name);
            expect(response.status).toEqual(204);
             await provider.verify();
            
        });
    });

    afterAll(()=>{
         provider.finalize();
    });
});