import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';

import { join } from 'path';


@Module({
  imports:[
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: Number('587'),
        secure: false,
        auth: {
          user: 'cecilia.carneiro@summercomunicacao.com.br',
          pass: 'C3yr!4@T',
        },
      },
      defaults: {
        from: '"No reply" cecilia.carneiro@summercomunicacao.com.br',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new EjsAdapter(),
        options: {
          strict: false,
        },
      },
    }),
  ],
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule {}
