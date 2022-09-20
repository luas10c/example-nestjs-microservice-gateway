import { Module } from '@nestjs/common'

import { UserAdapterModule } from './adapters/user.adapter.module'

@Module({
  imports: [UserAdapterModule]
})
export class UserModule {}
