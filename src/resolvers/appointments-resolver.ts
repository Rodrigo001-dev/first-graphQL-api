import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { CreateAppointmentInput } from "../dtos/inputs/create-appointment-input";

@Resolver()
export class AppointmentsResolver {
  @Query(() => String)
  async helloWorld() {
    return 'Hello World'
  }

  @Mutation(() => Boolean)
  async createAppointment(@Arg('data') data: CreateAppointmentInput) {
    
    
    return true;
  }
}