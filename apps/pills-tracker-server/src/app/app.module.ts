import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DataAccessDbModule } from '@pills-tracker/pills-tracker-server-data-access-db'

@Module({
  imports: [DataAccessDbModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
