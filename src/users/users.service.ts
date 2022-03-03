import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserInput } from 'src/graphql';
import { Repository } from 'typeorm';
import { MailService } from './../mail/mail.service';
import { UserEntity } from './users.entity';
// import { User, UserEntity } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity) private reps: Repository<UserEntity>,
    private mailService: MailService,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    const users = await this.reps.find();
    return users;
  }

  async find(id: string): Promise<UserEntity> {
    const user = await this.reps.findOne(id);
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async create(data: UserEntity): Promise<UserEntity> {
    const user = this.reps.create(data);
    const res = await this.reps.insert(data);
    user.id = res.generatedMaps[0].id;
    return user;
  }

  async update(id: string, data: UserEntity): Promise<UserEntity> {
    console.log('Data', data);
    // new MailModule();
    await this.reps.update({ id }, data);
    return await this.reps.findOne({ id });
  }

  async delete(id: string): Promise<boolean> {
    await this.reps.delete(id);
    return true;
  }

  async userSign(data: UserEntity) {
    const token = Math.floor(1000 + Math.random() * 9000).toString();
    // create user in db
    const user = this.reps.create(data);
    const res = await this.reps.insert(data);
    user.id = res.generatedMaps[0].id;
    // send confirmation mail
    await this.mailService.sendUserConfirmation(data, token);

    return true;
  }
}
