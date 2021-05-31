import { provider } from "../config/initPact";
import { AnimalController } from "../../../controllers";

const animal = {
  name: "manchas",
  breed: "Bengali",
  gender: "Female",
  vaccinated: true,
};

describe("given an animal service", () => {
  beforeAll(async () => {
    await provider.setup();
  });

  describe("When a request to create an animal is made", () => {
    beforeAll(async () => {
      await provider.addInteraction({
        uponReceiving: "a request to create an animal",
        state: "create an animal",
        withRequest: {
          method: "POST",
          path: "/animals",
          body: animal,
        },
        willRespondWith: {
          status: 201,
        },
      });
    });

    test("should return the correct data", async () => {
      const response = await AnimalController.register(animal);
      expect(response.data).toMatchSnapshot();

      await provider.verify();
    });
  });
  afterAll(async () => provider.finalize());
});