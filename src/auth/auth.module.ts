import { Module } from '@nestjs/common';
// import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MailModule } from './../mail/mail.module';

@Module({
  imports: [MailModule], // 📧
  // controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
