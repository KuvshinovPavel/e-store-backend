import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Comment } from "./comments.model";

@Module({
  providers: [CommentsService],
  controllers: [CommentsController],
  exports:[],
  imports:[

    SequelizeModule.forFeature([Comment])
  ]
})
export class CommentsModule {}
