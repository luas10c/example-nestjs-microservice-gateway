import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { join } from 'path'

import { UserAdapterService } from './services/user.adapter.service'

import { UserResolver } from './resolvers/user.resolver'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50051',
          package: 'hero',
          protoPath: join(__dirname, '..', '..', 'protobuffs', 'hero.proto'),
          loader: {
            keepCase: true,
            longs: Number,
            enums: String,
            defaults: false,
            arrays: true,
            objects: true,
            includeDirs: [join(__dirname, '..', '..', 'protobufs')]
          }
        }
      }
    ])
  ],
  providers: [UserAdapterService, UserResolver]
})
export class UserAdapterModule {}
