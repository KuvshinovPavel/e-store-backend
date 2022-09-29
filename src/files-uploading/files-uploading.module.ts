import { Module } from '@nestjs/common';
import { FilesUploadingService } from './files-uploading.service';

@Module({
  providers: [FilesUploadingService],
  exports: [
    FilesUploadingService
  ]
})
export class FilesUploadingModule {}
