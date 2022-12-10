import { Field, ObjectType } from "type-graphql";

// essa classe Appointment não é a entidade de agendamento(appointment) a nível
// de aplicação, ela é uma entidade a nível de camada HTTP, ou seja, eu só vou
// definir dentro dessa classe os campos(informações) que eu quero que estejam
// disponíveis para o frontend consumir
@ObjectType()
export class Appointment {
  @Field()
  startsAt: Date;

  @Field()
  endsAt: Date;
}