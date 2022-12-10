import { Field, InputType } from "type-graphql";

// o input serve para definir uma estrutura de dados que recebemos como parâmetro
// de alguma mutation ou query
@InputType()
export class CreateAppointmentInput {
  @Field()
  customerId: string;
  
  @Field()
  startsAt: Date;

  @Field()
  endsAt: Date;
}