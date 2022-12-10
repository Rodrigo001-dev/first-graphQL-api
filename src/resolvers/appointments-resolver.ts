import { Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class AppointmentsResolver {
  @Query(() => String)
  async helloWorld() {
    return 'Hello World'
  }

  @Mutation(() => Boolean)
  async createAppointment() {
    
    
    return true;
  }
}