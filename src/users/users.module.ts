import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UserEntity } from './users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailModule } from './../mail/mail.module';
import { MailService } from 'src/mail/mail.service';
import { MailerService } from '@nestjs-modules/mailer';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), MailModule],
  providers: [UsersService, UsersResolver, MailService],
  exports: [TypeOrmModule],
})
export class UsersModule {}
